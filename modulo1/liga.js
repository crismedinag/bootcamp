/*
Piensa en La Liga española y utiliza una secuencia switch/case para saber si un equipo gana la liga, entra en
champions, entra en uefa, consigue la permanencia o baja a segunda división.
*/

// Lo hago con 10 equipos.


var puesto = "primero";
var resultado = "";
switch (puesto) {
  case "primero": 
  resultado = "Has ganado y estás en la Champions";
  break;
  case "segundo":
  resultado = "Estás en Champions";
  case "tercero":
  resultado = "Estás en Champions";
  break;
  case "cuarto":
  resultado = "Estás en la Uefa";
  break;
  case "quinto":
  resultado = "Estás en la Uefa";
  break;
  case "sexto":
  resultado = "Lograste la permanencia";
  break;
  case "séptimo":
  resultado = "Lograste la permanencia";
  break;
  case "octavo":
  resultado = "Lograste la permanencia";
  break;
  case "noveno":
  resultado = "Lograste la permanencia";
  break;
  case "décimo":
  resultado = "Bajas a segunda división";
  break;
  default:
  resultado = "El valor no es correcto"
}
console.log(resultado)