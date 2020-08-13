let mongoose = require('mongoose');
let User = require("./user");

mongoose.connect('mongodb://localhost:27017/users', {useNewUrlParser: true, useUnifiedTopology: true});

let user = new User(
    {
        userId: 
        {
            "login": "Ana23",
            "password": "hola",
        },
        profile: 
        {
            "name": "Ana", 
            "surname": "Gala",
            "dateOfBirth": 1995,
            "comments": "Primer usuario",
            "role": "user",
        },
        creedentials: 
        {
            "address": "Madrid, (2028)",
            "phone": 689564343,
            "email": "ana@gmail.com"
        }  
    }
);

user.save(checkRespuesta)

function checkRespuesta(err, res)
{
    if(err)
    {console.log("Error: " + err)}
    else
    {
        console.log("User successfully saved");
        mongoose.disconnect();
    }
}
