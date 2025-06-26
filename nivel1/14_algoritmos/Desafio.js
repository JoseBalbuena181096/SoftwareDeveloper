/*

Ordernar el array
Desafío
Para este desafío, les proponemos que creen un array con 40 números (pueden ser generados por Math.random()) y los ordenen de menor a mayor, a través de una función. Para eso, tienen que investigar sobre algoritmos de ordenamiento.


 */

function ordernarElArray(arrayOriginal) {
  // usá el método de burbujeo
  let n = arrayOriginal.length;
  for (i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arrayOriginal[i] > arrayOriginal[j]) {
        let temp = arrayOriginal[i];
        arrayOriginal[i] = arrayOriginal[j];
        arrayOriginal[j] = temp;
      }
    }
  }
  return arrayOriginal;
}

// creá tu array de 40 números aleatorios
let arrayOriginal = [];
for (let i = 0; i < 40; i++) {
  arrayOriginal.push(Math.round(Math.random() * 100));
}
// usá función ordenarElArray para ordenar tu nuevo array
console.log(ordernarElArray(arrayOriginal));
