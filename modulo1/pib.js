/* A partir de un importe neto debe obtenerse el PIB, teniendo en cuenta las premisas:

Premisa 1: producto comprado en España.
    -PVP mayor a 2000 €, aplicar el 16 %
    -PVP menor a 2000 €, aplicar el 10 %
Premisa 2: producto de fuera.
    -PVP aplicar el 16 % o el 10 % + 10 % aduanas
*/


var producto_tipo1 = "España";
var producto_tipo2 = "extranjero";
var precio_neto_producto = 120;
var precio_impuesto1 = (precio_neto_producto * 16) / 100;
var precio_impuesto2 = (precio_neto_producto * 10) / 100;
var bruto1 = precio_neto_producto + precio_impuesto1;
var bruto2 = precio_neto_producto + precio_impuesto2;
var aduanas1 = bruto1 + ((precio_neto_producto * 10) / 100)
var aduanas2 = bruto2 + ((precio_neto_producto * 10) / 100)

if(producto_tipo1 && (precio_neto_producto >= 2000)){
    console.log(bruto1);
} else if (producto_tipo1 && (precio_neto_producto <= 2000)){
    console.log(bruto2);
} else if (producto_tipo2 && (precio_neto_producto >= 2000)){
        console.log(aduanas1);
} else {
        console.log(aduanas2);
}




