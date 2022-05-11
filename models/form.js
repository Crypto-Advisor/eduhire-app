const mongoose = require('mongoose');
const User = require('mongoose').model('User');

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
        type: User,
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
            type: positions,
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

module.exports = mongoose.model('Form', FormSchema);