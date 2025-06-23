/*
Dividir mazo
Desafío
En este caso debemos resolver la lógica inversa al ejercicio anterior. En este caso tenemos un array de cartas que sabemos que están ordenadas y corresponden a las 52 cartas del mazo de poker. La misión es dividir esta mazo en 4 arrays, uno por cada palo, y guardar estos arrays en un objeto que tendrá el mazo por palos.

En base a este código base, charla con Lisa para asegurarte que entendés la consigna y tirale algunas ideas para que te ayude. Es normal necesitar ayuda en estos primeros problemas más complejos, con la práctica te vas a acostumbrar.

*/

const mazoCompleto = [
  "A de ♥️",
  "2 de ♥️",
  "3 de ♥️",
  "4 de ♥️",
  "5 de ♥️",
  "6 de ♥️",
  "7 de ♥️",
  "8 de ♥️",
  "9 de ♥️",
  "10 de ♥️",
  "J de ♥️",
  "Q de ♥️",
  "K de ♥️",
  "A de ♦️",
  "2 de ♦️",
  "3 de ♦️",
  "4 de ♦️",
  "5 de ♦️",
  "6 de ♦️",
  "7 de ♦️",
  "8 de ♦️",
  "9 de ♦️",
  "10 de ♦️",
  "J de ♦️",
  "Q de ♦️",
  "K de ♦️",
  "A de ♣️",
  "2 de ♣️",
  "3 de ♣️",
  "4 de ♣️",
  "5 de ♣️",
  "6 de ♣️",
  "7 de ♣️",
  "8 de ♣️",
  "9 de ♣️",
  "10 de ♣️",
  "J de ♣️",
  "Q de ♣️",
  "K de ♣️",
  "A de ♠️",
  "2 de ♠️",
  "3 de ♠️",
  "4 de ♠️",
  "5 de ♠️",
  "6 de ♠️",
  "7 de ♠️",
  "8 de ♠️",
  "9 de ♠️",
  "10 de ♠️",
  "J de ♠️",
  "Q de ♠️",
  "K de ♠️",
];

// esto nos indica en que orden están las cartas en el mazo completo
const palos = ["corazones", "diamantes", "treboles", "picas"];

let mazo = new Array(52);
let index = 0;

const mazoPorPalo = {};

for (let i = 0; i < palos.length; i++) {
  const nombreDelPalo = palos[i];
  mazoPorPalo[nombreDelPalo] = [];

  // Acá tenés que usar otro for que vaya del 0 al 13
  // para recorrer la porción del mazoCompleto correspondiente
  // combinando i con el otro iterador vas a tener
  // la posición del array para obtener la carta
  for (let j = i * 13; j < i * 13 + 13; j++) {
    mazoPorPalo[nombreDelPalo].push(mazoCompleto[j]);
  }
}

console.log(mazoPorPalo);
