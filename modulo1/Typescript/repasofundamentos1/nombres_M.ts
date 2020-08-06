
function nombresConM(cadena: string[])
{
    let resultado: boolean = true;
    let i = 0;
    while (i<cadena.length && resultado)
    { 
        if(!cadena[i].startsWith("M"))
            {
            resultado = false;
            }
    i++; 
    }
return resultado; 
}


console.log(nombresConM(["María", "Luis", "Marisa"]));
