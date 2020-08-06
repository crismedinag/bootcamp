// Api con clase profesional

class Professional 
{
    constructor(name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, oscarsNumber, profession)
    {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
}

const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let professional = null;

app.get("/",
    function(request, response)
    {
        let respuesta = {error: true, codigo: 200, mensaje: 'Punto de inicio'};
        response.send(respuesta);
    }
    );

app.get("/profesional",
    function(request, response)
    {
       
        response.send({"Profesional": professional});
    }
    );

app.post("/profesional",
    function(request, response)
    {
        professional = new Professional(request.body.name, request.body.age, request.body.genre, request.body.weight, request.body.height, request.body.hairColor, request.body.eyeColor, request.body.race, request.body.isRetired, request.body.oscarsNumber, request.body.profession);

        let respuesta = {error: false, codigo: 200, mensaje: 'Profesional creado', resultado: professional};
        console.log(professional);
        response.send(respuesta);
    }
    );

app.put("/profesional",
    function(request,response)
    {
        professional.name = request.body.name;
        professional.age = request.body.age;
        professional.genre = request.body.genre;
        professional.weight = request.body.weight;
        professional.height = request.body.height;
        professional.hairColor = request.body.hairColor;
        professional.eyeColor = request.body.eyeColor;
        professional.race = request.body.race;
        professional.isRetired = request.body.isRetired;
        professional.oscarsNumber = request.body.oscarsNumber;
        professional.profession = request.body.profession;
       

        let respuesta = {error: false, codigo: 200, mensaje: 'Profesional actualizado', resultado: professional};
        console.log(professional);
        response.send(respuesta);
    }
);

app.delete("/profesional",
    function(request, response)
    {
        professional = null;
        
        let respuesta = {error: false, codigo: 200, mensaje: 'Profesional borrado', resultado: professional};
        console.log(professional);
        response.send(respuesta);
    }
    );

app.listen(3000);

