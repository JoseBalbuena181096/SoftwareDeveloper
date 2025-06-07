/*
Comparador de edades
Desafío
En base a este array de personas, completá el código para mostrar en la pantalla si la persona de la posición 0 es mayor a la persona en la posición 1.
*/

const personas = [
  {
    nombre: "Vicky",
    edad: 30,
  },
  {
    nombre: "Fede",
    edad: 25,
  },
];

// resultado debe ser true o false
const resultado = personas[0].edad > personas[1].edad;

console.log(
  `${personas[0].nombre} es mayor a ${personas[1].nombre}?`,
  resultado
);
