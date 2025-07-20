## Ava

Imaginate que estás trabajando en un proyecto grande, con muchos archivos y módulos que interactúan entre sí. Tenés un archivo llamado fechas.ts que contiene una función super útil que calcula cuántos días pasaron desde una fecha determinada. Esta función devuelve un mensaje (string) con la cantidad de días que pasaron desde la fecha indicada.

```ts
export function diasDesde(fecha) {
  const hoy = new Date();
  const fechaPasada = new Date(fecha);
  const diferencia = hoy.getTime() - fechaPasada.getTime();
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  return `${dias} días`;
}
```

En la clase Usuario, utilizás esa función para calcular cuántos días pasaron desde la última compra de un usuario y mostrar un mensaje.

```ts
import { diasDesde } from "./fechas";

export class Usuario {
  fechasDeCompras: Date[];

  constructor() {
    this.fechasDeCompras = [];
  }

  agregarFechaCompra(fechaCompra: Date) {
    this.fechasDeCompras.push(fechaCompra);
  }

  obtenerUltimaCompra(): Date {
    return this.fechasDeCompras[this.fechasDeCompras.length - 1];
  }

  diasDesdeLaUltimaCompra(): string {
    const ultimaCompra = this.obtenerUltimaCompra();
    const diasDesdeUltimaCompra = diasDesde(ultimaCompra);
    return "Han pasado " + diasDesdeUltimaCompra + " desde la última compra";
  }
}
```

Hasta acá todo va bien. Pero, ¿qué pasa si alguien en tu equipo decide que sería más "util" que la función diasDesde devuelva un mensaje más largo que diga "Han pasado x días"? El cambio en fechas.ts podría verse algo así.

```ts
export function diasDesde(fecha) {
  const hoy = new Date();
  const fechaPasada = new Date(fecha);
  const diferencia = hoy.getTime() - fechaPasada.getTime();
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  return `Han pasado ${dias} días`;
}
```

Este cambio, aunque bien intencionado, rompe la funcionalidad en usuarios.ts y en cualquier otra parte del código que utilice la función diasDesde(), porque el texto esperado cambió bastante.

![alt text](image.png)

Este tipo de problemas, donde un cambio en una parte del código afecta inesperadamente a otra, se multiplican a medida que el proyecto crece y más personas colaboran en él. Mantener un control sobre todas estas interacciones y dependencias se convierte en un desafío enorme. Necesitamos una forma de tener visibilidad sobre el impacto de nuestros cambios en todo el proyecto, para evitar sorpresas desagradables y asegurarnos de que todo sigue funcionando como debería.

## Tests

Si bien typescript nos ofrece cierto nivel de seguridad respecto a los tipos de datos que estamos utilizando, cuando nos enfrentamos a la fragilidad de las dependencias en nuestro código, una práctica común es escribir tests unitarios. Estos tests se diseñan para probar partes específicas de nuestro código (como funciones o métodos) de manera aislada, verificando que se comporten como esperamos ante diferentes entradas.

```ts
import { diasDesde } from "./fechas";

function testDiasDesde() {
  const hoy = new Date();
  const ayer = new Date(hoy);
  ayer.setDate(hoy.getDate() - 2);

  const resultado = diasDesde(ayer);
  if (resultado !== `2 días`) {
    console.error(
      `Test fallido: Se esperaba '2 días', pero se obtuvo ${resultado}`
    );
  } else {
    console.log("Test exitoso: diasDesde funciona correctamente");
  }
}

testDiasDesde();
```

Al escribir tests que verifican el comportamiento de nuestras funciones, podemos detectar rápidamente si un cambio en el código rompe alguna funcionalidad existente.

Además, los tests también sirven como una forma de documentación que muestra cómo se espera que funcione el código. Esto puede ser especialmente útil para nuevos miembros del equipo o para nosotros mismos en el futuro.

