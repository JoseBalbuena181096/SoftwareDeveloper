/***
Calculadora de descuento
Desafío
El objetivo de este ejercicio es usar los condicionales, en este caso el if, para tomar decisiones y generar resultados en base a ciertas características de un producto.

Usando este código base que describe un producto:


Calcular el precio final
Suma código que calcule el precio final de la laptop basado en las siguientes condiciones:

Si incluye seguro, añade un recargo adicional de $100 al precio final.
Si es reacondicionado, aplica un descuento de $150 al precio final.
Si la RAM es mayor o igual a 16GB, añade un recargo adicional de $50 al precio final.
 */

const laptop = {
  id: "LAP123456",
  marca: "TechBrand",
  modelo: "X200",
  especificaciones: {
    procesador: "Intel Core i7",
    ram: 16, // en GB
    almacenamiento: 512, // en GB
    pantalla: 15.6, // en pulgadas
  },
  precioBase: 1000,
  incluyeSeguro: true,
  esReacondicionado: false,
  fechaFabricacion: { dia: 20, mes: 11, anio: 2023 },
  estado: "nuevo", // puede ser "nuevo" o "usado"
};

// comienzo estableciendo un precio inicial
let precioFinal = laptop.precioBase;

// luego voy alterando la variable dependiendo
// de las condiciones que modifican el precio
if (laptop.incluyeSeguro) {
  precioFinal += 100;
}
if (laptop.esReacondicionado) {
  precioFinal -= 50;
}
if (laptop.especificaciones.ram >= 16) {
  precioFinal += 50;
}

// ...el resto de la lógica

console.log(precioFinal);
