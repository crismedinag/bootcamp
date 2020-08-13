// Configuracion API

const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Configuracion MYSQL

let mysql = require("mysql");
let connection = mysql.createConnection
(
    {
        host: "localhost",
        user: "root",
        password: null,
        database: "escuelaCodenotch"
    }
);

connection.connect(function(error)
{
    if(error) { console.log (error); }
    else { console.log ("Conexion correcta") }
}
);

// 1. Endpoints de alumnos

// Datos del alumno con el id     
app.get("/alumnos/:id",
    function(req, resp)
    {
        const id = req.params.id;
        let alumnoA = "SELECT * FROM Estudiantes WHERE estudiante_id = ?";
        connection.query(alumnoA, id, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Datos del alumno");
                    console.log(resultado);
                    resp.send(resultado)
                }
            }
        );
    }
    );

// Lista de todos los alumnos

app.get("/alumnos",
    function(req, resp)
    {
        let alumnos = "SELECT * FROM Estudiantes";
        connection.query(alumnos, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Datos de los alumnos");
                    console.log(resultado);
                    resp.send({error: false, codigo: 200, mensaje: "Datos de los alumnos"});
                }
            }
        );
    }
    );

// Añade nuevo alumno
app.post("/alumnos",
    function(req, resp)
    {
        let alumnos = "INSERT INTO Estudiantes SET ?";
        let alumnosObj = 
        {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            grupo_id: req.body.grupo_id
        }
        connection.query(alumnos, alumnosObj, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Alumno insertado");
                    console.log(resultado);
                    resp.send({error: false, codigo: 200, mensaje: "Alumno insertado"});
                }
            }
        );
    }
    );

// Modifica datos de un alumno

app.put("/alumnos",
    function(req, resp)
    {
        let params = [req.body.nombre, req.body.apellido, req.body.grupo_id, req.body.estudiante_id]
        let sql = `UPDATE Estudiantes SET  nombre = ?, apellido = ?, grupo_id = ? WHERE estudiante_id = ?`;

        connection.query(sql, params, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Alumno modificado");
                    console.log(resultado);
                    resp.send({error: false, codigo: 200, mensaje: "Alumno modificado"});
                }
            }
        );    
    }
    );  

// Elimina a un alumno
app.delete("/alumnos",
    function(req, resp)
    {
        let params = [req.body.id];
        let alumnosC = "DELETE FROM Estudiantes WHERE Estudiantes.estudiante_id = ?";
        connection.query(alumnosC, params, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Alumno borrado");
                    console.log(resultado);
                    resp.send({error: false, codigo: 200, mensaje: "Alumno borrado"});
                }
            }
        );
    }
    ); 



// 2. EndPoints de profesores

app.get("/profesores/:id",
    function(req, resp)
    {
        const id = req.params.id;
        let profesorA = "SELECT * FROM Profesores WHERE profesor_id = ?";
        connection.query(profesorA, id, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Datos del profesor");
                    console.log(resultado);
                    resp.send(resultado)
                }
            }
        );
    }
    ); 

app.get("/profesores",
    function(req, resp)
    {
        let profesores = "SELECT * FROM Profesores";
        connection.query(profesores, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Datos de los profesores");
                    console.log(resultado);
                    resp.send({error: false, codigo: 200, mensaje: "Datos de los profesores"});
                }
            }
        );
    }
    ); 

app.post("/profesores",
    function(req, resp)
    {
        let profesorB = "INSERT INTO Profesores SET ?";
        let profesorObj = 
        {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
        }
        connection.query(profesorB, profesorObj, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Profesor insertado");
                    console.log(resultado);
                    resp.send({error: false, codigo: 200, mensaje: "Profesor insertado"});
                }
            }
        );
    }
    ); 

app.put("/profesores",
    function(req, resp)
    {
        let params = [req.body.nombre, req.body.apellido,req.body.id];
        let profesorC = "UPDATE Profesores SET nombre = ?, apellido = ? WHERE profesor_id = ?";

        connection.query(profesorC, params, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Profesor modificado");
                    console.log(resultado);
                    resp.send({error: false, codigo: 200, mensaje: "Profesor modificado"});
                }
            }
        );    
    }
    );  

app.delete("/profesor",
    function(req, resp)
    {
        let params = [req.body.id];
        let alumnosD = "DELETE FROM Profesores WHERE Profesores.profesor_id = ?";
        connection.query(alumnosD, params, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Profesor borrado");
                    console.log(resultado);
                    resp.send({error: false, codigo: 200, mensaje: "Profesor borrado"});
                }
            }
        );
    }
    ); 


