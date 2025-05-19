## Desafio 1 Hola Mundo

En este desafío vamos a dar uno de los pasos más importantes en la carrera de cualquier dev: tu primera linea de código.

Este primer paso es la síntesis de haber comprendido varios conceptos fundamentales de la computación y la programación y por eso merece que reconozcamos tu dedicación.

Habernos tomado el tiempo para entender estos temas va a facilitar mucho el poder avanzar a temas más complejos.

Ahora si, pasemos a las consignas de este desafío.

Carpeta proyectos
Si todavía no lo hiciste, creá una carpeta para alojar tus proyectos. Los nombres más usados para este propósito son:

source
src (una forma abreviada de source)
proyectos
Utiliza el comando mkdir para crear la carpeta y recordá evitar tildes, espacios o mayúsculas. Solo caracteres en minúsculas.

```bash
mkdir proyectos
```

Dentro de esta carpeta vamos a crear otras carpetas para nuestros proyectos y ejercicios.

Carpeta hola mundo
Para este ejercicio deberás crear una carpeta hola-mundo y desde esa carpeta abrí el editor de código ejecutando el comando code .

```bash
# entramos a la carpeta codigo recien creada
# usa el nombre que hayas elegido para tu carpeta
cd proyectos

# creamos la carpeta hola mundo
mkdir hola-mundo

# entramos a esta carpeta
cd hola-mundo

# dentro de la carpeta invocamos a windsurf
windsurf .
# el punto del final le indica que abra "esta" carpeta
```

## Desafio 2 Tus primeros datos
Desafío
El objetivo de este ejercicio es guardar dos datos (unDulce y ranking) que representan algún dulce que nos guste mucho y el puntaje del 1 al 10 que le queramos dar.

Luego vamos a modificar ese puntaje y ver como se reacciona nuestro código.

Paso a paso
Para esto deberás:

Declarar una constante llamada unDulce y almacenar el nombre algún dulce que te guste
Declarar una variable ranking con un valor numérico (dependiendo de cuanto te guste) del 1 al 10
Mostrar ambos datos usando console.log()
Luego, modifica la variable ranking y asígnale otro valor. Otro número.
Imprimí ambos datos otra vez usando console.log()

```javascript
const unDulce = 'Mazapan';
let ranking = 9;
console.log(unDulce, ranking);
ranking = 8;
console.log(unDulce, ranking);
```
valor ranking cambiado.

Comentarios
Los comentarios son fragmentos del código que no se interpretan, son notas para ayudarnos a entender mejor nuestro código.

```javascript
// Esto es un comentario
const dato = 2;
// un texto que no es interpretado
console.log(dato);
```

Vamos a hablar de comentarios en detalle, luego.

Extra: genera una falla
Para finalizar, vamos a hacer que algo falle a propósito y ver cómo manejamos la situación normalmente.

Para esto, agrega una linea extra a tu programa e intentá modificar la constante unDulce con otro valor. Observá el error que Node te muestre y Googlealo para ver que respuestas encontrás.

```javascript
// Creamos una constate que guarda el dulce
const unDulce = 'Mazapan';
// Creamos una variable que guarda el ranking
let ranking = 9;
// Mostramos el dulce y el ranking
console.log(unDulce, ranking);
// Modificamos el ranking
ranking = 8;
// Mostramos el dulce y el ranking
console.log(unDulce, ranking);
// Generamos el error intentando reasignar una constante
unDulce = 'Churros';
console.log(unDulce, ranking);
```

Una vez que encuentres la respuesta, deja esa línea comentada para que tu programa no tenga fallas.


```javascript
// Creamos una constate que guarda el dulce
const unDulce = 'Mazapan';
// Creamos una variable que guarda el ranking
let ranking = 9;
// Mostramos el dulce y el ranking
console.log(unDulce, ranking);
// Modificamos el ranking
ranking = 8;
// Mostramos el dulce y el ranking
console.log(unDulce, ranking);
// Generamos el error intentando reasignar una constante
//unDulce = 'Churros';
//console.log(unDulce, ranking);
```

Tip
Guardá y ejecutá tu programa en cada paso para ir controlando que todo funciona.

Si algo falla, leé el error que Node te muestre en la terminal y pegalo en Google, vas a llegar a la solución muy fácil. T
O pregunta a claude que ocurre.