const readline = require("readline");
const questions = require("./questions");
const playTrivia = require("./game");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let score = 0;
let index = 0;

console.log("¡Bienvenido a la Trivia de Node.js!");
playTrivia(questions, index, score, rl);
