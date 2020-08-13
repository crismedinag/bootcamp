/*Crear los endpoints para conectar las funciones creadas anteriormente:
•Subida de fotos.
•Obtener fotos.
•Seguir.
•Dejar de seguir.
•Eliminar una foto de un usuario.
•Eliminar todas las fotos de un usuario.
*/

const express = require("express");
const app = express();
const bodyParser = require('body-parser');

let User = require("./userunique");
let Photos = require("./photos");
const funciones = require("./funciones");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/photos/:name",
    function(req, resp)
    {
        funciones.obtener(req.body.name, resp);
    }
);

app.post("/photos",
    function(req, resp)
    {
        funciones.insertar(req.body.name, req.body.url, req.body.title, req.body.description, resp)
    }
);

app.put("/user/:name",
    function(req,resp)
    {
        funciones.seguir(req.body.name, req.body.follow, resp);
    }
);

app.put("/user/:name",
    function(req,resp)
    {
        funciones.noSeguir(req.body.name, req.body.follow, resp);
    }
);

app.delete("/photos/:name",
    function(req, resp)
    {
        funciones.eliminarUno(req.body.name, req.body.title, resp);
    }
);

app.delete("/photos/:name",
    function(req, resp)
    {
        funciones.eliminarTodo(req.body.name, resp);
    }
);

app.listen(3000);
