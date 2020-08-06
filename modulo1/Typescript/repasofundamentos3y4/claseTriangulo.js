"use strict";
exports.__esModule = true;
exports.Triangulo = void 0;
var Triangulo = /** @class */ (function () {
    function Triangulo(primerVertice, segundoVertice, tercerVertice) {
        this.primerVertice = primerVertice;
        this.segundoVertice = segundoVertice;
        this.tercerVertice = tercerVertice;
    }
    Triangulo.prototype.calcularLongitudLados = function () {
        var posicion1 = this.primerVertice.calcularDistancia(this.segundoVertice);
        var posicion2 = this.segundoVertice.calcularDistancia(this.tercerVertice);
        var posicion3 = this.tercerVertice.calcularDistancia(this.primerVertice);
        var longitud = [posicion1, posicion2, posicion3];
        return longitud;
    };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
