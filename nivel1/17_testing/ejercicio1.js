/**
 Prueba y error 🚀
Desafío
Copiá el código a continuación y correlo en tu computadora:

Esta prueba fallará. En este caso el test está bien, no tiene errores. Simplemente le pasa un texto con 7 palabras y el resultado es distinto a lo esperado.

Debugueá la función contarPalabras() usando console.log() para entender que es lo que está pasando en cada paso y corregirlo.

El objetivo del ejercicio es arreglar la función contarPalabras() ya que el test nos indica que no está funcionando correctamente.

Pista: Trim
 */

function contarPalabras(texto) {
  // Dividimos el texto en palabras utilizando espacios en blanco como delimitadores
  const palabras = texto.trim().split(" ");
  // Devolvemos la cantidad de palabras
  return palabras.length;
}

// Función de prueba
function testContarPalabras() {
  const texto = " Esta es una prueba de contar palabras ";

  const resultado = contarPalabras(texto);

  // Verificamos los resultados
  if (resultado === 7) {
    console.log("testContarPalabras funciona correctamente");
  } else {
    console.error("testContarPalabras falló en la prueba");
    console.error("Se esperaban 7 palabras y se obtuvo", resultado);
  }
}

testContarPalabras();
