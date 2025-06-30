/**

Calculadora
Antes de pasar a la consigna del desafío veamos una app
 de ejemplo que integra muchos de los conceptos que hemos visto. 
 Para eso, vamos a crear una calculadora de operaciones básicas desde cero.

La idea de esta demostración es que tengas una referencia para construir 
el desafío final. También, te va a servir para resolver dudas sobre cómo
combinar las herramientas que has aprendido a lo largo de los capítulos.

mock -> son ejemplos de datos que vamos a usar para probar nuestra app
 */

// Este modulo index.js tiene como propósito recibir
// el input por parte del usuario entenderlo y delegar responsabilidad
// de la operacion matematica a otro modulo

const operaciones = require("./operaciones");

function parsearTerminos(texto) {
  // console.log(texto);
  // mock
  const simbolos = texto.match(/[+\-*\/]/g);
  const numeros = texto.split(/[+\-*\/]/g).map(Number);

  console.log(simbolos);
  console.log(numeros);
  return {
    primerTermino: numeros[0],
    segundoTermino: numeros[1],
    operacion: simbolos[0],
  };
}

function ejecutarOperacion(objetoOperacion) {
  const mapa = {
    "+": operaciones.sumar,
    "-": operaciones.restar,
    "*": operaciones.multiplicar,
    "/": operaciones.dividir,
  };

  const simbolo = objetoOperacion.operacion;
  return mapa[simbolo](
    objetoOperacion.primerTermino,
    objetoOperacion.segundoTermino
  );
}

function main() {
  const operacionParseada = parsearTerminos(process.argv[2]);
  const resultado = ejecutarOperacion(operacionParseada);
  console.log(resultado);
}

main();
