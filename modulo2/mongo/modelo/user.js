
// Modelo usuario con validaciones

const mongoose = require('mongoose');
let User = mongoose.Schema;

const UserSchema = new User(
    {
        userId: 
        {
            "name": String,
            password: { type: String, validate: [function(password){return password.length >= 4;}, "The password should be longer"] }
        },

        profile: 
        {
            name: { type: String, enum: ["Luis", "Ana"] }, 
            surname: String,
            dateOfBirth: { type: Date, min: 1990-01-01, max: 2002-01-01 },
            comments: String,
            role: String
        },

        creedentials: 
        {
            "address": String,
            phone: { type: Number, validate: [function(phone){return phone.length = 9;}, "The phone should have nine numbers"] },
            "email": String
        }  
    }
);

UserSchema.pre('save', function(next)
    {
        console.log("Middleware start");
        if(this.dateOfBirth < 1990-01-01)
        {
            console.log("The date entered is less than 1990-01-01");
            next();
        }
        else 
        {
            console.log("The date should be greater than 1990-01-01 and less than 2002-01-01");
        }
    }
);

module.exports = mongoose.model('User', UserSchema, "user");
