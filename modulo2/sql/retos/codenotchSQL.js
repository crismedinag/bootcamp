let mysql = require("mysql");
let connection = mysql.createConnection
(
    {
        host: "localhost",
        user: "root",
        password: null,
        database: "codenotch"
    }
);

connection.connect(function(error)
{
    if(error) { console.log (error); }
    else { console.log ("Conexion correcta") }
}
);



let profesores = "CREATE TABLE Profesores (id INT AUTO_INCREMENT PRIMARY KEY, nombre VARCHAR (30), apellido1 VARCHAR (20), apellido2 VARCHAR (20), edad INT(3), telefono INT(15), calle VARCHAR (15), ciudad VARCHAR(15), provincia VARCHAR (15), fnacimiento DATE, estadoCivil VARCHAR (15), DNI INT(9), fmatriculacion DATE, titulacion VARCHAR (50), departamento VARCHAR (50))";
connection.query(profesores, function(error, resultado)
{
    if (error) { console.log(error); }
    else { 
        console.log ("Tabla creada");
        console.log(resultado);
}
}
);


let alumnos = "CREATE TABLE Alumnos (id INT AUTO_INCREMENT PRIMARY KEY, nombre VARCHAR (30), apellido1 VARCHAR (20), apellido2 VARCHAR (20), edad INT(3), telefono INT(15), calle VARCHAR (15), ciudad VARCHAR(15), provincia VARCHAR (15), fnacimiento DATE, estadoCivil VARCHAR (15), DNI INT(9), fmatriculacion DATE)";
connection.query(alumnos, function(error, resultado)
{
    if (error) { console.log(error); }
    else { 
        console.log ("Tabla creada");
        console.log(resultado);
}
}
);

let asignaturas = "CREATE TABLE Asignaturas (id INT AUTO_INCREMENT PRIMARY KEY, nombre VARCHAR (50), creditos INT (2))";
connection.query(asignaturas, function(error, resultado)
{
    if (error) { console.log(error); }
    else { 
        console.log ("Tabla creada");
        console.log(resultado);
}
}
);


let insertarC = "ALTER TABLE Asignaturas ADD codigo INT(5)" 
connection.query(insertarC, function(error, resultado)
{
    if (error) { console.log(error); }
    else 
    { 
        console.log ("Columna insertada");
        console.log(resultado);
    }   
}
);


let borrarC = "ALTER TABLE Asignaturas DROP creditos" 
connection.query(borrarC, function(error, resultado)
{
    if (error) { console.log(error); }
    else 
    { 
        console.log ("Columna borrada");
        console.log(resultado);
    }   
}
);



let borrarT = "DROP TABLE Asignaturas"
connection.query(borrarT, function(error, resultado)
{
    if(error) { console.log(error); }
    else 
    {
        console.log("Tabla borrada");
        console.log(resultado);
    }
}
);

