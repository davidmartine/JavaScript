var nombre = "Carlos";
console.log(typeof nombre);

var numero = 1000;
console.log(numero);

//Tipo de datos object
var objecto={
    nombre:"Juan",
    apellido:"Gonzalez",
    telefono: "4444444"
}

console.log(objecto);

nombre= 10.5;
console.log(typeof nombre);

//Tipo de datos boolean 
var bandera = true;
console.log(typeof bandera);

//Tipo de datos funtion
function mi_funcion(){

}
console.log(mi_funcion);
console.log(typeof mi_funcion);

//Tipo de dato symbool
var simbolo = Symbol("mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);

//Tipo clase es un function
class Persona{
    constructor(nombre,apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
}
console.log(Persona);
console.log(typeof Persona);

//Tipo undefined
var x;
console.log(x);
console.log(typeof x);
//null = ausencia de valor
var y = null;
console.log(y);
console.log(typeof y);

//Tipo arreglos
var autos = ["BMW","AUDI","VOLVO"];
console.log(autos);
console.log(typeof autos);

var z = "";
console.log(z);
console.log(typeof z);

var nombre2 = "David";
var apellido2 = "Gonzalez";
var nombres = nombre2 + " " + apellido2;
console.log(nombres);

//VARIABLES CON LET
let nombre3 = "Deiby";
console.log(nombre3);

//CONSTANTES
//OPERADOR AND (&&)---------------EJEMPLO-----------------------
const constante="Arboleda";
console.log(constante);

let d,e;
d=10, e=20;
let f = d+e;
console.log(f);


