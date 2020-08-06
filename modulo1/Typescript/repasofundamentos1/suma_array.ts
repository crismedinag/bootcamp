/*
Realizar una función que te devuelva la suma del numero de caracteres de las palabras almacenadas en un array.
*/


function sumaCaracteres(arr: string[]): number 
{
    let suma = 0;

    for(let i=0; i<arr.length; i++)
    {
        suma += arr[i].length;
    }
    return suma;
}

console.log(sumaCaracteres(["Esto", "es una", "prueba"]));