
/* 
- Crea una clase “Persona” definida a través de sus características físicas, y haz que se pueda calcular el IMC (índice de mas corporal) de cualquier persona que se haya creado como un objeto de la clase.
- Añadir el atributo anyoNacimiento a la clase ”Persona” e implementar el método edad que tome como parámetro el año actual y calcule la edad de la persona.
- Añadir un método que se denomine mostrarTodos que muestre por consola cada una de los atributos de la clase “Persona” seguido por “:” y el valor del atributo.
- Añadir el atributo aficiones a la clase “Persona”, que es un array de strings, y crear un método denominado mostrarAficiones, que muestre por consola las aficiones de la persona.
- Añadir los métidos getters y setters para cada atributo de la clase “Persona”.
- Crear una clase que se llame ”Agenda” que tenga un atributo que sea un array de objetos de la clase “Persona”. Crear un método llamado printPersonas que imprima cada uno de los atributos de cada objeto persona.
*/

class Persona {
    constructor (altura, peso, anyoNacimiento, aficiones){
        this.altura = altura;
        this.peso = peso; 
        this.anyoNacimiento = anyoNacimiento;
        this.aficiones = aficiones;
    }

    Imc(){
        var imc = (this.peso) / (this.altura * this.altura) * 10000;
        return "Su IMC es: " + imc.toFixed(2); 
    }

    Edad(anyoActual){
        var anyoActual = 2020;
        return "Tiene " + (anyoActual - this.anyoNacimiento) + " años";
    }

    mostrarTodos(){
        console.log("Altura: " + this.altura + ", " + "Peso: " + this.peso + ", " + "anyoNacimiento: " + this.anyoNacimiento + ", " + "Aficiones: " + this.aficiones);
    }

    mostrarAficiones(){
        return "Sus aficiones son: " + this.aficiones;
        
    }

    get _altura(){
        return this.altura;
    }

    getaltura(){
        return this.altura;
    }

    set _altura(nueva_altura){
        this.altura = nueva_altura;
    }
    
    setaltura(nueva_altura){
        this.altura = nueva_altura;
    }
    get _peso(){
        return this.peso;
    }
    set _peso(nuevo_peso){
        this.peso = nuevo_peso;
    }

    getpeso(){
        return this.peso;
    }
    setpeso(nuevo_peso){
        this.peso = nuevo_peso;
    }

    get _anyoNacimiento(){
        return this.anyoNacimiento;
    }
    set _anyoNacimiento(nuevo_anyo_nacimiento){
        this.anyoNacimiento = nuevo_anyo_nacimiento;
    } 
    
    getanyoNacimiento(){
        return this.anyoNacimiento;
    }
    setanyoNacimiento(nuevo_anyo_nacimiento){
        this.anyoNacimiento = nuevo_anyo_nacimiento;
    }    

    get _aficiones(){
        return this.aficiones;
    }
    set _aficiones(nuevas_aficiones){
        this.Aficiones = nuevas_aficiones;
    }

    getaficiones(){
        return this.aficiones;
    }
    setaficiones(nuevas_aficiones){
        this.Aficiones = nuevas_aficiones;
    }


}


p1 = new Persona (170, 50, 1990, ["Pintar", " Escribir", " Leer"]);
p2 = new Persona (165, 55, 1980, [" Pintar", " Bailar", " Ir al cine"]);

console.log(p1.Imc(new Persona()));
console.log(p1.Edad(new Persona()));
console.log(p1.mostrarAficiones(new Persona()));
console.log(p2.mostrarTodos(new Persona()));

class Agenda {
    constructor(lista_personas){
        this.personas = lista_personas;
    }
    PrintPersonas(){
        for(var i=0; i<this.personas.length; i++){
           console.log(this.personas[i].mostrarTodos());
        }
    }
        
}

personas = new Agenda ([p1,p2]);
personas.PrintPersonas();


