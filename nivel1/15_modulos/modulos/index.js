const pelis = require("./pelis");

function main() {
  const buscarPelis = pelis.buscarPelis();
  const ordenarPelis = pelis.ordenarPelis();
  console.log(buscarPelis);
  console.log(ordenarPelis);
  console.log("soy el main");
}

main();
