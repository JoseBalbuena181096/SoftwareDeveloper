/**

¿Qué hace esta función?
Desafío
Intentá decifrar que hace esta función.
 */

// function ejemplo(a, b, c) {
//   const d = [];

//   for (let i = 0; i < a.length; i++) {
//     const e = a[i];

//     if (e.b === b && e.c <= c) {
//       d.push(e);
//     }
//   }

//   return d;
// }

// console.log(ejemplo([1, 2, 3], 2, 3));

/**
Resolución
Vemos la misma función pero con nombres más semánticos.
 */

function buscarProductos(productos, marca, precio) {
  const productosEncontrados = [];

  for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];

    if (producto.marca === marca && producto.precio <= precio) {
      productosEncontrados.push(producto);
    }
  }

  return productosEncontrados;
}
