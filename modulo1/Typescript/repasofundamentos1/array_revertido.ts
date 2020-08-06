/*
Realizar una función que como parámetro de entrada reciba un array y como salida devuelva el array revertido.
*/

/* 
function arrayRevertido(arr1: number []): number[]
{
    let arr2: number[];
    arr2 = arr1.reverse();
    return arr2;
    
}

*/


function arrayRevertido(arr1) {
    let arr2 = [];
    for (let i = arr1.length - 1; i >= 0; i--) {
        arr2.push(arr1[i]);

    }
    console.log(arr2)

};

arrayRevertido([2, 3, 4, 5, 7]);