import { MobileP } from "./claseMobileP";

let Nokia3210: MobileP = new MobileP("Nokia"," 3210", " Nokia", 2, " Gris",  false, 0, 15);
let iPhone3G: MobileP = new MobileP("iPhone", " 3G", " Apple", 18, " Negro o Blanco",  false, 1, 80);

let Samsung_Galaxy10: MobileP = new MobileP("Samsung", " Galaxy10", " Samsung", 64, " Negro o Blanco",  true, 2, 770);


Nokia3210.printCharacteristics();
iPhone3G.printCharacteristics();
Samsung_Galaxy10.printCharacteristics();

console.log(Nokia3210.setIs5G(true));
console.log(Nokia3210.setCameraNumber(4));


var arrmobile = new Array;
arrmobile = [Nokia3210, iPhone3G, Samsung_Galaxy10];

arrmobile[1][2][3].printCharacteristics();
