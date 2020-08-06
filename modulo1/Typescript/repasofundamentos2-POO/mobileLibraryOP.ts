import { MobileP } from "./claseMobileP";
import { MobileLibrary} from "./mobileLibraryP";

let Nokia3210: MobileP = new MobileP("Nokia"," 3210", " Nokia", 2, " Gris",  false, 0, 15);
let iPhone3G: MobileP = new MobileP("iPhone", " 3G", " Apple", 18, " Negro o Blanco",  false, 1, 80);
let Samsung_Galaxy10: MobileP = new MobileP("Samsung", " Galaxy10", " Samsung", 64, " Negro o Blanco",  true, 2, 700);
let XiaomiMi9: MobileP = new MobileP("Xiaomi", " Mi9", " Xiaomi", 128, " Negro o Blanco",  true, 3, 450);
let MotorolaRazrV3: MobileP = new MobileP("Motorola", " Razr V3", " Motorola", 128, " Negro o Blanco",  true, 2, 1450);
let OnePlus8: MobileP = new MobileP("One Plus", " pro 8", " One Plus", 64, " Negro o Blanco",  true, 5, 909);


let arrmobile1 = [Nokia3210, iPhone3G, Samsung_Galaxy10, XiaomiMi9];
let arrmobile2 = [MotorolaRazrV3, OnePlus8];

let library1: MobileLibrary = new MobileLibrary("Worten", "Madrid", arrmobile1);
let library2: MobileLibrary = new MobileLibrary("FNAC", "Ciudad Real", arrmobile2);


console.log(library2.getName());
console.log(library2.getLocation());

library2.setName("Mediamarkt");
library2.setLocation("Valladolid");

console.log(library2.getName());
console.log(library2.getLocation());

library2.printLibrary();
