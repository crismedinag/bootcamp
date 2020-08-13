/*
Crea un servidor web que realice las siguientes tareas:
1. Debe mostrar por consola ‘Petición recibida del cliente’ por cada conexión que se haga
desde el cliente.
2. Debe mostrar por consola la url y método por el que se está haciendo la petición.
3. Debe mostrar por consola la cabecera content-type, content-length, user-agent.
4. Se le retorne al usuario un mensaje del tipo application/json con el status code 200 y un
mensaje con este contenido: { ok: true, message: ‘Recibido!’ }
5. Si alguien entra en /bye debe devolver un mensaje del tipo application/json, statusCode:
200 y un mensaje con este contenido: { ok: true, message: ‘Adios!’ }
*/

const http = require('http');
var mensajeHola = {ok: "true", message: 'recibido'};
var mensajeAdios = {ok: "true", message: '¡Adios!'};

const server = http.createServer(function(request, response)
{   
    console.log('Petición recibida del cliente');
    console.log('Request URL: ' + request.url);
    console.log('Request Method: ' + request.method);
    console.log('Header Request: ' + request.headers.host + "\n" + request.headers["content-type"] + "\n" +request.headers["content-length"] + "\n" + request.headers["user-agent"]);
    
    if(request.url === '/'){
        response.writeHead(200, {'Content-Type': "application/json"});
        response.write(JSON.stringify(mensajeHola));
        response.end();

    } else if(request.url === "/bye")
        {response.writeHead(200, {'Content-Type': "application/json"});
        response.write(JSON.stringify(mensajeAdios));
        response.end();}
});
server.listen(3000);