function nombresConM(cadena) {
    var resultado;
    var i = 0;
    var j = 0;
    while (i < cadena.length) {
        if (!cadena[i][0]("M")) {
            resultado = false;
        }
        i++;
    }
    return resultado;
}
console.log(nombresConM(["María", "Luis", "Marisa"]));
