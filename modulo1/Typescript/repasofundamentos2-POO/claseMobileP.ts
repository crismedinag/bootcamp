export class MobileP
{
    private name:string;
    private model:string;
    private trademark:string;
    private sdSize:number;
    private color:string;
    private is5G:boolean;
    private cameraNumber:number;
    private price:number;
        
    constructor(name:string, model:string, trademark:string, sdSize:number, color:string, is5G:boolean, cameraNumber:number, price:number)
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

    public getName = function ()
    {
        return this.name;
    }
    public getModel = function ()
    {
        return this.model;
    }
    public getTrademark = function ()
    {
        return this.trademark;
    }
    public getSdSize = function ()
    {
        return this.sdSize;
    }
    public getColor = function ()
    {
        return this.trademark;
    }
    public getIs5G = function ()
    {
        return this.is5G;
    }
    public getCameraNumber = function ()
    {
        return this.cameraNumber;
    }
    public getPrice = function ()
    {
        return this.price;
    }
    public setName(name:string)
    {
        this.name = name;
    }
    public setModel(model:string)
    {
        this.model = model;
    }
    public setTrademark(trademark:string)
    {
        this.trademark = trademark;
    }
    public setIs5G(is5G:boolean)
    {
        this.is5G = is5G;
    }
    public setCameraNumber(cameraNumber:number){
        this.cameraNumber = cameraNumber;
    }
    public setPrice(price:number)
    {
        this.price = price;
    }
    public printCharacteristics(): string
    {
        let texto = "The characteristics of the mobile "  + this.name + " are:\n" + "Name: " + this.name + "\n" + "Model: " + this.model + "\n"+ "Trademark: " + this.trademark + "\n" + "SD Size(GB): " + this.sdSize + "\n" + "Color: " + this.color +  "\n" + "Is 5G?: " + this.is5G + "\n" + "Number of Cameras: " + this.cameraNumber + "\n" + "Price: " + this.price + "\n";
        
        return texto
    }
    
}

