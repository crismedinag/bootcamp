/*
RETO 1: Crea una función que imprima siempre lo que se le pasa por parámetro, y si no se le pasa ningún parámetro, informe de esta situación (utiliza ECMASCRIPT).
*/

dataPrint = (a = "No has introducido ninún dato") => { 
    let dato = a;
    if(dato === a){
        console.log(dato)
    }
}

dataPrint();