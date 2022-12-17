let mifuncion=function(){
    console.log('Saludos desde min funcion');
}

let FuncionFlecha=() =>{
    console.log('Saludos desde mi funcion flecha')
}

const registroObjeto=() =>({nombre: 'Danis',apellido: 'Lara'})
console.log(registroObjeto());

const funcionFlechaParametros=(mensaje) => console.log(mensaje);
funcionFlechaParametros('saludos con parametros');

const funcionConVariosParametros=(num1,num2)=>{
    let resultado=num1 + num2;
    return `Resultado: ${resultado}`;
}
console.log(funcionConVariosParametros(1,2));
