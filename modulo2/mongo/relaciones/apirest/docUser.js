
let mongoose = require('mongoose');
let User = require("./userunique");

mongoose.connect('mongodb://localhost:27017/users', {useNewUrlParser: true, useUnifiedTopology: true});

let userA = new User
(
    {
            login: "Ana23",
            password: "hola",
            name: "Ana", 
            surname: "Gala",
            dateOfBirth: 1995,
            comments: "Primer usuario",
            role: "user",
            address: "Madrid, (2028)",
            phone: 689564343,
            email: "ana@gmail.com",
            follow: null,
    }
);



userA.save(checkRespuesta)

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


