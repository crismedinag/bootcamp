
const mongoose = require('mongoose');
let Credentials  = mongoose.Schema;

const CredentialsSchema = new Credentials
(  
    {
        address: String,
        phone: { type: Number, validate: [function(phone){return phone.length = 9;}, "The phone should have nine numbers"] },
        email: String
    }  
);

module.exports = mongoose.model('usercredentials', CredentialsSchema);