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


// NOTA MEDIA ESTUDIANTES ASIGNATURA 1

let media = "SELECT AVG(nota) FROM Notas WHERE asignatura_id = 1";
connection.query(media, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Nota media de los alumnos de la asignatura 1");
            console.log(resultado);
        }
    }
);

// TOTAL ESTUDIANTES DE LA ESCUELA

let estudiantes = "SELECT COUNT(*) FROM Estudiantes";
connection.query(estudiantes, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Total estudiantes");
            console.log(resultado);
        }
    }
);

// CAMPOS DE LA TABLA GRUPOS

let grupos = "SELECT * FROM Grupos";
connection.query(grupos, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Campos de la tabla Grupos");
            console.log(resultado);
        }
    }
);

// BORRA LAS NOTAS MAYORES A 5 DEL ANYO 2019

let notaA = "DELETE FROM Notas WHERE nota > 5 AND (fecha < '2020-01-01' AND fecha > '2019-01-01')";
connection.query(notaA, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Notas borradas");
            console.log(resultado);
        }
    }
);

// DATOS DE LOS ESTUDIANTES DE LA ESCUELA DE 2020

/*
let anyoIngreso = "INSERT INTO Estudiantes (anyo de ingreso)";
connection.query(anyoIngreso, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Campo Anyo de ingreso guardado");
            console.log(resultado);
        }
    }
);

*/

let estActuales = "SELECT * FROM Estudiantes WHERE ingreso = 2020";
connection.query(estActuales, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos de los estudiantes de 2020");
            console.log(resultado);
        }
    }
);

// NUMERO DE PROFESORES DE CADA ASIGNATURA

let profAsig = "SELECT COUNT(*), asignatura_id FROM Asignatura_Profesor GROUP BY asignatura_id";
connection.query(profAsig, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Numero de profesores por asignatura");
            console.log(resultado);
        }
    }
);

