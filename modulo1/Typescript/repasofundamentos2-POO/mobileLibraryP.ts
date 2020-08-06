import { MobileP } from "./claseMobileP";

export class MobileLibrary
{
    private name:string;
    private location:string;
    private mobiles: MobileP[];
    private totalPrice:number;

    constructor(name:string, location: string, mobiles: MobileP[])
    {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }

    public getName = function (): string
    {
        return this.name;
    }
    public getLocation = function (): string
    {
        return this.location;
    }
    public getMobiles = function (): MobileP[]
    {
        return this.mobiles;
    }

    public setName(name:string)
    {
        this.name = name;
    }
    public setLocation(location:string)
    {
        this.location = location;
    }
    public setMobiles(mobiles:MobileP[])
    {
        this.mobiles = mobiles;
    }
    private totalPriceCalculation(): number
    {
        this.totalPrice = 0;
        for(let i=0; i<this.mobiles.length; i++)
        {
           this.totalPrice += this.mobiles[i].getPrice();
        }
        return this.totalPrice;
    }
    public printLibrary()
    {
        let a = "This is all my mobiles:\n";
        let b = "Price overall: " + this.totalPrice;
        let repository: string = "";
        for(let i=0; i<this.mobiles.length; i++)
        {
           repository = repository + this.mobiles[i].printCharacteristics();
        }
        console.log(a + repository + b);
    }
}