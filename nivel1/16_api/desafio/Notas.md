## Leyendo argumentos

Desafío
Para resolver este desafío, te proponemos que crees una función que reciba un array de argumentos introducidos desde la terminal con este formato:

```bash
node index.js --argument valor --otro-argumento otro-valor --tercer-argumento 80
```

Además, esa función tiene que devolver el array de argumentos convertido en un objeto, por lo tanto, tiene que tener este formato:

```javascript
{
  argument: "valor",
  otroArgumento: "otro-valor",
  tercerArgumento: 80
}
```

Pista: para pasar el desafío deben usar process.argv para recibir los argumentos ingresados desde la terminal. Este enlace les será muy útil para entender cómo funciona argv.
