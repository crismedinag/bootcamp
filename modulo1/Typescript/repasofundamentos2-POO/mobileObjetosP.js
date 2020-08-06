"use strict";
exports.__esModule = true;
var claseMobileP_1 = require("./claseMobileP");
var Nokia3210 = new claseMobileP_1.MobileP("Nokia", " 3210", " Nokia", 2, " Gris", false, 0, 15);
var iPhone3G = new claseMobileP_1.MobileP("iPhone", " 3G", " Apple", 18, " Negro o Blanco", false, 1, 80);
var Samsung_Galaxy10 = new claseMobileP_1.MobileP("Samsung", " Galaxy10", " Samsung", 64, " Negro o Blanco", true, 2, 770);
Nokia3210.printCharacteristics();
iPhone3G.printCharacteristics();
Samsung_Galaxy10.printCharacteristics();
console.log(Nokia3210.setIs5G(true));
console.log(Nokia3210.setCameraNumber(4));
var arrmobile = new Array;
arrmobile = [Nokia3210, iPhone3G, Samsung_Galaxy10];
arrmobile[1][2][3].printCharacteristics();
