function arcoiris(arr: string[])
{
    
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i] === "Rojo" || "Naranja" || "Amarillo" || "Verde" || "Azul" || "Tuquesa" || "Violeta") 
            {
            console.log("Este color forma parte del arcoíris.");
            }
        else 
            {
            console.log("Este color no forma parte del arcoíris.");
            }
    }
}

console.log(arcoiris(["Rojo", "Negro", "Azul", "Blanco"]));