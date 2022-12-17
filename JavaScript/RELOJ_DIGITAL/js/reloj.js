const MostraReloj=()=>{
    let fecha=new Date();
    let hora=FormatoHora(fecha.getHours());
    let minutos=FormatoHora(fecha.getMinutes());
    let segundos=FormatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML=`${hora}:${minutos}:${segundos}`;

    const meses=['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
    const dias =['Dom','Lun','Mar','Mie','Jue','Vie','Sab'];
    let diasemana=dias[fecha.getDay()];
    let dia=fecha.getDate();
    let mes=meses[fecha.getMonth()];
    let fechatexto=`${diasemana},${dia} ${mes}`;
    document.getElementById('fecha').innerHTML=fechatexto;
    document.getElementById('contenedor').classList.toggle('animar');
}
const FormatoHora=(tiempo)=>{
    if(tiempo < 10){
        tiempo ='0' + tiempo;
        
    }
    return tiempo;
}
setInterval(MostraReloj,1000);