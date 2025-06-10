/* 
Hola yo
Desafío
Declará una constante miNombre con el valor enviado desde la terminal

*/

const miNombre = process.argv[2];

/***
 Declará una constante saludo que sea el resultado de la concatenación entre la palabra "Hola" y el nombre que recibas como argumento.

Imprimí saludo usando console.log(); deberías ver algo similar a esto
 */

const saludo = `Hola ${miNombre}`;
console.log(saludo);
