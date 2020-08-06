// Números pares en un array

function parenArray(arr:number[])
{
    let npar: number[];
    for(let i = 0; i <=arr.length; i++)
    {
        if(i % 2 === 0){
        npar += arr[i] + "";
        }
    }
    return npar;
}

console.log(parenArray([2,3,4,5,10]));


// Nombres con M

function nombresConM(cadena: string[])
{
   
    for(let i=0; i<cadena.length; i++)
    { 
        for(var j = 0; j<cadena[i].length; j++)
        {
            if(cadena[i][0] === "M"){}
        
        }   
    }
    console.log("Verdadero");


// Números impares

function impares(numero){
    for (let i=0; i<=numero; i++)
    {
        if(numero % 2 == 1)
        {
            console.log(i)
        }
    }    
}

// La suma de caracteres de un array es par o impar

function sumaParoImpar(arr: string[])
{    
    let suma = 0;
    let resultado = "";
        for(let i=0; i<arr.length; i++)
        {
            for(let j=0; j<arr[i].length; j++)
            {
                ++ suma;
                if(suma % 2 == 0)
                {
                    resultado = "El numero es par";
                }
                else
                {
                    resultado = "El numero es impar";
                }
            }
        }
        return resultado;
}

console.log(sumaParoImpar(["Casa", "Coche", "Ciudad", "Cesta"]))
console.log(sumaParoImpar(["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto","Brasil"]));
console.log(sumaParoImpar(["Venezuela", "Veneno", "Voltaje"]));


// Suma de caracteres de un array de string

function sumaCaracteres(arr: string[])
{
    let suma = 0;
    for(let i=0; i<arr.length; i++)
    {
        for(let j=0; j<arr[i].length; j++){
        ++ suma;
        }
    }
    return suma;
}

console.log(sumaCaracteres(["Esto", "es una", "prueba"]));