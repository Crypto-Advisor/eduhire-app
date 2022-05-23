const mongoose = require('mongoose');
const Response = mongoose.model('Response');
const Form = mongoose.model('Form');
const utils = require('../utils');

exports.get = (req, res, next) =>{
    const id = req.params.id
    Form.findOne({ _id: id })
        .then((Form) =>{
            Response.find({ form: Form }, function(err, result){
                if(err){
                    res.send(err)
                } else{
                    res.send(result)
                }
            })
        })
}


exports.create = (req, res, next) =>{
    const { form, research_question, project } = req.body
    const response = {
        research_question,
        project
    }
    const newResponse = new Response({
        user: req.user,
        form,
        response
    })

    newResponse.save()
        .then((response) =>{
            res.json({ success: true, response })
        })
        .catch(err => next(err));
}

exports.update = (req, res, next) =>{

}


exports.remove = (req, res, next) =>{

}

exports.verifyUser = (req, res, next) =>{
    
}
