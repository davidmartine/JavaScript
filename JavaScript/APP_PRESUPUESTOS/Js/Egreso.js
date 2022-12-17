class Egreso extends Dato{

    static contadoregresos=0;

    constructor(descripcion,valor){
        super(descripcion,valor);
        this._id = ++Egreso.contadoregresos;
    }
    get id(){
        return this._id;
    }
}