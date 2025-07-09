# Clase: ProductoCongelado

Desafío
El objetivo del ejercicio es expandir aún más el concepto de herencia en programación orientada a objetos. Crearemos una subclase de ProductoAlimenticio llamada ProductoCongelado que representará productos que necesitan ser almacenados en congelación. Esta nueva clase tendrá propiedades y métodos adicionales específicos para productos congelados.

## Clase: ProductoCongelado

La clase ProductoCongelado extenderá la clase ProductoAlimenticio. Esta clase tendrá una propiedad adicional temperaturaRecomendada para almacenar la temperatura recomendada de almacenamiento. Además, incluirá un método isProperlyStored(temperaturaActual) que tomará la temperatura actual del entorno y devolverá true si la temperatura está dentro de un rango aceptable para el producto.

Completa el código base

```ts
class ProductoCongelado extends ProductoAlimenticio {
  temperaturaRecomendada: number;
  private margen: number;
  constructor(
    name: string,
    price: number,
    fechaCaducidad: string,
    temperaturaRecomendada: number,
    margen: number = 5
  ) {
    super(name, price, fechaCaducidad);
    this.margen = margen;
    // [Tu código: Guarda  el dato temperaturaRecomendada]
  }
  estaAlmacenadoCorrectamente(temperaturaActual: number): boolean {
    // [Calcula si el producto está bien conservado contemplando
    // el temperaturaRecomendada y el margen]
  }
}
```

En este ejemplo, margen se declara como una propiedad privada de ProductoCongelado, lo que significa que solo puede ser accesible y modificable dentro de la clase ProductoCongelado. Además, se proporciona un valor por defecto para margen en el constructor, que es 5, pero permite la opción de establecer un margen diferente al crear una instancia de la clase.

```ts
// Creación de la instancia
const helado = new ProductoCongelado(
  "Helado de Vainilla",
  2.99,
  "2024-12-31",
  -18
);

// Temperatura actual de almacenamiento
const temperaturaActual = -20; // Supongamos que esta es la temperatura actual

// Verificar si el producto está almacenado correctamente
const estaAlmacenadoCorrectamente =
  helado.estaAlmacenadoCorrectamente(temperaturaActual);
console.log(
  "¿Está almacenado correctamente?:",
  estaAlmacenadoCorrectamente ? "Sí" : "No"
);

// Verificar si el producto está caducado
const esCaducado = helado.checkCaducidad();
console.log("¿El producto está caducado?:", esCaducado ? "Sí" : "No");

// Mostrar detalles del producto
console.log("Nombre del Producto:", helado.name);
console.log("Precio:", helado.getPrice());
console.log("Fecha de Caducidad:", helado.fechaCaducidad.toDateString());
console.log(
  "Temperatura Recomendada:",
  helado.temperaturaRecomendada,
  "grados"
);
```
