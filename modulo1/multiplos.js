/*
Dado un array de números, buscar si existe algún numero de ese array que sea múltiplo de 2 utilizando la sentencia while.
*/

var numeros = [2, 45, 67, 68, 98, 45, 34];
var i = 0;

while (i < numeros.length) {
    if (numeros[i] % 2 === 0) {
        console.log(numeros[i]);
    }
    i++;

}