// 3. EndPoints de grupos

app.get("/grupos/:id",
    function(req, resp)
    {
        const id = req.params.id;
        let grupoA = "SELECT * FROM Grupos WHERE grupo_id = ?";
        connection.query(grupoA, id, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Datos del grupo");
                    console.log(resultado);
                    resp.send(resultado)
                }
            }
        );
    }
    ); 

app.get("/grupos",
    function(req, resp)
    {
        let grupos = "SELECT * FROM Grupos";
        connection.query(grupos, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Datos de los grupos");
                    console.log(resultado);
                    resp.send(resultado)
                }
            }
        );
    }
    ); 

app.post("/grupos",
    function(req, resp)
    {
        let gruposB = "INSERT INTO Grupos SET ?";
        let grupoObj = 
        {
            nombre: req.body.nombre,
        }
        connection.query(gruposB, grupoObj, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Grupo insertado");
                    console.log(resultado);
                    resp.send({error: false, codigo: 200, mensaje: "Grupo insertado"});
                }
            }
        );
    }
    ); 

app.put("/grupos/:id",
    function(req, resp)
    {
        let params = [req.body.nombre, req.body.grupo_id];
        let grupoD = "UPDATE Grupos SET nombre = ? WHERE grupo_id = ?";

        connection.query(grupoD, params, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Grupo modificado");
                    console.log(resultado);
                    resp.send({error: false, codigo: 200, mensaje: "Grupo modificado"});
                }
            }
        );    
    }
    );  

app.delete("/grupos",
    function(req, resp)
    {
        let params = [req.body.grupo_id];
        let gruposC = "DELETE FROM Grupos Where Grupos.grupo_id = ?";
        connection.query(gruposC, params, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Grupo borrado");
                    console.log(resultado);
                    resp.send({error: false, codigo: 200, mensaje: "Grupo borrado"});
                }
            }
        );
    }
    ); 

// 4. EndPoints de asignaturas

app.get("/asignaturas/:id",
    function(req, resp)
    {
        const id = req.params.id;
        let asignaturaA = "SELECT * FROM Asignaturas WHERE Asignaturas.asignatura_id = ?";
        connection.query(asignaturaA, id, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Datos de la asignatura");
                    console.log(resultado);
                    resp.send(resultado)
                }
            }
        );
    }
    ); 

app.get("/asignaturas",
    function(req, resp)
    {
        let asignaturas = "SELECT * FROM Asignaturas";
        connection.query(asignaturas, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Datos de las asignaturas");
                    console.log(resultado);
                    resp.send(resultado)
                }
            }
        );
    }
    ); 

app.post("/asignaturas",
    function(req, resp)
    {
        let asignaturaB = "INSERT INTO Asignaturas SET ?";
        let asignaturaObj = 
        {
            nombre: req.body.nombre,
        }
        connection.query(asignaturaB, asignaturaObj, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Asignatura insertada");
                    console.log(resultado);
                    resp.send({error: false, codigo: 200, mensaje: "Asignatura insertada"});
                }
            }
        );
    }
    ); 

app.put("/asignaturas",
    function(req, resp)
    {
        let params = [req.body.nombre, req.body.asignatura_id];
        let asignaturaD = "UPDATE Asignaturas SET nombre = ? WHERE Asignaturas.asignatura_id = ?";

        connection.query(asignaturaD, params, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Asignatura modificada");
                    console.log(resultado);
                    resp.send({error: false, codigo: 200, mensaje: "Asignatura modificada"});
                }
            }
        );    
    }
    );  

app.delete("/asignaturas",
    function(req, resp)
    {
        let params = [req.body.asignatura_id];
        let AsignaturasC = "DELETE FROM Asignaturas Where Asignaturas.asignatura_id = ?";
        connection.query(AsignaturasC, params, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Asignatura borrada");
                    console.log(resultado);
                    resp.send({error: false, codigo: 200, mensaje: "Asignatura borrada"});
                }
            }
        );
    }
    );


// 5. EndPoints de notas

app.get("/notas/:id",
    function(req, resp)
    {
        const id = req.params.id;
        let notasA = "SELECT * FROM Notas WHERE nota_id = ?";
        connection.query(notaA, id, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Datos de la nota");
                    console.log(resultado);
                    resp.send(resultado)
                }
            }
        );
    }
    ); 

app.get("/notas",
    function(req, resp)
    {
        let notas = "SELECT * FROM Notas";
        connection.query(notas, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Datos de las notas");
                    console.log(resultado);
                    resp.send(resultado)
                }
            }
        );
      
    }
    ); 

