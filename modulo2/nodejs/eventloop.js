/*
1.Muestra en pantalla el mensaje‘after1second’ una vez haya pasado 1 segundo.
2.Tomando como base el código del punto anterior haz que,una vez pasado dicho segundo, se muestre en pantalla‘lastprocessafterfinishtheloop’ al final del eventloop actual.
3.Tomando como base código anterior haz que se muestre un mensaje de ‘initial loop event’ en el siguiente loop.
*/

setTimeout(function()
{
    console.log('after 1second');
    
    setImmediate(function()
    {
        console.log('last process after finish the loop');
    
        process.nextTick(function()
        {
            console.log('initial loop event')
        });
    });
},1000);