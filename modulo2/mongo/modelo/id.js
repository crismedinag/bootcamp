const mongoose = require('mongoose');

let UserId  = mongoose.Schema;

const UserIdSchema = new UserId
(
    {
        login: String,
        password: { type: String, validate: [function(password){return password.length >= 4;}, "The password should be longer"] }
    }
);

module.exports = mongoose.model('userid', UserIdSchema);