/*
Usando únicamente Javascript, construye el siguiente texto en el navegador (recuerda respetar espacios, saltos de línea, estilos y tipos de datos).
*/

var bloque1 = "Lorem ipsum dolor sit amet";
var bloque2 = ", consectetur adipiscing elit. ";
var bloque3 = "Phasellus mattis vehicula consequat. Proin dapibus nunc";
var bloque4 = "quam, nec dictum erat feugiat vitae.";
var parrafo1 = bloque1.bold() + bloque2 + "<br>" + bloque3.italics() + "<br>" + bloque4.italics();

var bloque4 = "Curabitur dignissim nisi a est vulputate tristique";
var punto = ".";
var bloque5 = " Curabitur "
var bloque6 = "maximus erat leo, sit amet facilisis est egestas sed.";
var parrafo2 = bloque4.strike() + punto + bloque5 + "<br>" + bloque6;

var bloque7 = "Morbi aliquam, ipsum eget volutpat blandit, lectus odio";
var bloque8 = "condimentum dui, eget dictum quam ipsum sit amet";
var bloque9 = "nulla.";
var parrafo3 = bloque7 + "<br>" + bloque8 + "<br>" + bloque9;


document.write(parrafo1 + "<br>" + "<br>" + parrafo2 +  "<br>"+ "<br>" + parrafo3.bold())
