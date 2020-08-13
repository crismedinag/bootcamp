let mysql = require("mysql");
let connection = mysql.createConnection
(
    {
        host: "localhost",
        user: "root",
        password: null,
        database: "BDMuseo"
    }
);

connection.connect(function(error)
{
    if(error) { console.log (error); }
    else { console.log ("Conexion correcta") }
}
);


let consultaA = "SELECT Piezas.nombre, Ubicaciones.Descripcion, Prestamos.FDevolucion, Propietarios.Nombre, Propietarios.Direccion, Propietarios.Telefono FROM Piezas INNER JOIN Ubicaciones ON Piezas.ID_Ubicacion = Ubicaciones.ID_Ubicacion INNER JOIN Propietarios ON Piezas.ID_Propietario_Duenyo = Propietarios.ID_Propietario LEFT JOIN Prestamos ON Piezas.ID_Prestamo = Prestamos.ID_Prestamo WHERE Piezas.ID_Propietario_Duenyo != 1 AND Piezas.ID_Propietario_Actual = 1";
connection.query(consultaA, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos consultados: ");
            console.log(resultado);
        }
    }
);

let consultaB = "SELECT COUNT(*) AS Piezas_Estado, Estado_Coleccion.Estado_Coleccion FROM Piezas INNER JOIN Colecciones ON Piezas.ID_Coleccion = Colecciones.ID_Coleccion INNER JOIN Estado_Coleccion ON Colecciones.ID_Estado_Coleccion = Estado_Coleccion.ID_Estado_Coleccion GROUP BY Estado_Coleccion.Estado_Coleccion ORDER BY COUNT(*) DESC";
connection.query(consultaB, function (error, resultado)
    {
        if(error) { console.log(error); }
        else
        {
            console.log("Datos consultados: ");
            console.log(resultado);
        }
    }
);

