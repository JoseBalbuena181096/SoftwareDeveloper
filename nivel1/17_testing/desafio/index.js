/**

Tu primer test
Desafío
Para este desafío, les proponemos trabajar con la metodología TDD. A partir de un test, deben crear una función que cuente cuántas palabras tiene el string que reciba y además devuelve cuantas palabras comienzan con la letra A. La función debe devolver un objeto con dos miembros:


Para esto deben copiar el código de https://gist.github.com/marcedev-ap/f735b6f34e71ac16d23d90d4c154572d y hacerlo funcionar.

Para que el desafío sea superado, el test tiene que validar como correcta la función que ustedes creen.


*/

function cuentaPalabras(texto) {
  let cantidadDePalabras = 0;
  let palabrasConA = 0;

  let arrayWords = texto.trim().split(" ");
  cantidadDePalabras = arrayWords.length;
  palabrasConA = arrayWords.filter((word) => word.startsWith("a")).length;
  return { cantidadDePalabras, palabrasConA };
}

// no modificar esta funcion
function testCuentaPalabras() {
  const texto =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste temporibus non, eligendi harum adipisci eos provident quaerat eveniet illo placeat distinctio omnis pariatur maiores et voluptates perferendis laborum quam facere.";
  const resultado = cuentaPalabras(texto);
  if (resultado.cantidadDePalabras == 30 && resultado.palabrasConA == 3) {
    console.log("testCuentaPalabras passed");
  } else {
    throw "testCuentaPalabras falló";
  }
}

function main() {
  testCuentaPalabras();
}

main();
