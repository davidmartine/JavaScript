class Persona{

    static contadorPersona=0;
    constructor(nombre,apellido,edad){
        this._idPersona=++Persona.contadorPersona;
        this._nombre=nombre;
        this._apellido=apellido;
        this._edad=edad;
    }
    get idPersona(){
        return this._idPersona;
    }
    get nombre(){
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }
    get emial(){
        return this.edad;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    set apellido(apellido){
        this._apellido=apellido;
    }
    set edad(edad){
        this._edad=edad;
    }
    toString(){
        return `
        ${this.idPersona} 
        ${this._nombre} 
        ${this._apellido} 
        ${this._edad}`;
    }
}

class Empleado extends Persona{
    static contadorEmplados=0;

    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad);
        this._idEmpledo=++Empleado.contadorEmplados;
        this._sueldo=sueldo;
    }
    get idEmpleado(){
        return this._idEmpledo;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo=sueldo;
    }
    toString(){
        return `
                ${super.toString()} 
                ${this._idEmpledo} 
                ${this._sueldo}`;
    }
}

class Cliente extends Persona{
    static contadorCliente=0;

    constructor(nombre,apellido,edad,fechaRegistro){
        super(nombre,apellido,edad);
        this._idClientes=++Cliente.contadorCliente;
        this._fechaRegistro=fechaRegistro;
    }
    get idCliente(){
        return this._idClientes;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro=fechaRegistro;
    }
    toString(){
        return `
                ${super.toString()} 
                ${this._idClientes} 
                ${this._fechaRegistro}`;
    }

}

let persona=new Persona('juand','valdes',28);
console.log(persona.toString());
let empleado=new Empleado('damaris','lopez',28,2000000);
console.log(empleado.toString());
let cliente=new Cliente('dani','lopez',30,new Date());
console.log(cliente.toString());
