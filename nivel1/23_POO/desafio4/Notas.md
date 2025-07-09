## Clase: ProductoAlimenticio

Desafío
En este ejercicio, ampliaremos el ejemplo que vimos con las clases Producto y ProductoTecnologico. Crearemos una tercera clase llamada ProductoAlimenticio que hereda de Producto, pero tiene propiedades y métodos adicionales específicos para productos alimenticios.

### Definición de la Clase Base

Como ya tienes la clase Producto, la usaremos como base. Esta clase tiene propiedades básicas como name y price, y un método getPrice().

Crear la Sub Clase: ProductoAlimenticio
La clase ProductoAlimenticio también extenderá la clase Producto.

Esta clase tendrá una propiedad adicional fechaCaducidad para almacenar la fecha de caducidad del producto alimenticio.

Incluirá un método checkCaducidad() que devolverá true si el producto está caducado o false en caso contrario.

```ts
class ProductoAlimenticio extends Producto {
  fechaCaducidad: Date;
  constructor(name, price, fechaCaducidad) {
    super(name, price);
    // guarda la fecha de caducidad
  }

  checkCaducidad(): boolean {
    const hoy = new Date();
    // [Completa la lógica para obtener si el producto está vencido]
  }
}
```

Crea una instancia de la clase ProductoAlimenticio con datos de tu elección.

Llama al método checkCaducidad() para verificar si el producto está caducado.

Imprime los detalles del producto, incluyendo su precio (usando el método getPrice() heredado de la clase Producto).

```ts
// Creación de la instancia
const pan = new ProductoAlimenticio("Pan Integral", 3.5, "2024-05-30");

const estaVencido = pan.checkCaducidad();
console.log("¿El producto está vencido?:", estaVencido ? "Sí" : "No");

// Mostrar detalles del producto
console.log("Nombre del Producto:", pan.name);
console.log("Precio:", pan.getPrice());
console.log("Fecha de Caducidad:", pan.fechaCaducidad);
```
