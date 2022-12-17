const ingresos = [new Ingreso("Salario", 3000), new Ingreso("Prestamos", 2000), new Ingreso("Bono",1000)];

const egresos = [
  new Egreso("Arriendo Casa", 500),
  new Egreso("Servicios", 2000),
];

let CargarApp = () => {
  CargarCabecero();
  CargarIngresos();
  CargarEgresos();
};
let CargarCabecero = () => {
  let presupuesto = TotalIngreso() - TotalEgreso();
  let porcentajeegreso = TotalEgreso() / TotalIngreso();
  document.getElementById("presupuesto").innerHTML = FormatoMoneda(presupuesto);
  document.getElementById("porcentaje").innerHTML =
    FormatoPorcentaje(porcentajeegreso);
  document.getElementById("ingresos").innerHTML = FormatoMoneda(TotalIngreso());
  document.getElementById("egresos").innerHTML = FormatoMoneda(TotalEgreso());
};
let TotalIngreso = () => {
  let totalingreso = 0;
  for (let ingreso of ingresos) {
    totalingreso += ingreso.valor;
  }
  return totalingreso;
};
let TotalEgreso = () => {
  let totalegreso = 0;
  for (let egreso of egresos) {
    totalegreso += egreso.valor;
  }
  return totalegreso;
};

const FormatoMoneda = (valor) => {
  return valor.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
};
const FormatoPorcentaje = (valor) => {
  return valor.toLocaleString("en-US", {
    style: "percent",
    minimumFractionDigits: 2,
  });
};

const CargarIngresos = () => {
  let ingresosHTML = "";
  for (let ingreso of ingresos) {
    ingresosHTML += CrearIngresoHTML(ingreso);
  }
  document.getElementById("lista-ingresos").innerHTML = ingresosHTML;
}
const CrearIngresoHTML = (ingreso) => {
  let ingresoHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">
        ${ingreso.descripcion}
    </div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">
           + ${FormatoMoneda(ingreso.valor)}
        </div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
                <ion-icon name="close-circle-outline" onclick="EliminarIngreso(${ingreso.id})"></ion-icon>
            </button>
        </div>
    </div>
</div>
    `;
    return ingresoHTML;
}
const EliminarIngreso=(id)=>{
    let indiceeliminar = ingresos.findIndex(ingreso=> ingreso.id === id);
    ingresos.splice(indiceeliminar,1);
    CargarCabecero();
    CargarIngresos();
 }
const CargarEgresos=()=>{
    let egresosHTML ="";
    for(let egreso of egresos){
        egresosHTML += CrearEgresosHTML(egreso);
    }
    document.getElementById("lista-egresos").innerHTML = egresosHTML;
}
const CrearEgresosHTML=(egreso)=>{
    let egresoHTML=`
    <div class="elemento limpiarEstilos">
                    <div class="elemento_descripcion">
                        ${egreso.descripcion}
                    </div>
                    <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">
                            - ${FormatoMoneda(egreso.valor)}
                        </div>
                        <div class="elemento_porcentaje">
                            ${FormatoPorcentaje(egreso.valor/TotalEgreso())}
                        </div>
                        <div class="elemento_eliminar">
                            <button class="elemento_eliminar--btn">
                                <ion-icon name="close-circle-outline" onclick="EliminarEgresos(${egreso.id})"></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>
    `;
    return egresoHTML;
}
const EliminarEgresos=(id)=>{
    let indiceeliminar = egresos.findIndex(egreso=>egreso.id ===id)
    egresos.splice(indiceeliminar,1);
    CargarCabecero();
    CargarEgresos();
}
const AgregarDato=()=>{
    let form = document.forms["forms"];
    let tipo = form["tipo"];
    let descripcion=form["descripcion"];
    let valor = form["valor"];

    if(descripcion.value !="" && valor.value != ""){
        if(tipo.value ==="ingreso"){
            ingresos.push(new Ingreso(descripcion.value,Number(valor.value)));
            CargarCabecero();
            CargarIngresos();
        }
        else if(tipo.value ==="egreso"){
            egresos.push(new Egreso(descripcion.value,Number(valor.value)));
            CargarCabecero();
            CargarEgresos();
        }
    }
}