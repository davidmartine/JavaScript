function sumar(){
    console.log('aqui');
   // const forma = document.getElementById('forma');
    let operandoA=document.getElementById('operandoA');
    let operandoB=document.getElementById('OperadorB');
    let resultado =parseInt(operandoA.value) +parseInt(operandoB.value);
    if(isNaN(resultado)){
        resultado='LA OPERACIÓN NO INCLUYE NUMEROS';
    }
    document.getElementById('resultado').innerHTML=`Resultado: ${resultado}`;
    console.log(resultado);
    
}