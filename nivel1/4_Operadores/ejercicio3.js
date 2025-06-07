/*
Predicciones
Desafío
Dominar el uso de operadores requiere mucha práctica resolviendo problemas más complejos que veremos más adelante. Por ahora practiquemos nuestra comprensión sobre estos operadores. En el siguiente código base vas a ver una serie de operaciones y debajo, en un comentario, un espacio para escribir cual es tu predicción sobre el resultado de esa linea de código.

Copiá el código en tu compu y completá todas las predicciones. Cuando termines chequealas con Lisa.


*/

// Valores iniciales

const base = 9;
let multiplicador = 3;
const texto = "JavaScript";
const booleano = true;
const modulo = 5;
let acumulador = 5;

// ------------------------------------
// Operaciones

const suma = base + multiplicador;
// Predicción: suma va a ser 12

const resta = base + suma - acumulador;
// Predicción:
// resta va a ser 16 (base es 9 + suma que es 12 - acumulador (5) )

// De acá en más, escribí tu predicción debajo
// de cada operación y compartí todas tus predicciones
// con Lisa. Intenta hacerlo mentalmente para
// practicar tu lectura de código.

let frase = texto;
frase += " " + "es genial";
// frase va a ser ["JavaScript es genial"]

const negacion = !booleano;
// negación va a valer [false]

const dobleNegacion = !!negacion;
// dobleNegacion va a valer [false]

multiplicador *= 3;
// [9]

const division = (base * 10) / multiplicador;
// [10]

const residuo = base % modulo;
// [4]

const esPar = multiplicador % 2 === 0;
// [false]

const comparacion = acumulador == "5";
// [true]

const comparacionEstricta = acumulador === "5";
// [false]

acumulador += base;
// [14]

const mayor = acumulador > base;
// [true]

const menorOigual = multiplicador <= 30;
// [true]

const operadorOR = booleano || false;
// [true]

const operadorAND = booleano && base > 5;
// [true]

const combinado = base * multiplicador - modulo;
// [76]
