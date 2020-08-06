export class Mobile
{
    public name:string;
    public model:string;
    public trademark:string;
    public sdSize:string;
    public color:string;
    public is5G:boolean;
    public cameraNumber:number;
    public price:string;
        
    constructor(name:string, model:string, trademark:string, sdSize:string, color:string, is5G:boolean, cameraNumber:number, price:string)
    {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }

    public setIs5G(is5G:boolean){
        this.is5G = is5G;
    }
    public setCameraNumber(cameraNumber:number){
        this.cameraNumber = cameraNumber;
    }
}