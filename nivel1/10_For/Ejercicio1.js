/*
Mazo de cartas
Desafío
El objetivo de este ejercicio es crear un array que represente al mazo de cartas de poker. Para eso tendrás dos arrays base (palos y valores) y combinando dos for vas a generar un array final de 52 posiciones con todas las cartas. Al final deberías ver lo siguiente en la terminal.
> node cartas.js 
[
  'A de ♥️',  '2 de ♥️',  '3 de ♥️',  '4 de ♥️',
  '5 de ♥️',  '6 de ♥️',  '7 de ♥️',  '8 de ♥️',
  '9 de ♥️',  '10 de ♥️', 'J de ♥️',  'Q de ♥️',
  'K de ♥️',  'A de ♦️',  '2 de ♦️',  '3 de ♦️',
  '4 de ♦️',  '5 de ♦️',  '6 de ♦️',  '7 de ♦️',
  '8 de ♦️',  '9 de ♦️',  '10 de ♦️', 'J de ♦️',
  'Q de ♦️',  'K de ♦️',  'A de ♣️',  '2 de ♣️',
  '3 de ♣️',  '4 de ♣️',  '5 de ♣️',  '6 de ♣️',
  '7 de ♣️',  '8 de ♣️',  '9 de ♣️',  '10 de ♣️',
  'J de ♣️',  'Q de ♣️',  'K de ♣️',  'A de ♠️',
  '2 de ♠️',  '3 de ♠️',  '4 de ♠️',  '5 de ♠️',
  '6 de ♠️',  '7 de ♠️',  '8 de ♠️',  '9 de ♠️',
  '10 de ♠️', 'J de ♠️',  'Q de ♠️',  'K de ♠️'
]

Código base
Copia el siguiente código base y sigue los comentarios para ir completando la lógica y cumplir la misión.
*/

const palos = ["♥️", "♦️", "♣️", "♠️"];
const valores = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

const mazo = [];
let indiceGeneral = 0;

for (let i = 0; i < palos.length; i++) {
  const palo = palos[i];

  // Acá tenés que usar otro for para recorrer
  // los valores y generar cada carta

  for (let j = 0; j < valores.length; j++) {
    const valor = valores[j];
    const carta = `${valor} de ${palo}`;
    mazo[indiceGeneral] = carta;
    indiceGeneral++;
  }
}

console.log(mazo);
