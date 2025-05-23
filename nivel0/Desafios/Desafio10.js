/*

Tipo dinámico
Desafío
En base a este código:

Que valor tienen primerTipo y segundoTipo ¿Por qué?
*/


let variableSinValor;
const primerTipo = typeof variableSinValor;

variableSinValor = null;
const segundoTipo = typeof variableSinValor;

console.log(primerTipo, segundoTipo); // undefined object
