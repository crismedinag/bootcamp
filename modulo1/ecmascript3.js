/*
-Crea una función que tenga de parámetro de entrada un array y devuelva la suma de los elementos del
array en una variable suma.
-La declaración de las variables debe hacerse usando solo EMASCRIPT, así como la creación de la función.
-La función debe devolver “No has introducido un array como parámetro de entrada”, si el parámetro de
entrada no es un array. Finalmente si la función no tiene parámetros de entrada debe devolver 0 como resultado.
*/


printarray = (array) => {
    if(Array.isArray(array)){
     let resultado = 0;
     for(i=0; i<array.length; i++){
         resultado += array[i];
     }
     return resultado;
  } else {
      return `No has introducido un array como parámetro de entrada.`;
  }
}

console.log(printarray([]));
