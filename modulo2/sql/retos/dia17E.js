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


let total = "SELECT COUNT(*) FROM Estudiantes ";
connection.query(total, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Total elementos de la tabla Estudiantes");
            console.log(resultado);
        }
    }
);

/*

let consulta = "SELECT * FROM Notas AC, Estudiantes A, Asignaturas C WHERE AC.estudiante_id = A.estudiante_id  and AC.asignatura_id = C.asignatura_id";
connection.query(consulta, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos del estudiante y su asignatura");
            console.log(resultado);
        }
    }
);

*/



