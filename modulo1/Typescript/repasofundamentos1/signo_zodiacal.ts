/* 
Realizar una función que dada una fecha de nacimiento te devuelva el signo zodiacal.
*/

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
    } else if ((dia >= 22 && mes === 6) || (dia <= 23 && mes ===7))
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

console.log(zodiaco(21,6));
