const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    hash: String,
    salt: String,
    admin: Boolean
})

const User = mongoose.model('User', UserSchema);
module.exports = {
    UserSchema,
    User
};