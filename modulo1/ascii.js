/* 
Vamos a realizar un cifrador de texto, la idea es que desarrolléis una función que reciba un texto o una frase y cifre cada una de sus letras en su correspondiente valor del código ASCII, devolviendo un texto con todos estos valores de ASCII separados por espacios.
*/



ascii = (texto = ("")) => {  
    let resultado = "";
    texto = texto.split('');
    for(let i=0; i<texto.length; i++){
    resultado += texto[i].charCodeAt() + " ";
    }
    return resultado;
    
} 

console.log(ascii("Codenotch and Javascript are awesome!"));
