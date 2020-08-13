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

// NOMBRE Y APELLIDOS ESTUDIANTES Y NOMBRES ASIGNATURAS EN LAS QUE ESTAN MATRICULADOS

let sqlA = "SELECT Estudiantes.nombre, Estudiantes.apellido AS ALUMNOS, Asignaturas.nombre AS ASIGNATURAS FROM (Estudiantes) JOIN (Notas) ON Estudiantes.estudiante_id = Notas.estudiante_id JOIN (Asignaturas) ON Notas.asignatura_id = Asignaturas.asignatura_id GROUP BY Estudiantes.Nombre";
connection.query(sqlA, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos consultados: ");
            console.log(resultado);
        }
    }
);

// NOMBRE Y APELLIDOS PROFESORES Y NOMBRES ASIGNATURAS QUE IMPARTEN

let sqlB = "SELECT Profesores.nombre, Profesores.apellido AS Profesores, Asignaturas.nombre AS Asignaturas FROM (Profesores) JOIN (Asignatura_Profesor) ON Profesores.profesor_id = Asignatura_Profesor.profesor_id JOIN (Asignaturas) ON Asignatura_Profesor.asignatura_id = Asignaturas.asignatura_id GROUP BY Profesores.Nombre";
connection.query(sqlB, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos consultados: ");
            console.log(resultado);
        }
    }
);

// TOTAL DE ALUMNOS POR ASIGNATURA, NOMBRE ASIGNATURA, NOMBRE Y APELLIDOS DEL PROFESOR QUE LA IMPARTE

let sqlC = "SELECT COUNT(Estudiantes.estudiante_id) AS est_asig, Asignaturas.nombre AS Asignaturas, Profesores.nombre, Profesores.apellido AS Profesor FROM (Estudiantes) JOIN (Notas) ON Estudiantes.estudiante_id = Notas.estudiante_id JOIN (Asignaturas) ON Notas.asignatura_id = Asignaturas.asignatura_id JOIN (Asignatura_Profesor) ON Asignatura_Profesor.asignatura_id = Asignaturas.asignatura_id JOIN (Profesores) ON Profesores.profesor_id = Asignatura_Profesor.profesor_id GROUP BY Asignaturas.nombre";
connection.query(sqlC, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos consultados: ");
            console.log(resultado);
        }
    }
);

// NOMBRE Y APELLIDOS DE TODOS LOS PROFESORES, ASIGNATURA QUE IMPARTEN Y NOTA MEDIA DE DICHA ASIGNATURA

let sqlD = "SELECT profesores.nombre, Profesores.apellido AS Profesores, Asignaturas.nombre AS Asignaturas, AVG(notas.nota) AS Nota_media FROM Profesores LEFT JOIN (Asignatura_Profesor) ON Profesores.profesor_id = Asignatura_Profesor.profesor_id LEFT JOIN (Asignaturas) ON Asignatura_Profesor.asignatura_id = Asignaturas.asignatura_id LEFT JOIN (Notas) ON Asignaturas.asignatura_id = Notas.nota_id GROUP BY Profesores.nombre";
connection.query(sqlD, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos consultados: ");
            console.log(resultado);
        }
    }
);


// NOMBRE Y APELLIDOS DEL ESTUDIANTE, CUANTAS ASIGNATURAS HAN CURSADO, NOTA MEDIA, NOTA MAS ALTA Y NOTA MAS BAJA

let sqlE = "SELECT Estudiantes.nombre, Estudiantes.apellido AS Estudiantes, SUM(Asignaturas.asignatura_id) AS Asignaturas, AVG(Notas.nota) AS Nota_media, MAX(Notas.nota) AS Nota_alta, MIN(Notas.nota) AS nota_baja FROM Estudiantes LEFT JOIN (Notas) ON Estudiantes.estudiante_id = Notas.estudiante_id LEFT JOIN (Asignaturas) ON Notas.asignatura_id = Asignaturas.asignatura_id GROUP BY Estudiantes.nombre";
connection.query(sqlE, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos consultados: ");
            console.log(resultado);
        }
    }
);