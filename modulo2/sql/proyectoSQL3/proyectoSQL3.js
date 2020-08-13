// Configuracion API

const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Configuracion MYSQL

let mysql = require("mysql");
let connection = mysql.createConnection
(
    {
        host: "localhost",
        user: "root",
        password: null,
        database: "imbd2"
    }
);

connection.connect(function(error)
{
    if(error) { console.log (error); }
    else { console.log ("Conexion correcta") }
}
);

// 1. Endpoints de profesionales


// Datos del profesional con el id     
app.get("/profesionales/:id",
    function(req, resp)
    {
        const id = req.params.id;
        let profesional = "SELECT * FROM Profesionales WHERE Profesionales.ID_Profesional = ?";
        connection.query(profesional, id, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Datos del profesional");
                    console.log(resultado);
                    resp.send(resultado)
                }
            }
        );
    }
    );

// Lista de todos los profesionales

app.get("/profesionales",
    function(req, resp)
    {
        let profesionales = "SELECT * FROM Profesionales";
        connection.query(profesionales, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Datos de los profesionales");
                    console.log(resultado);
                    resp.send({error: false, codigo: 200, mensaje: "Datos de los profesionales"});
                }
            }
        );
    }
    );

// AÃ±ade nuevo profesional
app.post("/profesionales",
    function(req, resp)
    {
        let sqlB = "INSERT INTO Profesionales SET ?";
        let profesionalObj = 
        {
            Nombre: req.body.Nombre,
            Edad: req.body.Edad,
            Genero: req.body.Genero,
            Peso: req.body.Peso,
            Altura: req.body.Altura,
            Color_Pelo: req.body.Color_Pelo,
            Color_Ojos: req.body.Color_Ojos,
            Raza: req.body.Raza,
            Estado_laboral: req.body.Estado_laboral,
            Nacionalidad: req.body.Nacionalidad,
            N_Oscars: req.body.N_Oscars,
            Profesion: req.body.Profesion
        }
        connection.query(sqlB, profesionalObj, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Profesional insertado");
                    console.log(resultado);
                    resp.send({error: false, codigo: 200, mensaje: "Profesional insertado"});
                }
            }
        );
    }
    );

// Modifica un profesional

app.put("/profesional",
    function(req, resp)
    {
        let params = [req.body.nombre, req.body.edad, req.body.genero, req.body.peso, req.body.altura, req.body.color_Pelo, req.body.color_Ojos, req.body.raza, req.body.estado_laboral, req.body.nacionalidad, req.body.n_Oscars, req.body.profesion, req.body.ID_Profesional];
        
        let profesorC = "UPDATE Profesionales SET Nombre = ?, Edad = ?, Genero = ?, Peso = ?, Altura = ?, Color_Pelo = ?, Color_Ojos = ?, Raza = ?, Estado_laboral = ?, Nacionalidad = ?, N_Oscars = ?, Profesion = ? WHERE ID_Profesional = ?";

        connection.query(profesorC, params, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Profesional modificado");
                    console.log(resultado);
                    resp.send({error: false, codigo: 200, mensaje: "Profesional modificado"});
                }
            }
        );    
    }
    ); 

// Elimina un profesional
app.delete("/profesionales",
    function(req, resp)
    {
        let params = [req.body.ID_Profesional];
        let sqlC = "DELETE FROM Profesionales Where ID_Profesional = ?";
        connection.query(sqlC, params, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Profesional borrado");
                    console.log(resultado);
                    resp.send({error: false, codigo: 200, mensaje: "Profesional borrado"});
                }
            }
        );
    }
    ); 


// 1. Endpoints de productoras


// Datos de la productora con el id     
app.get("/productoras/:id",
    function(req, resp)
    {
        const id = req.params.id;
        let sqlD = "SELECT * FROM Productoras WHERE ID_Productora = ?";
        connection.query(sqlD, id, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Datos de la productora");
                    console.log(resultado);
                    resp.send(resultado)
                }
            }
        );
    }
    );

// Lista de todas las productoras

app.get("/productoras",
    function(req, resp)
    {
        let sqlE = "SELECT * FROM Productoras";
        connection.query(sqlE, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Datos de las productoras");
                    console.log(resultado);
                    resp.send({error: false, codigo: 200, mensaje: "Datos de las productoras"});
                }
            }
        );
    }
    );

