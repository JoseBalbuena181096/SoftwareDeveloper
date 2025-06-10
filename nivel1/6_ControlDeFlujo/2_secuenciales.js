const carrito = [
  { nombre: "Libro de JavaScript", precio: 100 },
  { nombre: "Cuaderno", precio: 50 },
  { nombre: "Lápiz", precio: 20 },
];

let total = 0;
let i = 0;

while (i < carrito.length) {
  total += carrito[i].precio;
  i++;
}

console.log(`El total es: ${total}`);

// let total_ = 0;
// carrito.forEach((producto) => (total_ += producto.precio));
// console.log(`El total es: ${total_}`);

// total_ = carrito.reduce((total, producto) => total + producto.precio, 0);
// console.log(`El total es: ${total_}`);
