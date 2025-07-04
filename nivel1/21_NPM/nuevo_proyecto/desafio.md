## Nuestra primera dependencia

Desafío
En este ejercicio te proponemos lo siguiente:

1. Crea un nuevo proyecto(carpeta) y navega a él en la terminal

```bash
mkdir nuevo_proyecto
cd nuevo_proyecto
```

2. Inicia un proyecto de Node.js usando el comando `npm init`. Esto va a crear el archivo `package.json` en tu proyecto.

```bash
npm init
```

3. En el archivo `package.json`, agrega una dependencia llamada `lodash` usando el comando:

```bash
npm install lodash --save
```

4. En un archivo `index.js`, importa el módulo `lodash` usando

```javascript
const _ = require("lodash");
```

5. Usa la función `_.shuffle()` de `lodash` para mezclar un array de elementos.

```javascript
const _ = require("lodash");

const arr = [1, 2, 3, 4, 5];
const shuffledArr = _.shuffle(arr);

console.log(shuffledArr);
```

## Finalmente

Examina el archivo package.json y el contenido de la carpeta node_modules. Al principio puede parecer complejo pero no es más que un archivo de configuración y una carpeta llena de módulos.
