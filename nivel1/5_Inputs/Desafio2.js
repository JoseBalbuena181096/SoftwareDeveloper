/*

Inspector de objetos
Desafío
El objetivo de este ejercicio es crear una pequeña aplicación que nos permita examinar un dato específico sobre una película.

Vamos a enviar el nombre del dato que queremos obtener en forma de argumento desde la terminal.

En este caso la información de la película será la de Jurassic Park.

O sea que, si ejecuto el programa con el argumento "director", debería recibir como respuesta: "Steven Spielberg".

*/

const peli = {
  titulo: "Jurassic Park",
  sinopsis:
    "Un multimillonario construye un parque temático con dinosaurios clonados, pero todo sale mal cuando los dinosaurios escapan y aterrorizan a los visitantes.",
  añoEstreno: 1993,
  director: "Steven Spielberg",
  duracionMinutos: 127,
  calificacionIMDb: 8.1,
};

// process.argv[2] es el argumento enviado desde la terminal
const propiedadSeleccionada = process.argv[2];
console.log(propiedadSeleccionada);

/* 
    hasta acá tenes un objeto con los datos 
    de la película y un dato con el nombre
    de la propiedad a mostrar. 
  
    Recordá que para obtener una propiedad de un objeto
    utilizando un string, debes usar la sintaxis
  */

const valorPropiedad = peli[propiedadSeleccionada];
console.log(valorPropiedad);
