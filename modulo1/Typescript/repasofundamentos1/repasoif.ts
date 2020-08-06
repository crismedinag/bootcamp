function arcoiris(arr: string[])
{
    
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i] === "Rojo")
            {
            console.log("Este color forma parte del arcoíris.");
            } 
        else if (arr[i] === "Naranja")
            {
            console.log("Este color forma parte del arcoíris.");
            }
        else if (arr[i] === "Amarillo"){
            console.log("Este color forma parte del arcoíris.");
            } 
        else if (arr[i] === "Verde")
            {
            console.log("Este color forma parte del arcoíris.");
            } 
        else if (arr[i] === "Azul")
            {
            console.log("Este color forma parte del arcoíris.");
            } 
        else if (arr[i] === "Turquesa")
            {
                console.log("Este color forma parte del arcoíris."); 
            } 
        else if (arr[i] === "Violeta")
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

// Al introducir un país por parámetro, la consola imprime su continente

function paisesYcontinentes(pais){
    if(pais == ("España" || "Alemania" || "Francia" || "Italia" || "Noruega")){
        console.log("Tu continente es Europa.");
    } 
    else if (pais == ("Australia" || "Nueva Zelanda" || "Indonesia" ||  "Palaos" || "Samoa")){
        console.log("Tu continente es Oceanía.");
    } 
    else if (pais == ("México" || "Brasil" || "Chile" || "Canada" || "Guatemala"))
    {
        console.log("Tu continente es América.");
    } 
    else if (pais == "China" || "Kuwait" || "Corea del sur" || "Japón" || "Corea del norte")
    {
        console.log("Tu continente es Asia.");
    } 
    else if (pais == ("Etipía" || "Ghana" || "Ruanda" || "Túnez" || "Sudán"))
    {
        console.log("Tu continente es África.")
    } 
    else 
    {
        console.log("Ingresa otro país.");
    }
}

// Al introducir por parametro día y mes, la consola imprime signo del zodiaco


function zodiaco(dia: number, mes: number)
{
    let signo_zodiaco = String ("");
    if((dia >= 21 && mes === 1) || (dia >=19 && mes === 2))
    {
        signo_zodiaco = "Tu signo zodiacal es acuario.";
    } else if ((dia >= 20 && mes === 2) || (dia <= 20 && mes ===3))
    {
        signo_zodiaco = "Tu signo zodiacal es piscis.";
    } else if ((dia >= 21 && mes === 4) || (dia <= 21 && mes ===5))
    {
        signo_zodiaco = "Tu signo zodiacal es tauro.";
    } else if ((dia >= 22 && mes === 5) || (dia <= 21 && mes ===6))
    {
        signo_zodiaco = "Tu signo zodiacal es géminis.";
    } else if ((dia >= 21 && mes === 6) || (dia <= 23 && mes ===7))
    {
        signo_zodiaco = "Tu signo zodiacal es cáncer.";
    } else if ((dia >= 24 && mes === 7) || (dia <= 23 && mes ===8))
    {
        signo_zodiaco = "Tu signo zodiacal es leo.";
    } else if ((dia >= 24 && mes === 8) || (dia <= 23 && mes ===9))
    {
        signo_zodiaco = "Tu signo zodiacal es virgo.";
    } else if ((dia >= 24 && mes === 9) || (dia <= 23 && mes ===10))
    {
        signo_zodiaco = "Tu signo zodiacal es libra.";
    } else if ((dia >= 24 && mes === 10) || (dia <= 22 && mes ===3))
    {
        signo_zodiaco = "Tu signo zodiacal es escorpio.";
    } else
    {
        signo_zodiaco = "Tu signo zodiacal es sagitario.";
    }
    return signo_zodiaco;
}

console.log(zodiaco(22,10));
