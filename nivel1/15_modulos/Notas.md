# Introducción

En JavaScript, un módulo es un archivo que contiene código que puede ser compartido y reutilizado en otros archivos. Cada módulo es como una pequeña pieza de un programa que se puede usar en diferentes partes de un proyecto.

Por ejemplo, si estamos construyendo una aplicación web que incluye la funcionalidad de inicio de sesión, podemos crear un módulo llamado "auth.js" que contenga todas las funciones relacionadas con la autenticación de usuarios. Luego, podemos importar este módulo en otros archivos donde necesitamos usar estas funciones.

Para importar un módulo en JavaScript, usamos la palabra clave "import". Podemos importar todo el módulo o sólo algunas funciones específicas. Cuando importamos un módulo, lo recibimos como un objeto que contiene todas las funciones y variables que fueron exportadas desde ese módulo.

Exportar una función o variable desde un módulo se hace usando la palabra clave "export". Podemos exportar una sola función o variable, o varias a la vez.

Usar módulos en nuestro código es útil porque nos permite escribir funciones y variables una sola vez, y luego reutilizarlas en diferentes partes de nuestro programa. Esto hace que nuestro código sea más modular, fácil de mantener y más legible.

## Ejemplo

```javascript
// reproductor.js
const canciones = [
  {
    nombre: "cancion1",
    duracion: 3,
  },
  {
    nombre: "cancion2",
    duracion: 2.5,
  },
  {
    nombre: "cancion3",
    duracion: 4,
  },
];

exports.play = function (cancion) {
  // busca la canción ...
};
exports.pausa = function (cancion) {
  //...
};
exports.adelantar = function (cancion) {
  //...
};
exports.retroceder = function (cancion) {
  //...
};
```

En este ejemplo, vamos a mostrar cómo funciona un módulo en JavaScript. El archivo reproductor.js es un módulo que contiene una colección de canciones y algunas funciones que simulan un reproductor de música.

En cada una de las funciones, se utiliza la palabra clave "exports" seguida del nombre de la función o variable. Esto indica que esos elementos serán parte del objeto que el módulo devolverá y podrán ser utilizados en otros archivos.

Es importante recordar que solo lo que se exporta a través de la palabra clave "exports" será accesible para otros módulos. Cualquier otra función o variable declarada dentro del módulo solo será visible dentro del mismo.

Para utilizar los elementos exportados por el módulo, debemos importarlos en otro archivo utilizando la función "require" de Node.js. De esta forma, podemos utilizar las funciones y variables definidas en el módulo en nuestro propio código.

```javascript
// main.js
//index.js
const reproductor = require("./reproductor.js");

const nombreDeCancion = "cancion1";

reproductor.play(nombreDeCancion);
reproductor.pausa(nombreDeCancion);
reproductor.adelantar(nombreDeCancion);
```

En el ejemplo, podemos observar que para recibir en el archivo/módulo index.js al objeto proveniente de reproductor.js, tenemos que utilizar la función require() y pasarle como parámetro la ruta relativa del archivo al que queremos invocar, en este caso ./reproductor.js.

Esta función nos retorna un objeto que es asignado a la variable reproductor. Entonces, como esta variable contiene al objeto que trajimos desde reproductor.js, podemos usar la sintaxis de punto que se utiliza para acceder al contenido de un objeto.

Así, podemos usar en index.js todas las funciones que vienen del otro archivo, como play() o pausa().
