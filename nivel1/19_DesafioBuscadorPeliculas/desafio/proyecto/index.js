const pelis = require("./pelis");

function main() {
  const userInput = process.argv;
  const result = pelis.selectOperation(userInput);
  console.log(result);
}

main();
