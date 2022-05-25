const mongoose = require('mongoose');
const { token } = require('morgan');
const router = require('express').Router(); 
const User = mongoose.model('User');
const Response = mongoose.model('Response');
const Form = mongoose.model('Form');
const passport = require('passport');
const utils = require('../utils');

router.get('/authenticate', passport.authenticate('jwt', {session: false}), (req, res, next) =>{
    res.status(200).json({ user: req.user ,success: true, msg: 'you are authorized!' });
})

router.post('/login', function(req, res, next){
    const {username, password} = req.body.data
    User.findOne({ username: username })
        .then((user) =>{
            if(!user){
                res.status(401).json({ success: false, msg: "could not find user" });
            }

            const isValid = utils.validPassword(password, user.hash, user.salt);

            if(isValid){
                const tokenObject = utils.issueJWT(user)

                res.status(200).json({ success: true, user: user, token: tokenObject.token, expiresIn: tokenObject.expires });
            } else{
                res.status(401).json({ success: false, msg: "you entered the wrong password" });
            }
        })
        .catch((err) => next(err));
});

router.post('/register', function(req, res, next){
    const {username, password} = req.body.data
    const saltHash = utils.genPassword(password);
    
    const salt = saltHash.salt;
    const hash = saltHash.hash;

    const newUser = new User({
        username: username,
        hash: hash,
        salt: salt,
        admin: false
    });

    newUser.save()
        .then((user) =>{

            const jwt = utils.issueJWT(user);

            res.json({success: true, user: user, token: jwt.token , expiresIn: jwt.expires });
        })
        .catch(err => next(err));
});

router.post('/update', passport.authenticate('jwt', {session: false}), function(req, res, next){
    const {username, password, oldPassword} = req.body.data

    User.findOne({ username: username })
        .then((user) =>{
            if(!user){
                res.status(401).json({ success: false, msg: "could not find user" });
            }

            const isValid = utils.validPassword(oldPassword, user.hash, user.salt);

            if(!isValid){
                res.status(401).json({ success: false, msg: "you entered the wrong password" });
            }

            const saltHash = utils.genPassword(password);

            const salt = saltHash.salt;
            const hash = saltHash.hash;
            user.salt = salt;
            user.hash = hash;

            Form.find({ user: req.user }, function(err, forms) {
                console.log(forms)
                forms.forEach((item) =>{
                    item.user = user
                    item.save()
                })
            })

            Response.find({user: req.user}, function(err, responses) {
                responses.forEach((response) =>{
                    response.user = user
                    response.save()
                })
            })

            user.save()
                .then((user) =>{

                    const jwt = utils.issueJWT(user);
        
                    res.json({success: true, user: user, token: jwt.token , expiresIn: jwt.expires });
                })
                .catch(err => next(err));
        })
        .catch((err) => next(err));



});

module.exports = router;