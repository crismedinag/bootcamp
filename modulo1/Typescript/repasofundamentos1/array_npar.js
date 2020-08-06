function parenArray(arr) {
    var resultado = false;
    var i = 0;
    while (i < arr.length && !resultado) {
        if (arr[i] % 2 == 0) {
            resultado = true;
        }
        i++;
    }
    console.log(resultado);
}
parenArray([1, 2, 5, 1]);
