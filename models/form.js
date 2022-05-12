const mongoose = require('mongoose');
const {UserSchema} = require('./user');

const positions = {
    developer: {
        fullstack: "Full-stack",
        frontend: "Frontend",
        Backend: "Backend"
    },
    designer: {
        UI: "UI/UX",
        graphic: "Graphic Designer"
    },
    marketing: {
        writer: "Writer",
        marketer: "Marketing",
        community: "Community Manager"
    },
    management: {
        founder: "Founder",
        manager: "Manager",
        advisor: "Advisor"
    },
    other: "Other"
}

const FormSchema = new mongoose.Schema({
    user: {
        type: UserSchema,
        required: true
    },
    form: {
        company_name: {
            type: String,
            required: true
        },
        company_description: {
            type: String,
            required: true
        },
        position: {
            type: String,
            required: true
        },
        position_req: {
            type: String,
            required: true
        },
        research_q: String,
        project_q: String
    }
})


const Form = mongoose.model('Form', FormSchema);
module.exports = {
    FormSchema,
    Form
};