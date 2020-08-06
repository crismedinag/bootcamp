
function parenArray(arr: number []) 
{ 
    let resultado: boolean = false;
    let i = 0;
    while (i<arr.length && !resultado)
    {
        if(arr[i] % 2 == 0)
        {
        resultado = true;
        }
    i++;
    }
console.log(resultado);
}  

parenArray([1,2,5,1]);