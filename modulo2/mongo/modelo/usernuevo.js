let mongoose = require('mongoose');
const UserId = require("./id");
const Profile = require("./profile");
const Credentials = require("./credentials");

mongoose.connect('mongodb://localhost:27017/usersp', {useNewUrlParser: true, useUnifiedTopology: true});

let userId = new UserId(
    {
        login: "Ana23",
        password: "hola"
    }
);

let credentials = new Credentials(
    {
        "address": "Madrid, (2028)",
        "phone": 689564343,
        "email": "ana@gmail.com"
    } 
);

let profile = new Profile(
    {
        "name": "Ana", 
        "surname": "Gala",
        "dateOfBirth": 1995,
        "comments": "Primer usuario",
        "role": "user",
    }

);


userId.save(checkRespuesta);
profile.save(checkRespuesta);
credentials.save(checkRespuesta);

function checkRespuesta(err, res)
{
if(err)
{console.log("Error: " + err)}
else
{
    console.log("User successfully saved");
    mongoose.disconnect();
}
};