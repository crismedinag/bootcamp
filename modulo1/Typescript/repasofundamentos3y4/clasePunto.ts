export class Punto
{
    private x:number;
    private y:number;
        
    constructor(x:number, y:number)
    {
        this.x = x;
        this.y = y;
    }
    
    //Devuelve en texto las coordenadas
    public toString(): string
    {
        return "Las coordenadas del punto son: (" + this.x + "," + this.y + ")";
    }

    //Getters y Setters
    public getX():number
    {
        return this.x;
    }

    public getY():number
    {
        return this.y
    }
    
    public setX(x:number)
    {
        this.x = x;
    }
    public setY(y:number)
    {
        this.y = y;
    }

    //Devuelve distancia de un punto con respecto al origen
    public distanciaAlOrigen(): number
    {
        let distanciaOrigen: number = Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2));
        return distanciaOrigen;
    }

    //Devuelve distancia entre un punto y otro
    public calcularDistancia(otroPunto: Punto): number
    {
        let xCuadrado: number = Math.pow((otroPunto.x - this.x), 2);
        let yCuadrado: number = Math.pow((otroPunto.y - this.y), 2);
        let distanciaPuntos: number = Math.sqrt(xCuadrado + yCuadrado); 
        return distanciaPuntos;     
    }

    //Localización del punto en el cuadrante
    public calcularCuadrante(): number
    {
        let localizacion: number = 0;
        if((this.x && this.y) > 0)
        {
            localizacion = 1;
        }else if (this.x < 0 && this.y > 0)
        {
            localizacion = 2;
        }else if((this.x && this.y) <0)
        {
            localizacion = 3;
        }else if(this.x > 0 && this.y < 0)
        {
            localizacion = 4;
        }else{
            localizacion = 0;
        }
    return localizacion;
    }
    
    //Calcular el punto más cercano de un array de Puntos con respecto al punto actual
    public calcularMasCercano(puntos: Punto[]): Punto
    {
        let masCercano = puntos[0];
        let puntoPartida = this.calcularDistancia(puntos[0]);
        let distancia = 0;

        for(let i=1; i<puntos.length; i++)
        {
            puntoPartida = this.calcularDistancia(puntos[i])
            if(distancia < puntoPartida)
            {   
                distancia = puntoPartida;
                masCercano = puntos[i];
            }
        }
        return masCercano;
    }
}