app.post("/notas",
    function(req, resp)
    {
        let notaB = "INSERT INTO Notas SET ?";
        let notaObj = 
        {
            estudiante_id: req.body.estudiante_id,
            asignatura_id: req.body.asignatura_id,
            fecha: req.body.fecha,
            nota: req.body.nota
        }
        connection.query(notaB, notaObj, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Nota insertada");
                    console.log(resultado);
                    resp.send({error: false, codigo: 200, mensaje: "Nota insertada"});
                }
            }
        );
    }
    ); 

    app.put("/notas",
    function(req, resp)
    {
        let params = [req.body.estudiante_id, req.body.asignatura_id, req.body.fecha, req.body.nota, req.body.nota_id];
        let notasD = "UPDATE Notas SET estudiante_id = ?, asignatura_id = ?, fecha= ?, nota = ? WHERE nota_id = ?";

        connection.query(notasD, params, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Nota modificada");
                    console.log(resultado);
                    resp.send({error: false, codigo: 200, mensaje: "Nota modificada"});
                }
            }
        );    
    }
    );  

app.delete("/notas",
    function(req, resp)
    {
        let params = req.body.nota_id;
        let notasC = "DELETE FROM Notas WHERE Notas.nota_id = ?";
        connection.query(notasC, params, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Nota borrada");
                    console.log(resultado);
                    resp.send({error: false, codigo: 200, mensaje: "Nota borrada"});
                }
            }
        );
    }
    ); 


// 6. EndPoints adicionales

// Obtiene nota media del id
app.get("/media/:id",
    function(req, resp)
    {
        const id = req.params.id;
        let nota_media = "SELECT AVG(nota) FROM Notas WHERE Estudiantes.estudiantes_id = ?";
        connection.query(nota_media, id, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Nota media: ");
                    console.log(resultado);
                    resp.send(resultado)
                }
            }
        );
    }
    ); 


// Asignaturas en las que esta apuntado el estudiante

app.get("/apuntadas/:id",
    function(req, resp)
    {
        const id = req.params.id;
        let apuntadas = "SELECT Estudiantes.estudiante_id, Asignaturas.nombre FROM Estudiantes LEFT JOIN Notas ON Estudiantes.estudiante_id = Notas.estudiante_id JOIN Asignaturas ON Notas.asignatura_id = Asignaturas.asignatura_id WHERE Estudiantes.estudiante_id = ?";
        connection.query(apuntadas, id, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Asignaturas y estudiante apuntado: ");
                    console.log(resultado);
                    resp.send(resultado)
                }
            }
        );
    }
    ); 

// Nombre y apellidos de los alumnos y asignaturas en las que están apuntados

app.get("/apuntadas",
    function(req, resp)
    {
        let apuntadasB = "SELECT Estudiantes.nombre, Estudiantes.apellido, Asignaturas.nombre FROM Estudiantes LEFT JOIN  Notas ON Estudiantes.estudiante_id = Notas.estudiante_id LEFT JOIN Asignaturas ON Notas.asignatura_id = Asignaturas.asignatura_id";
        connection.query(apuntadasB, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Lista de asignaturas y alumnos apuntados");
                    console.log(resultado);
                    resp.send(resultado)
                }
            }
        );
    }
    ); 

// Asignaturas impartidas por el profesor id

app.get("/impartidas/:id",
    function(req, resp)
    {
        const id = req.params.id;
        let impartidas = "SELECT Profesores.nombre, Asignaturas.nombre FROM Profesores RIGHT JOIN Asignatura_Profesor ON Profesores.profesor_id = Asignatura_Profesor.profesor_id RIGHT JOIN Asignaturas ON Asignatura_Profesor.asignatura_id = Asignaturas.asignatura_id WHERE Profesores.profesor_id = ?"
        connection.query(impartidas, id, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Asignaturas que imparate el profesor: ");
                    console.log(resultado);
                    resp.send(resultado)
                }
            }
        );
    }
    ); 

// Listado de profesores y asignaturas que imparten

app.get("/impartidas",
    function(req, resp)
    {
        let impartidasB = "SELECT Profesores.nombre, Profesores.apellido, Asignaturas.nombre FROM Profesores LEFT JOIN Asignatura_Profesor ON Profesores.profesor_id = Asignatura_Profesor.profesor_id LEFT JOIN Asignaturas ON Asignatura_Profesor.asignatura_id = Asignaturas.asignatura_id";
        connection.query(impartidasB, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Lista de asignaturas y alumnos apuntados");
                    console.log(resultado);
                    resp.send(resultado)
                }
            }
        );
    }
    ); 


app.listen(3000);

