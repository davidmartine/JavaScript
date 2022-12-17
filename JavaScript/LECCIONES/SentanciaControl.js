// ------------------------------ SENTENCIAS DE CONTROL -------------------------------------
let condicion = true;
let result = condicion==true ? "Condicion Verdadera" : "Condicion Falsa";
console.log("el resultado es: " + result);

//
let numero =10;
if(numero ===2){
    console.log("Numero dos");
}
else if (numero ===1){
    console.log("numero uno")
}
else if(numero ===3){
    console.log("numero tres")
}
else if(numero ===5){
    console.log("numero cinco");
}
else{
    console.log("numero no encontrado");
}

//-----------------EJERCICIO ESTACIONES------------------------------------
let mes=7, estacion;
if(mes ===1 || mes ===2 || mes===3){
    estacion="Invierno";
}   
else if(mes ===4 || mes ===5 || mes ===6){
    estacion="Primavera";
}
else if(mes ===7 || mes ===8 || mes===9){
    estacion="Verano";
   
}
else{
    estacion="Valor no encontrado";
   
}
console.log(estacion);
// --------------CALCULANDO HORA DEL DÍA -----------------------------
let horaDia = 14;
let mensaje;

if(horaDia >=6 && horaDia <=11){
    mensaje="Buenos Días";
    console.log(mensaje);
}
else if(horaDia >=12 && horaDia <=18){
    mensaje="Buenas Tardes";
    console.log(mensaje);
}
else if(horaDia >= 19 && horaDia <=24){
    mensaje="Buenas Noches";
    console.log(mensaje);
}
else{
    mensaje="Durmiendo";
    console.log(mensaje);
}

//-------------- SENTENCIA  SWITCH  ---------------------------------
let snumero=4;
let sresultado;
switch(snumero){
    case 1:
        sresultado="Numero uno";
        break;
    case 2:
        sresultado="Numero Dos";
        break;
    case 3:
        sresultado="Numero Tres";
        break;
    case 4:
        sresultado="Numero Cuatro";
        break;
    default:
        sresultado="Numero no Encontrado";
}
console.log(snumero);