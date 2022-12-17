let contador=0;

while(contador <3){
    console.log(contador);
    contador++;
}

//----------------------------- DO WHILE -------------
let num=5
do{
    console.log(num);
    num ++;
}
while(num <10);

//---------------- CICLO FOR -----------------------------
for(let conta=0;conta<3;conta++){
    console.log(conta);
}

for(let conta1=0;conta1<=10;conta1++){
    if(conta1 %2==0){
        console.log(conta1);
        break;
    }
}
for(let conta2=0;conta2<=10;conta2++){
    if(conta2 %2==1){
        console.log(conta2);
        continue;
    }
    console.log(conta2);
}