Saber que tu código ha pasado una serie de tests antes de ser desplegado (deployed) en un servidor productivo (el servidor que van a usar los usuarios finales) reduce la ansiedad de "romper algo" con nuevos cambios o refactors. Esto evita muchas veces tener que probar todo otra vez.

## Test Runners

Mientras que los tests unitarios escritos así nomás en archivos TypeScript o JavaScript son útiles, existen herramientas diseñadas específicamente para facilitar y mejorar la experiencia de testing. Aquí es donde entran en juego los test runners.

![alt text](image-1.png)

Un test runner es una herramienta que automatiza la ejecución de tus tests. Busca en tu proyecto los archivos de test, los ejecuta uno por uno y te informa de los resultados de una manera clara y estructurada. Esto simplifica enormemente el proceso de testing, especialmente en proyectos grandes.

Existen muchos test runners muy utilizados en la industria com Jest y Mocha. En esta ocasión vamos a explorar una opción simple y eficaz que nos va a ayudar a entender el concepto de test runner y más adelante exploraremos otras herramientas similares.

## Ava

AVA busca y ejecuta tests automáticamente, lo que ahorra tiempo y reduce el riesgo de olvidar ejecutar algún test importante. AVA ejecuta tests en paralelo, aprovechando al máximo los recursos de tu CPU para completar el proceso de testing más rápidamente.

Primero, necesitás instalar AVA en tu proyecto.

```bash
npm install --save-dev ava
```

Luego, si quisieramos escribir un test para nuestra función diasDesde usando AVA. Podríamos tener un archivo fechas.test.js que se vea algo así:

```ts
import test from "ava";
import { diasDesde } from "./fechas";

test("diasDesde calcula correctamente la diferencia en días", (t) => {
  const hoy = new Date();
  const ayer = new Date(hoy);
  ayer.setDate(hoy.getDate() - 1);

  const resultado = diasDesde(ayer);
  t.is(resultado, "1 días");
});
```

Para ejecutar tus tests con AVA, simplemente ejecutá el comando ava desde un script en tu package.json o usando el comando npx.

```bash
npx ava
```

```json
{
  "name": "test-runners-ava",
  "scripts": {
    "test": "ava"
  },
  "devDependencies": {
    "ava": "^6.1.2"
  }
}
```

Por defecto, AVA detecta archivos de test ubicados en el directorio test de tu proyecto. Además, identifica cualquier archivo que termine en .test.js, .spec.js, o que esté en un directorio llamado tests o **tests**. Este comportamiento se puede personalizar.

## Assertions

Los asserts en tests son comprobaciones que verifican si cierta condición en tu código es verdadera. Si la condición es verdadera, el test pasa. Si es falsa, el test falla, indicando un posible error en tu código.

```ts
import test from "ava";

// Ejemplo 1: Verificar igualdad
test("dos más dos es igual a cuatro", (t) => {
  t.is(2 + 2, 4); // Este test pasa porque 2 + 2 es igual a 4
});

// Ejemplo 3: Verificar verdadero o falso
test("verdadero es verdadero", (t) => {
  t.true(true); // Este test pasa porque el valor es verdaderamente true
});
```

En estos ejemplos, t es el objeto de contexto de test que AVA pasa a cada función de test. Proporciona varios métodos de aserción, como is para verificar igualdad, throws para comprobar que se lance un error, y true para asegurar que un valor es verdadero. Estos métodos ayudan a afirmar condiciones específicas en tu código durante las pruebas.

En este repositorio encontraremos un ejemplo básico pero completo de cómo utilizar ava para testear nuestros proyectos basados en TypeScript.

## Conclusión

Mientras que los tests unitarios escritos en JavaScript puro pueden ser un buen punto de partida, herramientas como AVA ofrecen una serie de ventajas significativas que pueden hacer tu vida mucho más fácil, especialmente a medida que tu proyecto crece. Con AVA, obtenés una herramienta poderosa y eficiente que te ayuda a asegurar la calidad de tu código de manera más efectiva.
