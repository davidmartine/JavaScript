class DispositivoEntrada{

    constructor(tipoEntrada,marca){
        this._tipoEntrada=tipoEntrada;
        this._marca=marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada=tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca=marca;
    }

}

class Raton extends DispositivoEntrada{

    static contadorRatones=0;
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idRaton=++Raton.contadorRatones;

    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return `Raton: ${this._idRaton}, TipoEntrada: ${this._tipoEntrada} Marca: ${this._marca}`;
    }
}

class Teclado extends DispositivoEntrada{

    static contadorTeclado=0;
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idTeclado=++Teclado.contadorTeclado;
    }
    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `Teclado: ${this._idTeclado}, TipoEntrada: ${this._tipoEntrada}, Marca ${this._marca}`;
    }
}

class Monitor{

    static contadorMonitores=0;

    constructor(marca,tamano){
        this._idMonitor=++Monitor.contadorMonitores;
        this._marca=marca;
        this._tamano=tamano;
    }
    get idMonitor(){
       return this._idMonitor;
    }
    toString(){
        return `Monitor: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamano}`;
    }
}

class Computadora{

    static contadorComputador=0;
    constructor(nombre,monitor,raton,teclado){
        this._idComputador=++Computadora.contadorComputador;
        this._nombre=nombre;
        this._monitor=monitor;
        this._raton=raton;
        this._teclado=teclado;
    }
    toString(){
        return `Computadora: ${this._idComputador}: ${this._nombre}: \n ${this._monitor}: \n ${this._raton}: \n ${this._teclado}`;
    }
}

class Orden{

    static contadorOrden=0;

    constructor(){
        this._idOdenes=++Orden.contadorOrdenes;
        this._computadores=[];

    }
    get idOrden(){
        return this._idOdenes;
    }
    agregarComputadora(computadora){
        this._computadores.push(computadora);
    }
    mostrarOrden(){
        let computadorasOrden='';
        for(let computadora of this._computadores){
            computadorasOrden += `\n${computadora}`;
        }
        console.log(`Orden: ${this._idOdenes}, Computadores: ${computadorasOrden}`);
    }
}

let raton1 = new Raton('USB','HP');
console.log(raton1.toString());
let raton2= new Raton('BLUETOOTH','DELL');
console.log(raton2.toString());
let teclado1= new Teclado('USB','HP');
console.log(teclado1.toString());
let monitor1=new Monitor('HP',15);
console.log(monitor1.toString());
let monitor2=new Monitor('SAMSUNG',22);
console.log(monitor2.toString());
let computador1= new Computadora('HP',monitor1,raton1,teclado1);
console.log(computador1.toString());
let orden1 = new Orden();
orden1.agregarComputadora(computador1);
orden1.mostrarOrden();