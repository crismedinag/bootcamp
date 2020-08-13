/*Implementación de funciones : 
Subida de fotos: Dado un usuario, urlde foto, titulo y descripción se debe guardar en la colección ‘photos’.•Obtener fotos:Dado un usuario obtener todas sus fotos
•Seguir:Dado un usuario origen y otro destino hacer que origen siga a destino.
•Dejar de seguir:Dado un usuario origen y otro destino hacer que le deje de seguir.
•Eliminar Foto:Dado un usuario y un titulo de foto eliminar su foto.
•Eliminar todas las Fotos:Dado un usuario eliminar todas sus fotos.
*/

let User = require("./userunique");
let Photos = require("./photos");

let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true, useUnifiedTopology: true});

function insertar(name, url, title, description, resp)
{
    let photosA = new Photos
    (
        {
            name: name,
            url: url,
            title: title,
            description: description
        }
    );

    photosA.save(function(err)
    {
        if(err){ console.log("Error" + err) }
        else 
        {
            console.log("Documento guardado");
            resp.send({error: false, codigo: 200, mensaje: "Documento subido"});
            mongoose.disconnect()
        };
    }
    );
}

function obtener(nombre, resp)
{
    Photos.find({name: nombre},
    function(err, photosA)
    {
        if(err){ console.log("Error") }
        else
        {
            console.log(photosA);
            resp.send({error: false, codigo: 200, mensaje: "Documento"});
            mongoose.disconnect();
        }
    }
    );
}

function eliminarUno(name, title, resp)
{
    Photos.findOneAndDelete({name:name, title: title},
    function(err)
    {
        if(err){console.log("Error")}
        else 
        {
            console.log("Documento borrado");
            resp.send({error: false, codigo: 200, mensaje: "Documento borrado"});
            mongoose.disconnect(); 
        }
    }
    );
}

function eliminarTodo(name, resp)
{
    Photos.deleteMany({name: name},
    function(err)
    {
        if(err){console.log("Error")}
        else
        {
            console.log("Documentos eliminados");
            resp.send({error: false, codigo: 200, mensaje: "Documentos eliminados"});
            mongoose.disconnect();
        }
    }
    );
}

function seguir(userA, userB, resp)
{

    User.updateOne({name: userA}, {follow: userB},
    function(err)
    {
        if(err){console.log("Error")}
        else
        {
            console.log("Cambios guardados");
            resp.send({error: false, codigo: 200, mensaje: "Cambios guardados"});
            mongoose.disconnect();
        }
    }
    );
}

function noSeguir(userA, resp)
{
    User.updateOne({name: userA}, {follow: null},
        function(err)
        {
            if(err){console.log("Error")}
            else
            {
                console.log("Cambios guardados");
                resp.send({error: false, codigo: 200, mensaje: "Cambios guardados"});
                mongoose.disconnect();
            }
        }
        );
}


module.exports = { insertar, obtener, eliminarUno, eliminarTodo, seguir, noSeguir };