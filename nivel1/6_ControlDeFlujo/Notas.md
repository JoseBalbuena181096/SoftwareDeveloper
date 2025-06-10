## Control de flujo

Cuando aprendemos a programar, una de las primeras cosas que entendemos es que las líneas de código se ejecutan de manera secuencial: una tras otra.

```javascript
// Input
const precioInicial = 150; // Precio inicial del producto
const descuento = 0.1; // Descuento general del 10%

// Lógica: Calculando el descuento general
const montoDescuento = precioInicial * descuento;
const precioFinal = precioInicial - montoDescuento;

// Output
console.log(`El precio final es: ${precioFinal}`);
```

En un principio, esto parece suficiente para resolver tareas simples, como realizar cálculos o manipular datos básicos. Pero, ¿qué pasa cuando enfrentamos situaciones que requieren tomar decisiones basadas en condiciones específicas o realizar operaciones repetitivas sobre un conjunto de datos?

## Preguntar con código

Imagina que estás construyendo una aplicación para gestionar un carrito de compras. Tenés un objeto que representa un producto con propiedades como nombre y precio. En un momento dado, necesitas aplicar un descuento a este producto, pero solo si cumple con ciertas condiciones, por ejemplo, si es Black Friday.

```javascript
const producto = {
  nombre: "Libro de JavaScript",
  precio: 100,
  esBlackFriday: true
};

// ¿cómo decido que número asignarle
// en base a product.esBlackFriday?
const precioFinal = /* ?? */
```

¿Cómo decides aplicar el descuento solo si esBlackFriday es true?

¿Qué pasa si tengo un array de objetos, cada uno representando un producto en el carrito de compras, y necesitas calcular el total a pagar?

```javascript
const carrito = [
  { producto: "Libro de JavaScript", precio: 100 },
  { producto: "Cuaderno", precio: 50 },
  { producto: "Lápiz", precio: 20 }
];

// ¿Cómo sumo todos los precios del array?
const totalCarrito = /* ?? */;
```

## Control de Flujo

Estos casos nos muestran que para resolver el objetivo de nuestro programa, no es suficiente solo con datos y operadores. Nos encontramos con la necesidad de ejecutar código de manera condicional o reiterativa

![alt text](image.png)

La solución a este problema radica en el concepto de control de flujo, que permite que nuestro programa tome decisiones y ejecute código de manera no lineal, es decir, no siempre queremos que después de la línea 1 se ejecute la 2 y después la 3.

Para resolver algunos problemas, necesitamos que este orden cambie y que, por ejemplo, una línea se ejecute solo cuando una condición se cumple, o que podamos reutilizar líneas de código en distintas partes de nuestro programa.

![alt text](image-1.png)

Hagamos un vistazo por arriba de como funcionan estos mecanismos de control para entender de que se trata y más adelante vamos a analizar uno por uno en profundidad para entenderlo por completo. Por ahora concentrémonos en la idea básica,

## Condicionales

Los condicionales son parte de estos mecanismos de control de flujo y nos permiten ejecutar diferentes bloques de código dependiendo de si una condición específica es verdadera o falsa.
![alt text](image-2.png)

## if

La estructura if es una de las más utilizadas para este propósito. Considera el objeto producto del ejemplo anterior. Si queremos aplicar un descuento solo si es Black Friday, podríamos hacerlo de la siguiente manera:

```javascript
const producto = {
  nombre: "Libro de JavaScript",
  precio: 100,
  esBlackFriday: true,
};

let precioFinal;

if (producto.esBlackFriday) {
  // Aplicamos un 20% de descuento
  const montoDescuento = producto.precio * 0.2;
  precioFinal = producto.precio - montoDescuento;
} else {
  precioFinal = producto.precio;
}

console.log(`El precio con descuento es: ${precioFinal}`);
```

En este bloque de código, la lógica dentro del if se ejecuta solo si producto.esBlackFriday es true. De lo contrario, se ejecuta el bloque de código dentro del else.

## Bucles

Los bucles nos permiten repetir un bloque de código mientras se cumpla una condición específica.

![alt text](image-3.png)

## while

El bucle while es un ejemplo sencillo y poderoso. Para sumar todos los valores de "precio" en el array carrito, podemos utilizar un bucle while de la siguiente manera:

```javascript
const carrito = [
  { producto: "Libro de JavaScript", precio: 100 },
  { producto: "Cuaderno", precio: 50 },
  { producto: "Lápiz", precio: 20 },
];

let total = 0;
let contador = 0;

while (contador < carrito.length) {
  total += carrito[contador].precio;
  contador++;
}

console.log(`El total a pagar es: ${total}`);
```

Este bucle se ejecuta mientras contador sea menor que la longitud del array carrito, sumando el precio de cada producto al total.

Cuidado con los bucles infinitos
Es importante asegurarse de que la condición del bucle eventualmente se vuelva falsa; de lo contrario, el bucle se ejecutará indefinidamente, creando un bucle infinito.

```javascript
let j = 0;

while (j < 5) {
  console.log(j);
  // Olvidamos incrementar j, lo que causa
  // un bucle infinito ya que j nunca cambia
  // y siempre es < 5, el programa se queda
  // en este bucle y no avanza. Se cuelga.
}
```

Este ejemplo falla en incrementar j, por lo que la condición j < 5 siempre será verdadera, resultando en un bucle infinito.

## Conclusión

El control de flujo es un concepto fundamental en la programación que nos permite escribir programas más dinámicos y flexibles. A través de los condicionales y los bucles, podemos controlar qué código se ejecuta y cuántas veces, basándonos en condiciones específicas. Esto es solo una introducción a las estructuras de control de flujo en JavaScript. A medida que avances, descubrirás y profundizarás en cada una de estas instrucciones y otras más avanzadas, ampliando enormemente tu capacidad para resolver problemas complejos y construir aplicaciones robustas.
