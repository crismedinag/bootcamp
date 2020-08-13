
// modelo usuario

const mongoose = require('mongoose');
let User = mongoose.Schema;

const UserSchema = new User
(
    {
        login: String,
        password: { type: String, validate: [function(password){return password.length >= 4;}, "The password should be longer"]},
        name: { type: String, enum: ["Luis", "Ana"] }, 
        surname: String,
        dateOfBirth: { type: Number, min: 1975, max: 2002 },
        comments: String,
        role: String,
        address: String,
        phone: { type: Number, validate: [function(phone){return phone.length = 9;}, "The phone should have nine numbers"] },
        email: String,
        follow: String
    }
);

module.exports = mongoose.model('User', UserSchema, "user");