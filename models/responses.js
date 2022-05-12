const mongoose = require('mongoose');
const {UserSchema} = require('./user');
const {FormSchema} = require('./form');

const ResponseSchema = new mongoose.Schema({
    user: {
        type: UserSchema,
        required: true
    },
    form: {
        type: FormSchema,
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

mongoose.model('Response', ResponseSchema);