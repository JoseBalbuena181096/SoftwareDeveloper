## Operadores

Hasta ahora, venimos trabajando con conceptos fundamentales como la declaración de variables y constantes a través de const y let. Aprendimos que const es nuestra opción para valores que no cambiarán, mientras que let se reserva para aquellos datos que sí lo harán.

```js
const nombre = "Alex";
let edad = 25;
```

Además, exploramos cómo organizar y almacenar diferentes tipos de datos, como números, textos (strings), booleanos, en estructuras más complejas como arrays y objetos literales.

```js
const usuario = {
  nombre: "Alex",
  edad: 25,
  hobbies: ["leer", "programar", "viajar"],
};
```

Pero ¿qué pasa si querés ir más allá de simplemente almacenar estos datos? ¿Como comparo la edad de dos usuarios para ver quién es mayor, o calcular la edad promedio de un grupo de usuarios?

## Operadores

Los operadores son símbolos o palabras clave especiales que te permiten realizar operaciones entre los datos que vas creando. Desde asignar valores hasta realizar cálculos matemáticos y comparaciones lógicas, los operadores son herramientas esenciales que te permiten implementar lógica de manera eficiente y legible.

En esta introducción vamos a explorar los cuatro tipos principales de operadores, que son: operadores de asignación, aritméticos, de comparación y lógicos.

### Operadores de asignación

Los operadores de asignación se utilizan para asignar valores a las variables. El más básico es el operador =, pero hay otros que combinan la asignación con operaciones aritméticas, facilitando la actualización de los valores de las variables.

```js
let saldo = 1000;
saldo += 500; // Equivale a saldo = saldo + 500
saldo -= 200; // Equivale a saldo = saldo - 200
saldo *= 2; // Equivale a saldo = saldo * 2
saldo /= 4; // Equivale a saldo = saldo / 4
saldo %= 3; // Equivale a saldo = saldo % 3
```

### Operadores aritméticos

Los operadores aritméticos permiten realizar cálculos matemáticos. Son fundamentales para cualquier tipo de operación numérica que quieras realizar en tu código.

```js
const suma = 5 + 3; // Suma, resultado: 8
const resta = 10 - 4; // Resta, resultado: 6
const multiplicacion = 2 * 3; // Multiplicación, resultado: 6
const division = 10 / 2; // División, resultado: 5
const modulo = 7 % 2; // Módulo, resultado: 1
let contador = 0;
contador++; // Incremento, contador ahora es 1
contador--; // Decremento, contador vuelve a ser 0
```

### Operadores de Comparación

Estos operadores comparan dos valores y devuelven un booleano, true (verdadero) o false (falso), según el resultado de la comparación.

```js
const igualdad = 5 == "5"; // true, compara valor
const igualdadEstricta = 5 === "5"; // false, compara valor y tipo
const desigualdad = 5 != "4"; // true
const desigualdadEstricta = 5 !== "5"; // true
const mayorQue = 10 > 5; // true
const menorQue = 5 < 10; // true
const mayorOigualQue = 5 >= 5; // true
const menorOigualQue = 5 <= 5; // true
```

### Operadores Lógicos

Los operadores lógicos se usan para combinar expresiones booleanas. Son clave para construir condiciones más complejas en tus estructuras de control.

```js
const verdad = true && true; // AND, resultado: true
const falso = true && false; // AND, resultado: false
const oVerdad = true || false; // OR, resultado: true
const noVerdad = !true; // NOT, resultado: false
```

### Conclusión

Los operadores en JavaScript son herramientas fundamentales que te permiten realizar una amplia gama de operaciones, desde asignaciones simples hasta complejas comparaciones lógicas. Aunque existen más operadores para casos más específicos, los que hemos explorado en esta clase son los básicos y fundamentales. Dominar estos operadores te permitirá escribir gran parte de la lógica de tus programas, tanto ahora como en el futuro de tu carrera como dev.
