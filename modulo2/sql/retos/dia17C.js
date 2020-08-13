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

// INSERT PROFESORES



let profesor3 = "INSERT INTO Profesores (nombre, apellido) VALUES ('Ana' , 'Gomez')";
connection.query(profesor3, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos del profesor guardados");
            console.log(resultado);
        }
    }
);

let profesor4 = "INSERT INTO Profesores (nombre, apellido) VALUES ('Rosa' , 'Lopez')";
connection.query(profesor4, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos del profesor guardados");
            console.log(resultado);
        }
    }
);

let profesor5 = "INSERT INTO Profesores (nombre, apellido) VALUES ('Santiago' , 'Duarte')";
connection.query(profesor5, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos del profesor guardados");
            console.log(resultado);
        }
    }
);

let profesor6 = "INSERT INTO Profesores (nombre, apellido) VALUES ('Luis' , 'Ramirez')";
connection.query(profesor6, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos del profesor guardados");
            console.log(resultado);
        }
    }
);

let profesor7 = "INSERT INTO Profesores (nombre, apellido) VALUES ('Alejandra' , 'Navarro')";
connection.query(profesor7, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos del profesor guardados");
            console.log(resultado);
        }
    }
);



let profesor8 = "INSERT INTO Profesores (nombre, apellido) VALUES ('Enrique' , 'Noves')";
connection.query(profesor8, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos del profesor guardados");
            console.log(resultado);
        }
    }
);



let profesor9 = "INSERT INTO Profesores (nombre, apellido) VALUES ('Soraya' , 'Perez')";
connection.query(profesor9, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos del profesor guardados");
            console.log(resultado);
        }
    }
);

let profesor10 = "INSERT INTO Profesores (nombre, apellido) VALUES ('Patricia' , 'Villordo')";
connection.query(profesor10, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos del profesor guardados");
            console.log(resultado);
        }
    }
);

// INSERT ASIGNATURA

let asignatura3 = "INSERT INTO Asignaturas (nombre) VALUES ('CSS')";
connection.query(asignatura3, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos de la asignatura guardados");
            console.log(resultado);
        }
    }
);

let asignatura4 = "INSERT INTO Asignaturas (nombre) VALUES ('Node Express')";
connection.query(asignatura4, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos de la asignatura guardados");
            console.log(resultado);
        }
    }
);

let asignatura5 = "INSERT INTO Asignaturas (nombre) VALUES ('Bases de datos')";
connection.query(asignatura5, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos de la asignatura guardados");
            console.log(resultado);
        }
    }
);

let asignatura6 = "INSERT INTO Asignaturas (nombre) VALUES ('Fundamentos')";
connection.query(asignatura6, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos de la asignatura guardados");
            console.log(resultado);
        }
    }
);

let asignatura7 = "INSERT INTO Asignaturas (nombre) VALUES ('Bootstrap 4')";
connection.query(asignatura7, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos de la asignatura guardados");
            console.log(resultado);
        }
    }
);

// INSERT GRUPO


let grupo4 = "INSERT INTO Grupos (nombre) VALUES ('Tercero')";
connection.query(grupo4, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos del grupo guardados");
            console.log(resultado);
        }
    }
);

let grupo5 = "INSERT INTO Grupos (nombre) VALUES ('Tercero')";
connection.query(grupo5, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos del grupo guardados");
            console.log(resultado);
        }
    }
);

let grupo6 = "INSERT INTO Grupos (nombre) VALUES ('Tercero')";
connection.query(grupo6, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos del grupo guardados");
            console.log(resultado);
        }
    }
);


let grupo7 = "INSERT INTO Grupos (nombre) VALUES ('Tercero')";
connection.query(grupo7, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos del grupo guardados");
            console.log(resultado);
        }
    }
);

let grupo8 = "INSERT INTO Grupos (nombre) VALUES ('Tercero')";
connection.query(grupo8, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos del grupo guardados");
            console.log(resultado);
        }
    }
);

// INSERT ASIGNATURA-PROFESOR

let asignatura_profesor3 = "INSERT INTO Asignatura_Profesor (asignatura_id, profesor_id, grupo_id) VALUES (2, 2, 2)";
connection.query(asignatura_profesor3, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos guardados");
            console.log(resultado);
        }
    }
);

let asignatura_profesor4 = "INSERT INTO Asignatura_Profesor (asignatura_id, profesor_id, grupo_id) VALUES (7, 5, 3)";
connection.query(asignatura_profesor4, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos guardados");
            console.log(resultado);
        }
    }
);

let asignatura_profesor5 = "INSERT INTO Asignatura_Profesor (asignatura_id, profesor_id, grupo_id) VALUES (8, 6, 4)";
connection.query(asignatura_profesor5, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos guardados");
            console.log(resultado);
        }
    }
);

let asignatura_profesor6 = "INSERT INTO Asignatura_Profesor (asignatura_id, profesor_id, grupo_id) VALUES (9, 7, 5)";
connection.query(asignatura_profesor6, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos guardados");
            console.log(resultado);
        }
    }
);

let asignatura_profesor7 = "INSERT INTO Asignatura_Profesor (asignatura_id, profesor_id, grupo_id) VALUES (10, 10, 10)";
connection.query(asignatura_profesor7, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos guardados");
            console.log(resultado);
        }
    }
);

let asignatura_profesor8 = "INSERT INTO Asignatura_Profesor (asignatura_id, profesor_id, grupo_id) VALUES (5, 8, 1)";
connection.query(asignatura_profesor8, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos guardados");
            console.log(resultado);
        }
    }
);



// INSERT NOTAS

let nota9 = "INSERT INTO Notas (estudiante_id, asignatura_id, fecha, nota) VALUES (3, 3, 20090516, 7)";
connection.query(nota9, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos guardados");
            console.log(resultado);
        }
    }
);

let nota8 = "INSERT INTO Notas (estudiante_id, asignatura_id, fecha, nota) VALUES (4, 5, 20190617, 4)";
connection.query(nota8, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos guardados");
            console.log(resultado);
        }
    }
);

let nota3 = "INSERT INTO Notas (estudiante_id, asignatura_id, fecha, nota) VALUES (5, 6, 20080315, 9)";
connection.query(nota3, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos guardados");
            console.log(resultado);
        }
    }
);

let nota4 = "INSERT INTO Notas (estudiante_id, asignatura_id, fecha, nota) VALUES (7, 4, 20060523, 10)";
connection.query(nota4, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos guardados");
            console.log(resultado);
        }
    }
);

let nota5 = "INSERT INTO Notas (estudiante_id, asignatura_id, fecha, nota) VALUES (8, 8, 20200516, 5)";
connection.query(nota5, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos guardados");
            console.log(resultado);
        }
    }
);

let nota6 = "INSERT INTO Notas (estudiante_id, asignatura_id, fecha, nota) VALUES (9, 10, 20200516, 2)";
connection.query(nota6, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos guardados");
            console.log(resultado);
        }
    }
);

let nota7 = "INSERT INTO Notas (estudiante_id, asignatura_id, fecha, nota) VALUES (6, 9, 20030410, 0)";
connection.query(nota7, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos guardados");
            console.log(resultado);
        }
    }
);


