/* Construye una función “calculadora()” que reciba como parámetros de entrada:
- Tipo de operación
- Operadores (siempre 2 operadores para hacerlo más sencillo).
Las operaciones permitidas son: suma (“sum”), resta (“subs”), multiplicación (“mult”) y división (“div”).
Dependiendo del identificador de la operación, y los parámetros de entrada, la función debe decidir qué operación realizar y devolvernos un resultado válido.*/


function calculadoraA(operacion, n1, n2){
    var n1;
    var n2;
    var operación = "";
    var resultado;
    if (operacion === "+"){
        resultado = n1 + n2;
    } else if (operacion === "-"){
        resultado = n1 - n2;
    } else if (operación === "*"){
        resultado = n1 * n2;
    } else if (operación === "/"){
        resultado = n1 / n2;
    }
    return resultado;
}

console.log(calculadoraA("-", 30, 3));


function calculadoraB(operacion, n1, n2){
    var n1;
    var n2;
    var resultado;
    switch(operacion){
        case "+": resultado = n1 + n2;
        break;
        case "-": resultado = n1 - n2;
        break;
        case "*": resultado = n1 * n2;
        break;
        case "/": resultado = n1 / n2;
    }
return resultado;
}
console.log(calculadoraB("+", 50, 5));

