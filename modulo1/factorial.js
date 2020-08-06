/*
Calcular el factorial de un numero dado, primero utilizando la
sentencia for y luego con while.
*/

var dato_dado = 6;
var resultado = 1;

for(i=1; i<=dato_dado; i++){
  resultado *= i;

}
console.log("El factorial de este número es " + resultado);


var dato_dado = 7;
var resultado = 1;
var i = 1;
while(i<=dato_dado) {
  resultado *= i;
  i++;
}
console.log("El factorial de este número es " + resultado);