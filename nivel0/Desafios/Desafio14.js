/* 

Modifica el objeto
Desafío
La fecha de estreno del siguiente objeto es erronea. Debes modificar la propiedad `estreno` para que tenga el valor correcto: 1993. Además debes agregar la propiedad `director` y asignarlo el valor "Steven Spielberg".
*/

// NO modifiques la siguiente lína
const peli = { titulo:"Jurassic Park", estreno: 1994 };

// Ahora vamos a imprimir la película con la data erronea
console.log("Data erronea", peli);

// Aquí debes agregar una linea para modificar la fecha del objeto

peli.estreno = 1993;

// Ahora agrega la propiedad 'director' al objeto 

peli.director = "Steven Spielberg";

// Ahora deberías ver el objeto con la data correcta
console.log("Data correcta", peli);