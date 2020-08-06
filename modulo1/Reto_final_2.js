/*
Crear una matriz (vector de vectores) de 10 x 10 es decir 10 elementos y cada uno de ellos es un vector de 10 números. Cada uno de los elementos de la matriz deberá ser un numero
aleatorio entre 0 y 50.
*/

var matriz1 = Array(10);
var i;
var j;

for(i=0; i<=10; i++){
  matriz1[i] = Array(10);
  for(j=0; j<=10; j++){
    matriz1[i][j] = (Math.floor(Math.random()*(50-0)));  
  }
}
console.table(matriz1);

var matriz2 = Array(10)

for(i=0; i<=10; i++){
  matriz2[i] = Array(10);
  for(j=0; j<=10; j++){
    matriz2[i][j] = (Math.floor(Math.random()*(50-0)));  
  }
}
console.table(matriz2);



// Realizar la suma de las dos matrices (sumar elemento a elemento).


var matriz_suma = Array(10);

for(i=0; i<=10; i++){
  matriz_suma[i] = Array(10);
  for(j=0; j<=10; j++){
    matriz_suma[i][j] = (matriz1[i][j] + matriz2[i][j]);
  }
}
console.table(matriz_suma);


// Multiplicar un numero aleatorio por la matriz. Es decir, todos los elementos de la matriz se multiplicarán por ese numero.


var multiplicacion = Array(10);
var n_aleatorio = (Math.floor(Math.random()*(100-10)))

for(i=0; i<=10; i++){
  multiplicacion[i] = Array(10);
  for(j=0; j<=10; j++){
  multiplicacion[i][j] = (matriz_suma[i][j] * n_aleatorio);
}
}
console.table(multiplicacion)