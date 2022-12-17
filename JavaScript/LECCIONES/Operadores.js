let a=3, b=2;
let z= a + b;
console.log('Resultado de la suma: ' + z);

z = a - b;
console.log("Resultado de la resta: "+ z);

z=a*b;
console.log("Resultado de la multiplicacion: " + z);

z=a/b;
console.log("Resultado de la division: " + z);

z=a%b;
console.log("Resultado de la operacion modulo(residuo): " + z);

z= a**b;
console.log("Resultado de exponente: "+ z);

let numero1=5, numero2=8;
let suma = numero1+numero2;
//INCREMENTE
//PRE-INCREMENTO
//PRE-INCREMENTO (EL OPERADOR ++ ANTES DE LA VARIABLE)
suma=++numero1;
console.log(numero1);
console.log(suma);

//POST-INCREMENTO (EL OPERADOR ++ DESPUES DE LA VARIABLE)
suma=numero2++;
console.log(numero2);
console.log(suma);

//DESCREMENTO
//PRE-DECREMENTO
suma=--numero1;
console.log(numero1);
console.log(suma);

//POST-DECREMENTO
suma=numero2--;
console.log(numero2);
console.log(suma);

//-----------------------------------------------------------------------------------------------
//PRECEDENCIA DE OPERADORES --------------------------------------------------------------------
let numero3=3,numero4=4,numero5=5;
let sumas=numero3*numero4+numero5;
console.log(sumas);

sumas=numero5+numero3*numero4;
console.log(sumas);

//OPERADORES DE ASINGACION
let onumero=1;
onumero+=4;
console.log(onumero);

onumero -=3;
console.log(onumero);

onumero *=4;
console.log(onumero);

onumero /=2;
console.log(onumero);

onumero %=2;
console.log(onumero);

//OPERADORES DE COMPARACION
let cnumero=3, cnumero2=5, cnumero3="3";

let cresultado= cnumero == cnumero2; // (==) se revisa el valor que sea igual sin importar el tipo
console.log(cresultado);

cresultado= cnumero === numero3; // (===) se revisa el valor que sea igual pero tambien que sea el mismo tipo
console.log(cresultado);


//OPERADOR DISTINTOS !=
cresultado = cnumero !=cnumero3; //  se revisa el valor que sea igual sin importar el tipo
console.log(cresultado);

cresultado = cnumero !==cnumero3; //se revisa el valor que sea igual pero tambien que sea el mismo tipo
console.log(cresultado);

cresultado= cnumero < cnumero2;
console.log(cresultado);

cresultado = cnumero <= cnumero2;
console.log(cresultado);

cresultado= cnumero2 > cnumero;
console.log(cresultado);

cresultado=cnumero >=cnumero3;
console.log(cresultado);

//----------------EJEMPLO DE NUMEROS PARES-----------------//
let a1 =7;
if(a1 %2==0){
    console.log("es numero par");
}
else{
    console.log("es numero impar");
}

//----------EJEMPLO NUMERO 2 -----------------
let edad = 20; adulto=18;
if(edad >= adulto){
    console.log("es mayor de edad");
}
else{
    console.log("no es mayor de edad");
}

// OPERADORES LOGICOS 
let operador = 5,operadorMin=0,operadorMax=10;
if(operador >=operadorMin && operador <= operadorMax){
    console.log("dentro del rango");
}
else{
    console("fuera de rango")
}
// OPERADOR OR  --------------EJEMPLO-------------------------
let vacaciones=false, diaDescanso=true;
if(vacaciones || diaDescanso){
    console.log("puedes asistir al juego");
}
else{
    console.log("no puede asistir al juego");
}


//OPERADOR TERNARIO
let resultadot=(31>40) ? "VERDADERO" : "FALSO";
console.log(resultadot);

let numeroPar=9;
resultadot=(numeroPar %2==0) ? "NUMERO ES PAR" : "NUMERO IMPAR";
console.log(resultadot);

//CONVERTIR STRING A NUMERO
let miNumero="10";
let edadMia=Number(miNumero);
let votacion = (edadMia >=18) ? "TIENE PARMISO PARA VOTAR" : "ES MUY JOVEN PARA VOTAR";
console.log(votacion);

//COMPROBAR SI EL VARLOR DE UNA VARIABLE ES UN NUMERO
let pruebanumero = "18x";
let validador = Number(pruebanumero);
console.log(validador);
if(isNaN(validador)){
    console.log("no es numero");
}
else{
    console.log("es un numero");
}

