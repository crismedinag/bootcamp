/*
Piensa un escenario en el que se quiere decidir un restaurante para una celebración. Los organizadores
quieren que cumpla uno de los siguientes puntos: 
    - Que haya 3 platos en el menú, que incluya DJ y dos horas de barra libre. 
    - Que haya cóctel de bienvenida, menú con dos platos y una hora de barra libre.
*/


var platos1 = 3;
var platos2 = 2;
var barra_libre1 = 2;
var barra_libre2 = 1;
var extra1 = "DJ";
var extra2 = "cóctel";

if((platos1 == 3 && extra1 == "DJ" && barra_libre1 == 6) || (platos2 == 7 && extra2 == "cóctel" && barra_libre2 == 1)) {
  console.log("Puede ser vuestro restaurante");
} else {
  console.log("Este restaurante no cumple vuestros requisitos");
}