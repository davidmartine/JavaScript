class Persona{

    static contadorPersonas=0;

    email='validar emial';

    constructor(nombre,apellido){
        this._nombre=nombre;
        this._apellido=apellido;
        this._idpersona=Persona.contadorPersonas++; 
    }
    // ---------------- METODOS GET Y SET PARA CLASES ------------
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido=apellido;
    }
    nombre_completo(){
        return this._idpersona + ' ' + this._nombre + ' ' + this._apellido; 
    }
    //poliformismo(multiples casos en tiempo de ejecucion)
    //el metodo que se ejecuta depende si es una referencia de tipo padre o de tipo hijo
    toString(){
        return this.nombre_completo();
    }
    static saludar(){
        console.log('Hola Mundo static');
    }
    static saludar2(persona){
        console.log(persona.nombre);
    }
    
}
let persona1=new Persona('juan','pablo');
console.log(persona1);

// ------------------- HERENCIA -----------------------------
class Emplado extends Persona{
    constructor(nombre,apellido,departamento){
        super(nombre,apellido);
        this._departamento=departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento=departamento;
    }
    // sobre escritura
    nombre_completo(){
        return super.nombre_completo() + ', ' + this._departamento;
    }
}

let person=new Persona('juandax','martinex');
console.log(person);

let empleado=new Emplado('jhon','mercuri','antioquia');
console.log(empleado);
console.log(empleado.nombre_completo());
console.log(empleado.toString());

Persona.saludar();
Persona.saludar2(person);
Emplado.saludar();
Emplado.saludar2(empleado);
console.log(Persona.contadorObjetosPersona);
console.log(Emplado.contadorObjetosPersona);
console.log(person.email);
console.log(person.toString());
console.log(empleado.toString());
let persona3=new Persona('daniel','doris');
console.log(persona3.toString());
console.log(Persona.contadorPersonas);