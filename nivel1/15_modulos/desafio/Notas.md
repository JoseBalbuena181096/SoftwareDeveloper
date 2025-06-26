# Modularizando

El objetivo de este ejercicio es usar módulos para separar nuestro código en partes que se ocupen de funciones específicas dentro de nuestro programa. De esta forma vamos a empezar a generar estructuras más sencillas de navegar y mantener.

Para esto debes copiar este código base y separarlo en 3 módulos.

```javascript
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  {
    question: "¿Cuál es la capital de Francia?",
    options: ["1. Berlín", "2. Madrid", "3. París", "4. Roma"],
    answer: 3,
  },
  {
    question: "¿Cuántos planetas hay en el sistema solar?",
    options: ["1. 7", "2. 8", "3. 9", "4. 10"],
    answer: 2,
  },
  {
    question: "¿En qué año llegó el hombre a la Luna?",
    options: ["1. 1965", "2. 1969", "3. 1972", "4. 1959"],
    answer: 2,
  },
];

let score = 0;
let index = 0;

function playTrivia() {
  if (index < questions.length) {
    const q = questions[index];
    console.log(`\nPregunta ${index + 1}: ${q.question}`);
    q.options.forEach((option) => console.log(option));

    rl.question("Tu respuesta (ingresa el número): ", (respuesta) => {
      if (parseInt(respuesta) === q.answer) {
        console.log("\x1b[32m¡Correcto!\x1b[0m");
        score++;
      } else {
        console.log("\x1b[31mIncorrecto.\x1b[0m");
      }
      index++;
      playTrivia(); // Llamar recursivamente para la siguiente pregunta
    });
  } else {
    console.log(`\nTu puntuación final es: ${score} de ${questions.length}`);
    rl.close();
  }
}

console.log("¡Bienvenido a la Trivia de Node.js!");
playTrivia();
```

## Módulos

./questions.js
Este módulo debe exportar el array de preguntas.

./game.js
Este módulo debe exportar la función playTrivia que contiene la lógica del juego. Además debes hacer una pequeña modificación para que playTrivia pueda recibir las preguntas por parámetro.

./index.js
Este archivo será el punto de entrada y debe importar los módulos anteriores para iniciar la trivia.

## Requisitos

Utiliza module.exports para exportar el array de preguntas y la función playTrivia.
Utiliza require en index.js para importar los módulos.
Asegúrate de que la trivia funcione exactamente igual que cuando estaba en un solo archivo.
Si querés compartir tu respuesta con Lisa, subí los 3 archivos a un gist para que lisa pueda examinar los 3 al mismo tiempo.
