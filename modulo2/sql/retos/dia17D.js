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



let notaA = "DELETE FROM Notas WHERE fecha < 20090101";
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


let notaB = "UPDATE  Notas SET nota = 5 WHERE nota < 5";
connection.query(notaB, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Notas actualizadas");
            console.log(resultado);
        }
    }
);

