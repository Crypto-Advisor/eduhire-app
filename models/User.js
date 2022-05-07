const mongoose = require('mongoose');

const UserSchema = new mongoose.schema({
    username: String,
    hash: String,
    salt: String,
    admin: Boolean
})

mongoose.model('User', UserSchema);