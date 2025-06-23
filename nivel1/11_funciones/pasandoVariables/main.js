var numero = 4;

function otraFuncion() {
  const PALABRA = "hola";
  console.log("otra funcion " + numero);
  console.log("otra funcion " + variableMain);
}

function main() {
  let variableMain = 5;
  console.log("soy main " + numero);
  otraFuncion();
}

main();

/*
La importancia del scope es que pertimte asilar cada una de las variables en su propio espacio
dentro de la funcion yque este sea accesible solo dentro de la funcion, porlo que permite modularizar 
la aplicacion y que cada funcion tenga su propio scope y funcionalidad especifica.
*/
