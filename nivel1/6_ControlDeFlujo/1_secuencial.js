const producto = {
  nombre: "Libro de JavaScript",
  precio: 100,
  esBlackFriday: false,
};

// ¿cómo decido que número asignarle
// en base a product.esBlackFriday?
let precioFinal;

if (producto.esBlackFriday) {
  // aplicamos el 20% de descuento
  console.log("Es black friday");
  const montoDescuento = producto.precio * 0.2;
  precioFinal = producto.precio - montoDescuento;
} else {
  console.log("No es black friday");
  precioFinal = producto.precio;
}

console.log(`El precio final es: ${precioFinal}`);
