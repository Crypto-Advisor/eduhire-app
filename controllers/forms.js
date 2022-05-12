const mongoose = require('mongoose');
const Form = mongoose.model('Form');
const utils = require('../utils');

exports.get = (req, res, next) =>{
    Form.find({}, function(err, forms) {
        res.json(forms);
    })
}

exports.create = (req, res, next) =>{
    const {user, company_name, company_description, position, position_req, research_q, project_q} = req.body;
    const newForm = new Form({
        user,
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
        .catch(err => next(err))
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
    Form.deleteOne({ _id: req.body.id }, function(err, result){
        if(err){
            res.send(err)
        } else{
            res.send(result)
        }
    })

}


