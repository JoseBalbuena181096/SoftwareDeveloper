# Probando el tsconfig

Desafío
En este ejercicio te proponemos que crees un proyecto muy básico utilizando tsconfig.json para configurar la transpilación de código.

Para esto debes instalar typescript en tu proyecto (a menos que lo tengas instalado globalmente)

```bash
npm install typescript --save-dev
```

Genera un archivo tsconfig.json con la configuración básica:

```bash
npx tsc --init
```

Modifica el archivo tsconfig.json para que se vea así:

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
```

Crea la carpeta src y un archivo index.ts dentro de ella:

```bash
mkdir src
```

```bash
npx tsc src/index.ts
```

```ts
// src/index.ts
const message: string = "Hola, TypeScript!";
console.log(message);
```

Compila el código TypeScript usando el comando tsc:

```bash
npx tsc
```

Esto compilará el archivo index.ts en la carpeta src y generará un archivo index.js en la carpeta dist.

Ejecuta el archivo JavaScript generado.

```bash
node dist/index.js
```
