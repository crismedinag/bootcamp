
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


let profesor = "INSERT INTO Profesores (nombre, apellido) VALUES ('Jose' , 'Herrera')";
connection.query(profesor, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos del profesor guardados");
            console.log(resultado);
        }
    }
);

let estudiante6 = "INSERT INTO Estudiantes (nombre, apellido, grupo_id) VALUES ('Manuel', 'Estrada', 2)";
connection.query(estudiante6, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos del estudiante guardados");
            console.log(resultado);
        }
    }
);

let estudiante7 = "INSERT INTO Estudiantes (nombre, apellido, grupo_id) VALUES ('Marta', 'Hernandez', 1)";
connection.query(estudiante7, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos del estudiante guardados");
            console.log(resultado);
        }
    }
);

let estudiante8 = "INSERT INTO Estudiantes (nombre, apellido, grupo_id) VALUES ('Pablo', 'Canellas', 2)";
connection.query(estudiante8, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos del estudiante guardados");
            console.log(resultado);
        }
    }
);

let estudiante9 = "INSERT INTO Estudiantes (nombre, apellido, grupo_id) VALUES ('Pablo', 'Hebenstreit', 1)";
connection.query(estudiante9, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos del estudiante guardados");
            console.log(resultado);
        }
    }
);

let estudiante10 = "INSERT INTO Estudiantes (nombre, apellido, grupo_id) VALUES ('Maria', 'Aguiar', 2)";
connection.query(estudiante10, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos del estudiante guardados");
            console.log(resultado);
        }
    }
);



let asignatura2 = "INSERT INTO Asignaturas (nombre) VALUES ('JavaScript')";
connection.query(asignatura2, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos de la asignatura guardados");
            console.log(resultado);
        }
    }
);



let asignatura_profesor = "INSERT INTO Asignatura_Profesor (asignatura_id, profesor_id, grupo_id) VALUES (2, 2, 2)";
connection.query(asignatura_profesor, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos guardados");
            console.log(resultado);
        }
    }
);

let grupo3 = "INSERT INTO Grupos (nombre) VALUES ('Tercero')";
connection.query(grupo3, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos del grupo guardados");
            console.log(resultado);
        }
    }
);


let nota = "INSERT INTO Notas (estudiante_id, asignatura_id, fecha, nota) VALUES (5, 2, 20200516, 8)";
connection.query(nota, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos guardados");
            console.log(resultado);
        }
    }
);
