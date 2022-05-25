const mongoose = require('mongoose');
const Form = mongoose.model('Form');
const User = mongoose.model('User')
const utils = require('../utils');

exports.get = (req, res, next) =>{
    Form.find({}, function(err, forms) {
        res.json(forms);
    })
}

exports.getByUser = (req, res, next) =>{
    const { username } = req.params
    User.find({ username: username }, function(err, user) {
        if(err){
            res.json({ success: false, err})
        }
        Form.find({ user: user }, function(err, forms) {
            if(err){
                res.json({ success: false, err})
            }
            res.json(forms)
        })
    })
}

exports.getById = (req, res, next) =>{
    const { id } = req.params;
    Form.find({"_id": id}, function(err, form) {
        res.json(form)
    })
}

exports.create = (req, res, next) =>{
    console.log(req.body)
    const {company_name, company_description, position, position_req, research_q, project_q} = req.body;
    const newForm = new Form({
        user: req.user,
        form: {
            company_name,
            company_description,
            position,
            position_req,
            research_q,
            project_q
        }
    });

    newForm.save()
        .then((form) =>{
            res.json({ success: true, form: form })
        })
        .catch(err => console.log(err))
}

exports.update = (req, res, next) =>{
    const {id, user, company_name, company_description, position, position_req, research_q, project_q} = req.body;
    const newForm = {
        form: {
            company_name,
            company_description,
            position,
            position_req,
            research_q,
            project_q
        }
    }

    Form.findByIdAndUpdate(id, newForm, function(err, result){
        if(err){
            res.send(err)
        } else{
            res.send(result)
        }
    })

}

exports.remove = (req, res, next) =>{
    if(!req.user.hash == req.body.user.hash){
        res.send({success: false})
    } else{
        Form.deleteOne({ _id: req.body._id }, function(err, result){
            if(err){
                res.send(err)
            } else{
                res.json({success: true, result})
            }
        })
    }
}




