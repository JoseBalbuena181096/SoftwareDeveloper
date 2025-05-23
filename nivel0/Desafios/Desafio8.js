/*

En base a este código:
¿Qué veremos en la terminal? 
¿Cuales son los valores de unaVariable, tipoDeUnaVariable y esUndefined?
 */

let unaVariable;

// guardamos el typeof de unaVariable en otra constante
const tipoDeUnaVariable = typeof unaVariable;
// preguntamos si el typeof de unaVariable es "undefined"
const esUndefined = tipoDeUnaVariable === "undefined"

console.log(unaVariable); // undefined
console.log(tipoDeUnaVariable); // undefined
console.log(esUndefined); // true