## Arrow functions

Las arrow functions son una forma más concisa y expresiva de escribir funciones en JavaScript. Se introdujeron en el estándar ECMAScript 6 (también conocido como ES6 o ES2015) y se han vuelto cada vez más populares en el desarrollo de JavaScript moderno.

La sintaxis de una arrow function se ve así:

```javascript
(param1, param2, …, paramN) => { statements }
```

Donde param1, param2, etc. son los parámetros de la función y statements es el cuerpo de la función.

Por ejemplo, si quisiéramos escribir una función que calcule el cuadrado de un número, podríamos hacerlo de la siguiente manera usando una función tradicional:

```javascript
function square(num) {
  return num * num;
}
```

Notarás que la arrow function es mucho más corta y concisa que la función tradicional. También hay una forma más corta de escribir arrow functions si solo se necesita una expresión:

```javascript
const square = (num) => num * num;
```

En este caso, las llaves y la palabra clave return se omiten, ya que solo hay una expresión.

Es importante destacar que las arrow functions tienen algunas diferencias importantes en su comportamiento en comparación con las funciones tradicionales, especialmente en cuanto a cómo manejan el valor this. Pero en general, son una herramienta muy útil para escribir código JavaScript limpio y legible.
