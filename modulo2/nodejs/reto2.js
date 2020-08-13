
// función que retorna el cuadrado de un número
function cuadrado(numero)
{
    return Math.pow(numero, 2);
}

console.log(cuadrado(2));

// función que recibe como parámetro un número y retorna uno aleatorio entre 0 y ese número
function aleatorio(numero)
{
    return Math.round(Math.random() * numero);
}

console.log(aleatorio(20));

// función que recibe las dos anteriores como parámetros y devuelve otra con un parámetro x. Esta función retorna una llamada a la función "a", que recibirá como parámetro la función "b" con el argumento x
function compose(funcionA, funcionB)
{
    return function(x) 
    {
        return funcionA(funcionB(x))
    }
}

//el numero devuelto es el cuadrado de un valor entre 0 y el parámetro x
console.log(compose(cuadrado, aleatorio)(30));