"use strict";
exports.__esModule = true;
exports.Punto = void 0;
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        this.x = x;
        this.y = y;
    }
    //Devuelve en texto las coordenadas
    Punto.prototype.toString = function () {
        return "Las coordenadas del punto son: (" + this.x + "," + this.y + ")";
    };
    //Getters y Setters
    Punto.prototype.getX = function () {
        return this.x;
    };
    Punto.prototype.getY = function () {
        return this.y;
    };
    Punto.prototype.setX = function (x) {
        this.x = x;
    };
    Punto.prototype.setY = function (y) {
        this.y = y;
    };
    //Devuelve distancia de un punto con respecto al origen
    Punto.prototype.distanciaAlOrigen = function () {
        var distanciaOrigen = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        return distanciaOrigen;
    };
    //Devuelve distancia entre un punto y otro
    Punto.prototype.calcularDistancia = function (otroPunto) {
        var xCuadrado = Math.pow((otroPunto.x - this.x), 2);
        var yCuadrado = Math.pow((otroPunto.y - this.y), 2);
        var distanciaPuntos = Math.sqrt(xCuadrado + yCuadrado);
        return distanciaPuntos;
    };
    //Localización del punto en el cuadrante
    Punto.prototype.calcularCuadrante = function () {
        var localizacion = 0;
        if ((this.x && this.y) > 0) {
            localizacion = 1;
        }
        else if (this.x < 0 && this.y > 0) {
            localizacion = 2;
        }
        else if ((this.x && this.y) < 0) {
            localizacion = 3;
        }
        else if (this.x > 0 && this.y < 0) {
            localizacion = 4;
        }
        else {
            localizacion = 0;
        }
        return localizacion;
    };
    //Calcular el punto más cercano de un array de Puntos con respecto al punto actual
    Punto.prototype.calcularMasCercano = function (puntos) {
        var masCercano = puntos[0];
        var puntoPartida = this.calcularDistancia(puntos[0]);
        var distancia = 0;
        for (var i = 1; i < puntos.length; i++) {
            puntoPartida = this.calcularDistancia(puntos[i]);
            if (distancia < puntoPartida) {
                distancia = puntoPartida;
                masCercano = puntos[i];
            }
        }
        return masCercano;
    };
    return Punto;
}());
exports.Punto = Punto;
