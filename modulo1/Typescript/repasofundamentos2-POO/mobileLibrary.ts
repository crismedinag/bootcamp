import { MobileP } from "./dia2/claseMobileP";

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
    public setMobiles(mobiles:[])
    {
        this.mobiles = mobiles;
    }
    public totalPriceCalculation(): number
    {
        this.totalPrice = 0;
        for(let i=0; i<this.mobiles.length; i++)
        {
           this.totalPrice += this.mobiles[i].getPrice();
        }
        return this.totalPrice;
    }

}