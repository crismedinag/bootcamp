"use strict";
exports.__esModule = true;
var clasePunto_1 = require("./clasePunto");
var claseTriangulo_1 = require("./claseTriangulo");
// Pruebas clase Punto
var puntoA = new clasePunto_1.Punto(3, 8);
var puntoB = new clasePunto_1.Punto(7, 4);
var puntoC = new clasePunto_1.Punto(4, -4);
var puntoD = new clasePunto_1.Punto(1, 6);
var arrPunto = [puntoA, puntoB, puntoC];
console.log(puntoA.toString());
console.log(puntoA.getX());
console.log(puntoA.getY());
console.log(puntoA.distanciaAlOrigen());
console.log(puntoA.calcularDistancia(puntoB));
console.log(puntoA.calcularCuadrante());
console.log(puntoC.calcularCuadrante());
console.log(puntoD.calcularMasCercano(arrPunto));
// Pruebas clase Triangulo
var trianguloA = new claseTriangulo_1.Triangulo(puntoA, puntoB, puntoC);
console.log(trianguloA.calcularLongitudLados());
