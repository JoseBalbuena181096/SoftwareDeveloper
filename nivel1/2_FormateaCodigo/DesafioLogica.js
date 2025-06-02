/*
Encuentra el error
Desafío
El objetivo de este ejercicio es entender como se usan algunas herramientas disponibles para investigar sobre errores, en este caso vamos a probar perplexity.

Para esto vamos a pedirle a perplexity que evalúe el siguiente bloque de código que contiene un sutil error de lógica:


* */

function getMaximum(numbers) {
  let max = numbers[0];
  if (numbers.length === 0) return undefined;
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

const testNumbers = [-5, -2, -8, -1];
const maximum = getMaximum(testNumbers);
console.log("Maximum value:", maximum);
