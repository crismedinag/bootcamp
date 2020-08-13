
let mongoose = require('mongoose');
let Photos = require("./photos");

mongoose.connect('mongodb://localhost:27017/photos', {useNewUrlParser: true, useUnifiedTopology: true});

let photosA = new Photos
(
    {
        name: "Soraya",
        url: "https://as.com/tikitakas/imagenes/2018/11/11/portada/1541951938_348974_1541952025_noticia_normal.jpg", 
        title: "Entrevista a Soraya",
        description: "Entrevista a Soraya el jueves pasado",
    }
);



photosA.save(checkRespuesta)

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

