## Compilando Typescript

1. Crea un archivo TypeScript: Crea un nuevo archivo con extensión .ts. Por ejemplo, puedes crear un archivo llamado ejemplo.ts.

2. Ahora puedes escribir tu código TypeScript dentro del archivo ejemplo.ts. Por ejemplo:

```typescript
// ejemplo.ts

function suma(a: number, b: number) {
  return a + b;
}

const resultado = suma(2, 3);
console.log(resultado);
```

3. Una vez que hayas terminado de escribir tu código TypeScript, debes compilarlo a JavaScript para que pueda ser ejecutado en el navegador o en Node.js. Para compilar el archivo ejemplo.ts, debes ejecutar el compilador de TypeScript tsc en la terminal:

```bash
tsc ejemplo.ts
```

Este comando generará un archivo JavaScript `ejemplo.js` en el mismo directorio que el archivo TypeScript original. Puedes ejecutar este archivo JavaScript como lo harías con cualquier otro archivo JavaScript.

```js
// ejemplo.js

function suma(a, b) {
  return a + b;
}

const resultado = suma(2, 3);
console.log(resultado);
```

4. Ejecuta el archivo JavaScript: Ahora puedes ejecutar el archivo ejemplo.js como lo harías con cualquier otro archivo JavaScript:

```bash
node ejemplo.js
```

Este comando imprimirá el resultado de la función suma en la consola.
