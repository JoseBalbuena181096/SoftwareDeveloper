/*

filterByLength (filtrarPorLogitud)
Desafío
Escribe una función llamada filterByLength que tome dos parámetros: un array de strings y un número n. La función debe devolver un nuevo array que contenga solo las cadenas que tienen una longitud mayor o igual a n. Debe usar arrow functions para lograr esto.

Por ejemplo:
 */
const arr = ["hola", "adios", "bienvenido", "chau"];

const filterByLength = (arr, n) => arr.filter((str) => str.length >= n);
console.log(filterByLength(arr, 5)); // debería imprimir ["adios", "bienvenido"]
