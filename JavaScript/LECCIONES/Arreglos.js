// ----------------------------- ARREGLOS -----------------------------
//let autos= new Array('BMW','AUDI','MERCEDEZ BENZ','VOLVO');
const autos = ['MBW','AUDI','MERCEDEZ BENZ'];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);
for(let i=0;i<autos.length;i++){
    console.log(i + ' ' +  autos[i]);
}

autos[1]='VOLVO'
console.log(autos[1]);

autos.push('RENAULT');
console.log(autos); 
console.log(autos.length);

autos[autos.length]='TESLA';
console.log(autos);
console.log(autos.length);



