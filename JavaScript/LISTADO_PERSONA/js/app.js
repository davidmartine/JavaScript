const personas = [
  new Persona("juan", "perez"),
  new Persona("carla", "lara"),
  //new Persona('maria','suarez')
];

function MostrarPersonas() {
  console.log("Mostrar Personas...");
  let texto = "";
  for (let persona of personas) {
    console.log(persona);
    texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
  }
  document.getElementById("personas").innerHTML = texto;
}

function AgregarPersona() {
  const forma = document.forms["forma"];
  let nombre = forma["nombre"];
  let apellido = forma["apellido"];
  if (nombre.value != "" && apellido.value != "") {
    let persona = new Persona(nombre.value, apellido.value);
    console.log(persona);
    personas.push(persona);
    MostrarPersonas();
  }
  else{
    console.log('No hay Informacion Nueva');
  }
}
