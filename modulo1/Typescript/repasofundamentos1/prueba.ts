
function g(numero) {
    if (numero % 2 == 0) 
    {
    console.log("El numero es par");
    }
    else 
    {
    console.log("El numero es impar");
    }
}


function sumaCaracteres(arr: string[]): number 
{
    let suma = 0;

    for(let i=0; i<arr.length; i++)
    {
        suma += arr[i].length;
    }
    return suma;
}


let grupo1 = sumaCaracteres(["Casa", "Coche", "Ciudad", "Cesta"]);
let grupo2 = sumaCaracteres(["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto","Brasil"]);
let grupo3 = sumaCaracteres(["Venezuela", "Veneno", "Voltaje"]);

g(grupo1);
g(grupo2);
g(grupo3);

