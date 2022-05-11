const mongoose = require('mongoose');
const User = require('mongoose').model('User');
const Form = require('mongoose').model('Form');

const ResponseSchema = new mongoose.Schema({
    user: {
        type: User,
        required: true
    },
    form: {
        type: Form,
        required: true
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(),
    },
    response: {
        research_question: String,
        project: String
    }
})

module.exports = mongoose.model('Response', ResponseSchema);