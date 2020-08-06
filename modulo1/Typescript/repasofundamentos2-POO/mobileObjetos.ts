import { Mobile } from "./claseMobile";

let Nokia3210: Mobile = new Mobile("Nokia"," 3210", " Nokia", " 84 x 84 px", " Gris",  false, 0, " 15 €");
let iPhone3G: Mobile = new Mobile('iPhone', ' 3G', ' Apple', ' 35"', ' Negro o Blanco',  false, 1, " 80 €");

let Samsung_Galaxy10: Mobile = new Mobile('Samsung', ' Galaxy10', ' Samsung', ' 6.1"', ' Negro o Blanco',  true, 2, " 770 €");


console.log(Nokia3210, iPhone3G, Samsung_Galaxy10);

Nokia3210.is5G = true;
Nokia3210.cameraNumber = 4;

console.log(Nokia3210, iPhone3G, Samsung_Galaxy10);
