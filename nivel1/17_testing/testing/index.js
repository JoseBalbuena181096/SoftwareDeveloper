function sumar(numero1, numero2, numero3) {
  numero3 = numero3 || 5;
  return numero1 + numero2 + numero3;
}

// Testeo
function testSumaDosNumeros() {
  const resultado = sumar(456, 2);
  const esperado = 458;

  if (resultado !== esperado) {
    console.log("Test failed!");
    throw new Error("Sumar dos numeros Test failed!");
  } else {
    console.log("Sumar dos numeros Test passed!");
  }
}

function main() {
  testSumaDosNumeros();
}

main();
