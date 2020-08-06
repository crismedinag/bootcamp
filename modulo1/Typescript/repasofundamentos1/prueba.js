function g(numero) {
    if (numero % 2 == 0) {
        console.log("El numero es par");
    }
    else {
        console.log("El numero es impar");
    }
}
function sumaCaracteres(arr) {
    var suma = 0;
    for (var i = 0; i < arr.length; i++) {
        suma += arr[i].length;
    }
    return suma;
}
var grupo1 = sumaCaracteres(["Casa", "Coche", "Ciudad", "Cesta"]);
var grupo2 = sumaCaracteres(["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"]);
var grupo3 = sumaCaracteres(["Venezuela", "Veneno", "Voltaje"]);
g(grupo1);
g(grupo2);
g(grupo3);
