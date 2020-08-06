"use strict";
exports.__esModule = true;
var claseMobileP_1 = require("./claseMobileP");
var mobileLibrary_1 = require("./mobileLibrary");
var Nokia3210 = new claseMobileP_1.MobileP("Nokia", " 3210", " Nokia", 2, " Gris", false, 0, 15);
var iPhone3G = new claseMobileP_1.MobileP("iPhone", " 3G", " Apple", 18, " Negro o Blanco", false, 1, 80);
var Samsung_Galaxy10 = new claseMobileP_1.MobileP("Samsung", " Galaxy10", " Samsung", 64, " Negro o Blanco", true, 2, 700);
var XiaomiMi9 = new claseMobileP_1.MobileP("Xiaomi", " Mi9", " Xiaomi", 128, " Negro o Blanco", true, 3, 450);
var arrmobile = [Nokia3210, iPhone3G, Samsung_Galaxy10, XiaomiMi9];
var library1 = new mobileLibrary_1.MobileLibrary("Worten", "Madrid", arrmobile);
console.log(library1.getName());
console.log(library1.getLocation());
library1.setName("Mediamarkt");
library1.setLocation("Valladolid");
console.log(library1.getName());
console.log(library1.getLocation());
console.log(library1.totalPriceCalculation());