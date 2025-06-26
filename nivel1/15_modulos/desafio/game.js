function playTrivia(questions, index, score, rl) {
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
      playTrivia(questions, index, score, rl); // Llamar recursivamente para la siguiente pregunta
    });
  } else {
    console.log(`\nTu puntuación final es: ${score} de ${questions.length}`);
    rl.close();
  }
}

module.exports = playTrivia;
