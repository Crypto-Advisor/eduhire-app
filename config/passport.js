const fs = require('fs');
const { ExtractJwt } = require('passport-jwt/lib');
const { fromAuthHeaderAsBearerToken } = require('passport-jwt/lib/extract_jwt');
const path = require('path');
const User = require('mongoose').model('User');
const JwtStrategy = require('passport-jwt').Strategy;

const pathToKey = path.join(__dirname, '..', 'id_rsa_pub.pem');
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');

// var cookieExtractor = function(req) {
//     var token = null;
//     if(req && req.cookies){
//         token = req.cookies['token']
//     }
//     console.log(token)
//     return token
// }

const options = {
    jwtFromRequest: fromAuthHeaderAsBearerToken(),
    secretOrKey: PUB_KEY,
    algorithms: ['RS256']
};

const strategy = new JwtStrategy(options, (payload, done) =>{
    User.findOne({_id: payload.sub })
        .then((user)=>{
            if(user){
                return done(null, user);
            } else{
                return done(null, false);
            }
        })
        .catch(err => done(err, null));
})

module.exports = (passport) => {
    passport.use(strategy)
}