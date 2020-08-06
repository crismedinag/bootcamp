import { MobileP } from "./claseMobileP";
import { MobileLibrary} from "./mobileLibrary";

let Nokia3210: MobileP = new MobileP("Nokia"," 3210", " Nokia", 2, " Gris",  false, 0, 15);

let iPhone3G: MobileP = new MobileP("iPhone", " 3G", " Apple", 18, " Negro o Blanco",  false, 1, 80);

let Samsung_Galaxy10: MobileP = new MobileP("Samsung", " Galaxy10", " Samsung", 64, " Negro o Blanco",  true, 2, 700);

let XiaomiMi9: MobileP = new MobileP("Xiaomi", " Mi9", " Xiaomi", 128, " Negro o Blanco",  true, 3, 450);

var arrmobile = [Nokia3210, iPhone3G, Samsung_Galaxy10, XiaomiMi9];

let library1: MobileLibrary = new MobileLibrary("Worten", "Madrid", arrmobile)

console.log(library1.getName());
console.log(library1.getLocation());

library1.setName("Mediamarkt");
library1.setLocation("Valladolid");

console.log(library1.getName());
console.log(library1.getLocation());

console.log(library1.totalPriceCalculation());
