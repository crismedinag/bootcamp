import { Punto } from "./clasePunto";

export class Triangulo
{
    private primerVertice: Punto;
    private segundoVertice: Punto;
    private tercerVertice: Punto;

    constructor(primerVertice: Punto, segundoVertice: Punto, tercerVertice: Punto)
    {
        this.primerVertice = primerVertice;
        this.segundoVertice = segundoVertice;
        this.tercerVertice = tercerVertice;
    }
    public calcularLongitudLados(): number[]
    {
        let posicion1 = this.primerVertice.calcularDistancia(this.segundoVertice);
        let posicion2 = this.segundoVertice.calcularDistancia(this.tercerVertice);
        let posicion3 = this.tercerVertice.calcularDistancia(this.primerVertice);
        let longitud = [posicion1, posicion2, posicion3];
        return longitud;
    }
}