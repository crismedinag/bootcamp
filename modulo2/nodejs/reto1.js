/*
Escribir tres funciones:
1.Una función a que tan solo escriba ‘hola desde a’ por la consola.2.Una función b que escriba por consola ‘hola desde b’.
3.Una función main que reciba como parámetro una función.Que pinte por consola‘hola desde main’ y luego llame a la función que recibe como parámetro.
4.Llamar a main(a) ¿qué pone en pantalla? ¿qué pasa si cambiamos a main(b)? ¿que pasa si llamamos a main(main)?
*/

function a()
{
    console.log('hola desde a');
}

function b()
{
    console.log('hola desde b');
}

function main(funcionC)
{   
    console.log('hola desde main');
    funcionC();
}

main(a);
main(b);
main(main);