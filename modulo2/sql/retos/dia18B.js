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

// ID + NOTA DE LOS ESTUDIANTES QUE TIENEN UN ID ENTRE 1 Y 20 O UNA NOTA MAYOR A 8 DE 2019

let consEst = "SELECT estudiante_id, nota FROM Notas WHERE (estudiante_id BETWEEN 1 AND 20) OR (nota > 8 AND fecha = 2019)";
connection.query(consEst, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos de los estudiantes consultados");
            console.log(resultado);
        }
    }
);

// MEDIA DE LAS NOTAS DE 2019 POR ASIGNATURA

let media2019A = "SELECT AVG(nota) AS notamedia, asignatura_id FROM Notas WHERE fecha BETWEEN '2019-01-01' AND '2019-12-30' GROUP BY asignatura_id";
connection.query(media2019A, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Nota media 2019 por asignatura");
            console.log(resultado);
        }
    }
);

// MEDIA DE LAS NOTAS DE 2019 POR ALUMNO

let media2019E = "SELECT AVG(nota) AS notamedia, estudiante_id FROM Notas WHERE fecha BETWEEN '2019-01-01' AND '2019-12-30' GROUP BY estudiante_id";
connection.query(media2019E, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Nota media 2019 por estudiante");
            console.log(resultado);
        }
    }
);

// MOSTRAR ASIGNATURAS POR ALUMNOS CON CONDICIONANTES

let ultimo = "SELECT COUNT(Asignaturas.asignatura_id) AS asig_est, Estudiantes.nombre FROM Estudiantes JOIN Notas ON Estudiantes.estudiante_id = Notas.estudiante_id JOIN Asignaturas ON Notas.asignatura_id = Asignaturas.asignatura_id JOIN Asignatura_Profesor ON Asignatura_Profesor.asignatura_id = Asignaturas.asignatura_id JOIN Profesores ON Profesores.profesor_id = Asignatura_Profesor.profesor_id WHERE (Asignatura_Profesor.asignatura_id = 1 OR 11) AND (Asignatura_Profesor.profesor_id = 1 OR 2) GROUP BY nombre";
connection.query(ultimo, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos");
            console.log(resultado);
        }
    }
);

// MOSTRAR ASIGNATURAS POR ALUMNOS CON CONDICIONANTES, POR EL NOMBRE

let ultimo2 = "SELECT COUNT(Asignaturas.asignatura_id) AS asig_est, Estudiantes.nombre FROM Estudiantes JOIN Notas ON Estudiantes.estudiante_id = Notas.estudiante_id JOIN Asignaturas ON Notas.asignatura_id = Asignaturas.asignatura_id JOIN Asignatura_Profesor ON Asignatura_Profesor.asignatura_id = Asignaturas.asignatura_id JOIN Profesores ON Profesores.profesor_id = Asignatura_Profesor.profesor_id WHERE (Asignaturas.nombre = 'Html' OR 'TypeScript') AND (Profesores.nombre = 'Jose' OR 'Javier') GROUP BY nombre";
connection.query(ultimo2, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos");
            console.log(resultado);
        }
    }
);

