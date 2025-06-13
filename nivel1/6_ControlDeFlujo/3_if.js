// const num = 1;
// const condicion = num > 3;

// if (condicion) {
//   console.log("La condición es verdadera");
// }

// console.log("esto se ejecuta siempre porque está fuera del if");

// const invitados = ["Fache", "Luchito", "Carlitos"];
// const condicion = invitados.length > 2;

// if (condicion === true) {
//   console.log("La condición es verdadera");
// } else {
//   console.log("La condición es falsa");
// }

const fruta = "pera";
let tipo = "";

if (fruta === "manzana") {
  console.log("La fruta es una manzana");
} else if (fruta === "pera") {
  console.log("La fruta es una pera");
} else if (fruta === "naranja") {
  console.log("La fruta es una naranja");
  tipo = "citrico";
} else {
  console.log("La fruta es otra cosa");
}

console.log(tipo);