// Añade nueva productora
app.post("/productoras",
    function(req, resp)
    {
        let sqlF = "INSERT INTO Productoras SET ?";
        let productorasObj = 
        {
            Nombre: req.body.Nombre,
            Anyo_Creacion: req.body.Anyo_Creacion,
            Pais: req.body.Pais
        }
        connection.query(sqlF, productorasObj, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Productora insertada");
                    console.log(resultado);
                    resp.send({error: false, codigo: 200, mensaje: "Productora insertada"});
                }
            }
        );
    }
    );

// Modifica una productora

app.put("/productoras",
    function(req, resp)
    {
        let params = [req.body.nombre, req.body.anyo_Creacion, req.body.pais, req.body.ID_Productora];
        let productora = `UPDATE Productoras SET Nombre = ?, Anyo_Creacion = ?, Pais = ? WHERE ID_Productora = ?`;

        connection.query(productora, params, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Productora modificada");
                    console.log(resultado);
                    resp.send({error: false, codigo: 200, mensaje: "Productora modificada"});
                }
            }
        );    
    }
    );  


// Elimina una productora
app.delete("/productoras/:id",
    function(req, resp)
    {
        let params = req.body.ID_Productora;
        let sqlG = "DELETE FROM Productoras WHERE Productoras.ID_Productora = ?";
        connection.query(sqlG, params, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Productora borrada");
                    console.log(resultado);
                    resp.send({error: false, codigo: 200, mensaje: "Productora borrada"});
                }
            }
        );
    }
    ); 


// 3. Endpoints de peliculas

// Devuelve todas las peliculas

app.get("/peliculas",
    function(req, resp)
    {
        let sqlH = "SELECT * FROM Peliculas";
        connection.query(sqlH, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Datos de las peliculas");
                    console.log(resultado);
                    resp.send({error: false, codigo: 200, mensaje: "Datos de las peliculas"});
                }
            }
        );
    }
    );

// Datos de una pelicula

app.get("/peliculas/:id",
    function(req, resp)
    {
        const id = req.params.id;
        let sqlI = "SELECT * FROM Peliculas WHERE ID_Pelicula = ?";
        connection.query(sqlI, id, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Datos de la pelicula");
                    console.log(resultado);
                    resp.send(resultado)
                }
            }
        );
    }
    );

// Datos de los actores de la pelicula con el id

app.get("/peliculas/actor/:id",
    function(req, resp)
    {
        const id = req.params.id;
        let sqlJ = "SELECT *  FROM Profesionales JOIN Pelicula_Profesional ON Profesionales.ID_Profesional = Pelicula_Profesional.ID_Profesional WHERE (Pelicula_ProfesionaL.ID_Pelicula = ?) AND ((Profesionales.Profesion LIKE '%Actor%' OR Profesionales.Profesion LIKE '%Actriz%'))";
        connection.query(sqlJ, id, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Datos de los actores de la pelicula");
                    console.log(resultado);
                    resp.send(resultado)
                }
            }
        );
    }
    );

// Datos de los directores de la pelicula

app.get("/peliculas/director/:id",
    function(req, resp)
    {
        const id = req.params.id;
        let sqlK = "SELECT * FROM Profesionales JOIN Pelicula_Profesional ON Profesionales.ID_Profesional = Pelicula_Profesional.ID_Profesional WHERE (Pelicula_Profesional.ID_Pelicula = ?) AND ((Profesionales.Profesion LIKE '%Director%' OR Profesionales.Profesion LIKE '%Directora%'))";
        connection.query(sqlK, id, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Datos de los directores de la pelicula");
                    console.log(resultado);
                    resp.send(resultado)
                }
            }
        );
    }
    );

// Datos de los guionistas de la pelicula

app.get("/peliculas/guionista/:id",
    function(req, resp)
    {
        const id = req.params.id;
        let sqlL = "SELECT *  FROM Profesionales JOIN Pelicula_Profesional ON Profesionales.ID_Profesional = Pelicula_Profesional.ID_Profesional WHERE (Pelicula_ProfesionaL.ID_Pelicula = ?) AND (Profesionales.Profesion LIKE '%Guionista%')";
        connection.query(sqlL, id, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Datos de los guionistas de la pelicula");
                    console.log(resultado);
                    resp.send(resultado)
                }
            }
        );
    }
    );

// Datos de la productora de la pelicula

app.get("/peliculas/productora/:id",
    function(req, resp)
    {
        const id = req.params.id;
        let sqlM = "SELECT * FROM Productoras JOIN Peliculas ON Productoras.ID_Productora = Peliculas.ID_Productora WHERE Peliculas.ID_Pelicula = ?";
        connection.query(sqlM, id, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Datos de la productora de la pelicula");
                    console.log(resultado);
                    resp.send(resultado)
                }
            }
        );
    }
    );

