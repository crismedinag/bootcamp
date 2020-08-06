import { Punto } from "./clasePunto";
import { Triangulo } from "./claseTriangulo";

// Pruebas clase Punto

let puntoA: Punto = new Punto(3,8);
let puntoB: Punto = new Punto(7,4);
let puntoC: Punto = new Punto(4,-4);
let puntoD: Punto = new Punto(1,6);

let arrPunto: Punto [] = [puntoA, puntoB, puntoC];

console.log(puntoA.toString());
console.log(puntoA.getX());
console.log(puntoA.getY());
console.log(puntoA.distanciaAlOrigen());
console.log(puntoA.calcularDistancia(puntoB));
console.log(puntoA.calcularCuadrante());
console.log(puntoC.calcularCuadrante());

console.log(puntoD.calcularMasCercano(arrPunto));



// Pruebas clase Triangulo


let trianguloA: Triangulo = new Triangulo(puntoA, puntoB, puntoC);

console.log(trianguloA.calcularLongitudLados());
