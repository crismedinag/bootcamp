// Haz que se muestre un mensaje cada 5 segundos. Guarda en una variable el tiempo actual y cada vez que se muestre el mensaje haz se imprima la diferencia entre la fecha actual y el tiempo de la variable anterior. Actualiza la variable con el nuevo tiempo. ¿Sale siempre la misma diferencia? 

var tiempoActual = Date.now();
setInterval(function tiempo (){
    console.log('Hola, el tiempo actual es: ');
    console.log(Date.now() - tiempoActual);
    tiempoActual = Date.now();
},5000)