// Añade nueva pelicula
app.post("/peliculas",
    function(req, resp)
    {
        let sqlN = "INSERT INTO Peliculas SET ?";
        let peliculaObj = 
        {
            Titulo: req.body.Titulo,
            Anyo_Estreno: req.body.Anyo_Estreno,
            Pais: req.body.Pais,
            Idioma: req.body.Idioma,
            Plataforma: req.body.Plataforma,
            isMCU: req.body.isMCU,
            Distribuidor: req.body.Distribuidor,
            ID_Protagonista: req.body.ID_Protagonista,
            ID_Productora: req.body.ID_Productora
        }
        connection.query(sqlN, peliculaObj, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Pelicula insertada");
                    console.log(resultado);
                    resp.send({error: false, codigo: 200, mensaje: "Pelicula insertada"});
                }
            }
        );
    }
    );

// Añade nuevo actor 
app.post("/pelicula/actor/:id",
    function(req, resp)
    {
        let sqlO = "INSERT INTO Profesionales SET ?";
        let profesionalObj = 
        {
            Nombre: req.body.Nombre,
            Edad: req.body.Edad,
            Genero: req.body.Genero,
            Peso: req.body.Peso,
            Altura: req.body.Altura,
            Color_Pelo: req.body.Color_Pelo,
            Color_Ojos: req.body.Color_Ojos,
            Raza: req.body.Raza,
            Estado_laboral: req.body.Estado_laboral,
            Nacionalidad: req.body.Nacionalidad,
            N_Oscars: req.body.N_Oscars,
            Profesion: req.body.Profesion,
        }
        connection.query(sqlO, profesionalObj, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Actor insertado");
                    console.log(resultado);
                    resp.send({error: false, codigo: 200, mensaje: "Actor insertado"});
                    
                    const id = req.params.id;
                    peli_profesionalObj =
                    {
                        ID_Pelicula: req.params.id,
                        ID_Profesional: resultado.insertId
                    }
                    let sql1 = "INSERT INTO Pelicula_Profesional SET ?"

                    connection.query(sql1, peli_profesionalObj, function (error, resultado)
                    {
                        if(error) { console.log(error); }
                        else
                        {
                        console.log("Actor añadido a pelicula");
                        
                        console.log(resultado);
                        resp.send( {mensaje: "Actor añadido a pelicula"});
                        
                        }
                    }
                    );
                }
            }
        );
    }
    );

// Añade nuevo director
app.post("/pelicula/director/:id",
    function(req, resp)
    {
        let sqlO = "INSERT INTO Profesionales SET ?";
        let profesionalObj = 
        {
            Nombre: req.body.Nombre,
            Edad: req.body.Edad,
            Genero: req.body.Genero,
            Peso: req.body.Peso,
            Altura: req.body.Altura,
            Color_Pelo: req.body.Color_Pelo,
            Color_Ojos: req.body.Color_Ojos,
            Raza: req.body.Raza,
            Estado_laboral: req.body.Estado_laboral,
            Nacionalidad: req.body.Nacionalidad,
            N_Oscars: req.body.N_Oscars,
            Profesion: req.body.Profesion,
        }
        connection.query(sqlO, profesionalObj, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Director insertado");
                    console.log(resultado);
                    resp.send({error: false, codigo: 200, mensaje: "Director insertado"});

                    const id = req.params.id;
                    peli_profesionalObj =
                    {
                        ID_Pelicula: req.params.id,
                        ID_Profesional: resultado.insertId
                    }
                    let sql1 = "INSERT INTO Pelicula_Profesional SET ?"

                    connection.query(sql1, peli_profesionalObj, function (error, resultado)
                    {
                        if(error) { console.log(error); }
                        else
                        {
                        console.log("Director añadido a pelicula");
                        
                        console.log(resultado);
                        resp.send( {mensaje: "Director añadido a pelicula"});
                        
                        }
                    }
                    );
                }
            }
        );
    }
    );

