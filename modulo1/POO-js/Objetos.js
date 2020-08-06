/*
Crea una clase llamada “Password” que tenga los atributos de “length” y “password”. Por defecto el atributo “length” tendrá un valor de 8.
Los métodos asociados a esta clase serán:
- isStrong(): Nos devolverá “true” o “false” si la contraseña tiene una fortaleza suficiente (los métodos que uséis para determinar esto los dejo de vuestra parte, lo que os parezca mejor).
- generatePass(): Genera una contraseña aleatoria con la longitud que se le haya indicado como atributo (esta parte es opcional si acabáis pronto, ya que tiene bastante investigación).
- getter(): Métodos getter para los atributos antes mencionados.
*/


class Password {
    constructor (password){
        this.length = 8;
        this.password = password;
    }
    isStrong() {
        let mayuscula = false;
        let minuscula = false;
        let numero = false;
        let simbolo = false;

        for(let i=0; i<=this.length; i++){
            if(this.password.charCodeAt(i)>=65 && this.password.charCodeAt(i)<=90){
            mayuscula = true;
            } else if(this.password.charCodeAt(i)>=97 && this.password.charCodeAt(i)<=122){
            minuscula = true;
            } else if(this.password.charCodeAt(i)>=48 && this.password.charCodeAt(i)<=57){
            numero = true;
            } else{
            simbolo = true;
            }
        }
        if(mayuscula == true && minuscula == true && numero == true && simbolo == true && this.length){
            return true;
        } else{
            return false;
        }
    }    


    get _legnth(){
        return this.length;
    }
    getlength(){
        return this.length;
    }
    get _password(){
        return this.password;
    }
    getpassword(){
        return this.password
    }
}

p1 = new Password("Misadd3#");

console.log(p1.isStrong(new Password()));
console.log(this.password);

