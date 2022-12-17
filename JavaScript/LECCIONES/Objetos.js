// ------------------- OBJETOS -----------------------------
let persona={
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@gmail.com',
    edad: 20,
    nombreCompleto:function(){
       return this.edad + ' ' + this.email;
    }
}
console.log(typeof persona)
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.nombreCompleto());
console.log(persona);

let persona2 = new Object();
persona2.nombre='Carlos';
persona2.direccion='cr 12 nro 45';
persona2.telefono=2324354;
console.log(persona2.nombre);
console.log(persona2.telefono);
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}

let personaArray=Object.values(persona);
console.log(personaArray)
let personaString=JSON.stringify(persona);
console.log(personaString);

// -----------------METODOS GET Y SET -----------------------------------
let metodogetset={
    nombre: 'Devis',
    apellido: 'Golf',
    barrio: 'Prado',
    direccion: 'Cl 105 Cr 22',
    get ubicacion(){
        return this.direccion + ' ' + this.barrio;
    },
    idioma: 'es',
    get lenguaje(){
        return this.idioma.toUpperCase();
    },
    set modilengu(lengu){
        this.idioma=lengu.toUpperCase();
    }
}
console.log(metodogetset.ubicacion)
console.log(metodogetset.lenguaje);

// ---------- SET -----------------
metodogetset.modilengu='eu';
console.log(metodogetset.idioma);

// --------------------- CONSTRUCTORES ---------------------
function PersonaC(nombre,apellido,barrio,direccion){
    this.nombre =nombre;
    this.apellido=apellido;
    this.barrio=barrio;
    this.direccion=direccion;
    this.nombrecom=function(){
        return this.apellido + ' ' + this.nombre;
    }
}
let padre = new PersonaC('Juan','Carlos','12','Cl 102');
console.log(padre);

let madre = new PersonaC('Maria','Blanca','13','Cr 23 Cl 02');
console.log(madre);
padre.nombre='Daniel'
console.log(padre);

// ------------------ UN METODO DENTRO DE UN CONSTRUCTOR -------------------------
console.log(padre.nombrecom());
console.log(madre.nombrecom());


let miObjeto1={}

// ------------ PROTOTYPE
PersonaC.prototype.tel=12232311212;
padre.tel=12232;
console.log(padre.tel);

madre.tel=22123;
console.log(madre.tel);

// ----------------------- METODO CALL ----------------
let metodocall={
    nombrem: 'Willi',
    apellido: 'Zapata',
    nomco:function(){
        return this.apellido + ' ' + this.nombrem;
    }
}
let metod={
    nombre2: 'daris',
    apell: 'marin'
}
console.log(metodocall.nomco());
console.log(metodocall.nomco.apply(metod));