// Añade nuevo guionista
app.post("/pelicula/guionista/:id",
    function(req, resp)
    {
        let sqlO = "INSERT INTO Profesionales SET ?";
        let profesionalObj = 
        {
            Nombre: req.body.Nombre,
            Edad: req.body.Edad,
            Genero: req.body.Genero,
            Peso: req.body.Peso,
            Altura: req.body.Altura,
            Color_Pelo: req.body.Color_Pelo,
            Color_Ojos: req.body.Color_Ojos,
            Raza: req.body.Raza,
            Estado_laboral: req.body.Estado_laboral,
            Nacionalidad: req.body.Nacionalidad,
            N_Oscars: req.body.N_Oscars,
            Profesion: req.body.Profesion,
        }
        connection.query(sqlO, profesionalObj, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Guionista insertado");
                    console.log(resultado);
                    resp.send({error: false, codigo: 200, mensaje: "Guionista insertado"});

                    const id = req.params.id;
                    peli_profesionalObj =
                    {
                        ID_Pelicula: req.params.id,
                        ID_Profesional: resultado.insertId
                    }
                    let sql1 = "INSERT INTO Pelicula_Profesional SET ?"

                    connection.query(sql1, peli_profesionalObj, function (error, resultado)
                    {
                        if(error) { console.log(error); }
                        else
                        {
                        console.log("Guionista añadido a pelicula");
                        
                        console.log(resultado);
                        resp.send( {mensaje: "Guionista añadido a pelicula"});
                        
                        }
                    }
                    );
                }
            }
        );
    }
    );

// Actualiza datos de una pelicula

    app.put("/peliculas",
    function(req, resp)
    {
        let params =[req.body.Titulo, req.body.Anyo_Estreno, req.body.Pais, req.body.Idioma, req.body.Plataforma, req.body.isMCU, req.body.Distribuidor, req.body.ID_Protagonista, req.body.ID_Productora, req.body.ID_Pelicula];
        let pelicula = `UPDATE Peliculas SET Titulo = ?, Anyo_Estreno = ?, Pais = ?, Idioma = ?, Plataforma = ?, isMCU = ?, Distribuidor = ?, ID_Protagonista = ?, ID_Productora = ? WHERE ID_Pelicula = ?`;

        connection.query(pelicula, params, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Pelicula modificada");
                    console.log(resultado);
                    resp.send({error: false, codigo: 200, mensaje: "Pelicula modificada"});
                }
            }
        );    
    }
    );  

// Elimina una pelicula
app.delete("/peliculas",
    function(req, resp)
    {
        let params = req.body.ID_Pelicula;
        let sqlG = "DELETE FROM Peliculas Where ID_Pelicula = ?";
        connection.query(sqlG, params, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Pelicula borrada");
                    console.log(resultado);
                    resp.send({error: false, codigo: 200, mensaje: "Pelicula borrada"});
                }
            }
        );
    }
    ); 

// Elimina un actor de la pelicula
app.delete("/peliculas/actor",
    function(req, resp)
    {
        let params = [req.body.ID_Pelicula, req.body.ID_Profesional];
        let sqlG = `DELETE FROM Pelicula_Profesional WHERE ID_Pelicula = ? AND ID_Profesional = ?`;
        connection.query(sqlG, params, function (error, resultado)
            {
                if(error) { console.log(error); }
                else
                {
                    console.log("Actor borrado");
                    console.log(resultado);
                    resp.send({error: false, codigo: 200, mensaje: "Actor borrado"});
                }
            }
        );
    }
    ); 

// Elimina un director de la pelicula
app.delete("/peliculas/director",
    function(req, resp)
    {
        {
            let params = [req.body.ID_Pelicula, req.body.ID_Profesional];
            let sqlG = `DELETE FROM Pelicula_Profesional WHERE ID_Pelicula = ? AND ID_Profesional = ?`;
            connection.query(sqlG, params, function (error, resultado)
                {
                    if(error) { console.log(error); }
                    else
                    {
                        console.log("Director borrado");
                        console.log(resultado);
                        resp.send({error: false, codigo: 200, mensaje: "Director borrado"});
                    }
                }
            );
        }
    }
    ); 

// Elimina un guionista de la pelicula
app.delete("/peliculas/guionista",
    function(req, resp)
    {
        {
            let params = [req.body.ID_Pelicula, req.body.ID_Profesional];
            let sqlG = `DELETE FROM Pelicula_Profesional WHERE ID_Pelicula = ? AND ID_Profesional = ?`;
            connection.query(sqlG, params, function (error, resultado)
                {
                    if(error) { console.log(error); }
                    else
                    {
                        console.log("Guionista borrado");
                        console.log(resultado);
                        resp.send({error: false, codigo: 200, mensaje: "Guionista borrado"});
                    }
                }
            );
        }
    }
    ); 



    app.listen(3000);