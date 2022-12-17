// ------------------------ FUNCIONES ---------------------------------------
function miFuncion(a,b){
    console.log('SUMA ES: ' + (a+b));
}

miFuncion(2,4);

// -------------------- FUNCIONES QUE RETORNAN UN VALOR ------------------
function miFuncion2(c,d){
    return (c + d);
   
}
let result=miFuncion2(5,4);
console.log(result);

// -----DECLARACION DE UNA FUNCION TIPOS EXPRESIÓN-----------------
let x=function(x,y){return (x+y)};
result =x(2,2);
console.log(result);

// ----------------------- FUNCIONES TIPOS SELFT -------------------------
(function(a,b){
    console.log("EJECUTNADO LA FUNCION " + (a+b));
})(3,4);

// --------------------- FUNCIONES COMO OBJETOS--------------------
function miFuncion3(a,b){
    console.log(arguments.length);
    return a + b;
}
miFuncion3(8,8);

var texto=miFuncion3.toString();
console.log(texto);


// --------------------- FUNCIONES DE TIPO FLECHAS ------------------------
const sumarFuncionFlecha=(a,b) => a+b;
let rest = sumarFuncionFlecha(3,3);
console.log(rest);

// ---------------ARGUMENTOS Y PARAMETROS EN FUNCIONES -----------------------------
let param = function(a=3,b=8){
    console.log(arguments[0]);
    console.log(arguments[1]);
    return (a+b)
};
let respu=param();
console.log(respu);

respu=param(2,2);
console.log(respu);

let parametros2=function(a,b){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a + b + arguments[2];
}
let resultado1=parametros2(2,3,4);
console.log(resultado1);

// ------------------- SUMAR ARGUMENTOS DE UNA FUNCION ---------------------
function sumarTodo(){
    let suma = 0;
    for(let i=0;i< arguments.length;i++){
        arguments[i];
        suma += arguments[i];
    }
    return suma;
}
let resultado2 = sumarTodo(5,4,13,10,9);
console.log(resultado2);

//----------------------------------  REFERENCIAS EN FUNCIONES ------------------------------------
const persona={
    nombre:'Willi',
    apelldio:'Gomez'
}
function cambiarinfo(persona){
    persona.nombre='Carlos';

}
cambiarinfo(persona);
console.log(persona);