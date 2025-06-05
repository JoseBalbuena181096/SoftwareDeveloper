/***
 * Los operadores logicos
 * Compara valores booleanos y devuelven un booleano
 * AND, OR, NOT
 */
const verdad = true && true; // AND, resultado: true
console.log("verdad -> true && true " + verdad);
const falso = true && false; // AND, resultado: false
console.log("falso -> true && false " + falso);
const oVerdad = true || false; // OR, resultado: true
console.log("oVerdad -> true || false " + oVerdad);
const noVerdad = !true; // NOT, resultado: false
console.log("noVerdad -> !true " + noVerdad);

// Ejemplo de uso Operadores Logicos
const precio = 1000;
const stock = 1;
const tengo = 0;
const credito = 1000;
const meAlcanza = precio <= tengo || precio <= credito;
const hayStock = stock > 0;
const puedoComprar = meAlcanza && hayStock;
if (puedoComprar) {
  console.log("puedoComprar  " + puedoComprar);
} else {
  console.log("no puedo comprar");
}
console.log("meAlcanza -> " + meAlcanza);
console.log("hayStock -> " + hayStock);
console.log("puedoComprar -> " + puedoComprar);

// || se conoce como pipe
