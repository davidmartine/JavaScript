class Producto{

    static contadorProducto=0;

    constructor(nombre,precio){
        this._idProducto=++Producto.contadorProducto;
        this._nombre=nombre;
        this._precio=precio;


    }
    get idProducto(){
        return this._idProducto;
    }
    get nobre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    get precio(){
        return  this._precio;
    }
    set precio(precio){
        this._precio=precio;
    }
    toString(){
        return `
        ${this._idProducto} 
        ${this._nombre} 
        ${'$' + this._precio}`
    }
}

class Orden{

    static contadorOrdenes=0;
    static get MAX_PRODUCTOR(){
        return 5;
    }
    constructor(){
        this._idOrden=++Orden.contadorOrdenes;
        this._productos=[];
        this._contadorProductosAgregados=0;
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarProducto(producto){
        if(this._productos.length<Orden.MAX_PRODUCTOR){
            this._productos.push(producto);
           // this._productos[this._contadorProductosAgregados++]=producto;
        }
        else{
            console.log('NO SE PUEDEN AGREGAR MAS PRODUCTOS');
        }
    }
    calcularTotal(){
        let totalVenta=0;
        for(let producto of this._productos){
            totalVenta += producto.precio;

        }
        return totalVenta;
    }
    mostrarOrden(){
        let productosOrden='';
        for(let producto of this._productos){
            productosOrden += producto.toString() + ' ';
        }
        console.log(`Orden: ${this._idOrden} Total: ${this.calcularTotal()},
        Productos: ${productosOrden}`);
    }


}

let producto1= new Producto('pantalon',20000);
let producto2= new Producto('camisa',30000);
let ordern1= new Orden();
ordern1.agregarProducto(producto1);
ordern1.agregarProducto(producto2);
ordern1.mostrarOrden();


