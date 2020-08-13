
const mongoose = require('mongoose');
let Profile  = mongoose.Schema;

const ProfileSchema = new Profile
(
    {
        name: { type: String, enum: ["Luis", "Ana"] },
        surname: String,
        dateOfBirth: { type: Number, min: 1990, max: 2002 },
        comments: String,
        role: String
    }
);

ProfileSchema.pre('save', function(next)
    {
        console.log("Middleware start");
        if(this.dateOfBirth < 1990)
        {
            console.log("The date entered is less than 1990-01-01");
            next();
        }
        else 
        {
            console.log("The date should be greater than 1990 and less than 2002");
        }
    }
);

module.exports = mongoose.model('userprofile', ProfileSchema);