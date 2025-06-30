## Leyendo data del disco

Desafío
Para este desafío, te proponemos que crees un datos.json que tenga un array de “personas” dentro. Cada objeto del array debe tener las propiedades: nombre, edad y un array de cosas.

```json
[
  {
    "nombre": "Marce",
    "edad": 33,
    "cosas": [1, 2, 333]
  },
  {
    "nombre": "Ana",
    "edad": 27,
    "cosas": ["perro", "gato"]
  }
]
```

Por otra parte, tenés que crear un archivo datos.js y exportar 2 funciones: getAll() tiene que devolver todas las personas y getOlderThan(number) todas las personas mayores a x edad.

Para completar el desafío, tu código tiene que pasar este test:

```js
// completar acá importando el módulo "datos"
// que tiene las funciones getAll y getOlderThan

// const datos = require("./datos");

function testeaModuloDatos() {
  const todos = datos.getAll();

  const sorted = todos.sort((a, b) => a.edad - b.edad);

  const someWithError = todos.find((i) => {
    return !i.edad || !i.nombre || !i.cosas;
  });

  if (!someWithError) {
    console.log("getAll passed");
  } else {
    throw "getAll devuelve algún objeto que no tiene nombre, edad o cosas";
  }

  const butFirst = sorted.slice(1);
  const first = sorted[0];
  const mayoresDe = datos.getOlderThan(first.edad);

  if (mayoresDe.length == butFirst.length) {
    console.log("getOlderThan passed");
  } else {
    throw "getOlderThan not passed";
  }
}

function main() {
  testeaModuloDatos();
}

main();
```

Pista: tenés que crear una función dentro del módulo datos.js para leer el archivo y transformarlo en un objeto. Recordá que al leer el archivo lo que se nos devuelve es texto. Para transformar ese JSON a un objeto de Javascript hay que usar una de las funciones dentro del objeto JSON.
