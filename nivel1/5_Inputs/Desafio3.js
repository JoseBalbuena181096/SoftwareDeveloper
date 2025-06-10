/**
 Datos del mes
Desafío
En este ejercicio vamos a construir una pequeña app que nos muestre la información importante de un mes en particular.

Para esto, nuestra app tiene que recibir el número del mes como argumento y mostrarnos información sobre ese mes.

Por ejemplo, al ejecutar tu programa de esta forma:Datos del mes
Desafío
En este ejercicio vamos a construir una pequeña app que nos muestre la información importante de un mes en particular.

Para esto, nuestra app tiene que recibir el número del mes como argumento y mostrarnos información sobre ese mes.

Por ejemplo, al ejecutar tu programa de esta forma:
node index.js 7
Tendríamos que ver en la terminal algo como esto:
Numero de mes: 7
Nombre del mes: Julio
Cantidad de días: 31
Evento del mes: Memes de Julio
 */

const numeroDeMes = process.argv[2];

/* 
 El siguiente array contiene la data de cada mes
*/

const informacionMensual = [
  {
    nombreDelMes: "Enero",
    cantidadDeDias: 31,
    eventoDelMes: "Año Nuevo",
  },
  {
    nombreDelMes: "Febrero",
    cantidadDeDias: 28,
    eventoDelMes: "Día de San Valentín",
  },
  {
    nombreDelMes: "Marzo",
    cantidadDeDias: 31,
    eventoDelMes: "Día Internacional de la Mujer",
  },
  {
    nombreDelMes: "Abril",
    cantidadDeDias: 30,
    eventoDelMes: "Día del Niño",
  },
  {
    nombreDelMes: "Mayo",
    cantidadDeDias: 31,
    eventoDelMes: "Día de las Madres",
  },
  {
    nombreDelMes: "Junio",
    cantidadDeDias: 30,
    eventoDelMes: "Día del Padre",
  },
  {
    nombreDelMes: "Julio",
    cantidadDeDias: 31,
    eventoDelMes: "Día del Amigo",
  },
  {
    nombreDelMes: "Agosto",
    cantidadDeDias: 31,
    eventoDelMes: "Día del Niño Perdido",
  },
  {
    nombreDelMes: "Septiembre",
    cantidadDeDias: 30,
    eventoDelMes: "Día de la Independencia",
  },
  {
    nombreDelMes: "Octubre",
    cantidadDeDias: 31,
    eventoDelMes: "Día de Muertos",
  },
  {
    nombreDelMes: "Noviembre",
    cantidadDeDias: 30,
    eventoDelMes: "Día de la Revolución",
  },
  {
    nombreDelMes: "Diciembre",
    cantidadDeDias: 31,
    eventoDelMes: "Navidad",
  },
];

// Recordá que el array comienza en 0
// el mes 1 (enero) corresponde a la posición 0 del array
// el mes 2 (febrero) corresponde a la posición 1 del array
const posicionEnElArray = parseInt(numeroDeMes) - 1; // tu código;

try {
  const infoDelMes = informacionMensual[posicionEnElArray];
  console.log("Numero de mes:", numeroDeMes);
  console.log("Nombre del mes:", infoDelMes.nombreDelMes);
  console.log("Cantidad de días:", infoDelMes.cantidadDeDias);
  console.log("Evento del mes:", infoDelMes.eventoDelMes);
} catch (error) {
  console.log("Mes no valido");
}
