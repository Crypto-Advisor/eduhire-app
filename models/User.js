const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    hash: String,
    salt: String,
    email: {
        type: String,
        required: false
    },
    telegram: {
        type: String,
        required: false
    },
    admin: Boolean
})

const User = mongoose.model('User', UserSchema);
module.exports = {
    UserSchema,
    User
};