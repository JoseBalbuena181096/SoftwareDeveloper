/* 
Tranformá esta función a una arrow function
Desafío
Reescribe esta función en formato arrow function
*/

function obtenerNumerosPares(numeros) {
  const numerosPares = [];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      numerosPares.push(numeros[i]);
    }
  }
  return numerosPares;
}

const obtenerNumerosParesArrow = (numeros) =>
  numeros.filter((num) => num % 2 === 0);

const numeros = [1, 2, 3, 4, 5, 6];
console.log(obtenerNumerosPares(numeros));
console.log(obtenerNumerosParesArrow(numeros));
