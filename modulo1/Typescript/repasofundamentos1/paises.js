/*
Realizar un procedimiento que dado un país te imprima en que continente estás. (Max 5 países por continente).
*/
function paisesYcontinentes(pais) {
    if (pais == ("España" || "Alemania" || "Francia" || "Italia" || "Noruega")) {
        console.log("Tu continente es Europa.");
    }
    else if (pais == ("Australia" || "Nueva Zelanda" || "Indonesia" || "Palaos" || "Samoa")) {
        console.log("Tu continente es Oceanía.");
    }
    else if (pais == ("México" || "Brasil" || "Chile" || "Canada" || "Guatemala")) {
        console.log("Tu continente es América.");
    }
    else if (pais == "China" || "Kuwait" || "Corea del sur" || "Japón" || "Corea del norte") {
        console.log("Tu continente es Asia.");
    }
    else if (pais == ("Etipía" || "Ghana" || "Ruanda" || "Túnez" || "Sudán")) {
        console.log("Tu continente es África.");
    }
    else {
        console.log("Ingresa otro país.");
    }
}
paisesYcontinentes("España");
