/* Construye un sistema que nos muestra por pantalla todos los números del 1 al 10. Constrúyelo de las 3 maneras vista en el día. */


for (i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("\n");

var i = 1;
while(i<=10) {
  console.log(i);
  i++;
}

console.log("\n");

var i = 1;
do {
  console.log(i);
  i++;
}while (i<=10);

console.log("\n");

/* Numeros impares del 1 al 10. */

for(i=1; i<=10; i+=2){
  console.log(i);
}

console.log("\n");

for(i=9; i>=0; i-=2){
  console.log(i);
}

/* Números impares y divisibles por 3. */

console.log("\n");

for(i=9; i>=0; i-=2){
    if(i % 3 === 0)
    console.log(i)
  }