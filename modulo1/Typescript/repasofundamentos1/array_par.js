/*
Realizar una función que te devuelva si existe un numero par en el array de números que introduces como parámetro de entrada.
*/


function parenArray(arr = Number = [])
{
    let pares = [];
    for(i = 0; i <=arr.length; i++){
        if(i % 2 === 0){
        pares += arr[i] + " ";
        }
    }
    return pares;
}

console.log(parenArray([2,3,4,5,10]));
