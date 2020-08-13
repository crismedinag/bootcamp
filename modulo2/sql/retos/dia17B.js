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


let nota = "UPDATE  Notas SET nota = 0";
connection.query(nota, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Notas actualizadas");
            console.log(resultado);
        }
    }
);



let datos_est = "SELECT * FROM Estudiantes";
connection.query(datos_est, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos de los estudiantes");
            console.log(resultado);
        }
    }
);

let datos_prof = "SELECT * FROM Profesores";
connection.query(datos_prof, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos de los profesores");
            console.log(resultado);
        }
    }
);