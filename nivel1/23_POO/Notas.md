# POO

## Object oriented programming (OOP)

## Programación orientada a objetos (POO)

La Programación Orientada a Objetos (POO) es un enfoque fundamental en el mundo de la programación que se basa en la idea de que podemos modelar el mundo real y resolver problemas de una manera más organizada y estructurada.

En la POO, imaginamos que todo en nuestro programa es como un objeto.

## Clase

Una clase es como una plantilla que describe cómo debe ser un objeto. Podemos pensar en una clase como un conjunto de instrucciones para crear objetos de un cierto tipo. Por ejemplo, si estamos creando un juego, podríamos tener una clase llamada "Jugador" que define cómo debería ser un jugador en el juego.

```ts
class Jugador {
  nombre: string;
  puntaje: number;

  constructor(nombre: string) {
    this.nombre = nombre;
    this.puntaje = 0;
  }

  jugar() {
    console.log(`${this.nombre} está jugando.`);
  }
}
```

## Objeto

Un objeto es una instancia de una clase. Es como si tomáramos el molde de la clase y lo usáramos para crear algo usable. Siguiendo nuestro ejemplo, podríamos crear un objeto de la clase "Jugador" para representar a un jugador específico en el juego.

```ts
const jugador1 = new Jugador("Alice");
const jugador2 = new Jugador("Bob");

jugador1.jugar(); // Muestra "Alice está jugando."
jugador2.jugar(); // Muestra "Bob está jugando."
```

## Propiedades y Métodos

Los atributos o propiedades son características que tienen los objetos. En nuestro ejemplo, nombre y puntaje son propiedades del objeto "Jugador".

Los métodos son funciones que pueden realizar los objetos. En nuestro ejemplo, jugar() es un método que muestra un mensaje en la consola.

```ts
class Jugador {
  nombre: string;
  puntaje: number;

  constructor(nombre: string) {
    this.nombre = nombre;
    this.puntaje = 0;
  }

  jugar() {
    console.log(`${this.nombre} está jugando.`);
    this.puntaje++; // Incrementa el puntaje del jugador en 1
  }

  obtenerPuntaje() {
    return this.puntaje; // Devuelve el puntaje del jugador
  }
}

// Creamos un objeto de la clase Jugador
const jugador1 = new Jugador("Alice");

// Accedemos a las propiedades del jugador
console.log(`Nombre del jugador: ${jugador1.nombre}`);
// Muestra "Nombre del jugador: Alice"

console.log(`Puntaje del jugador: ${jugador1.puntaje}`);
// Muestra "Puntaje del jugador: 0"

// Llamamos al método para que el jugador juegue
jugador1.jugar();
// Muestra "Alice está jugando."

// Accedemos al puntaje actualizado del jugador
console.log(`Puntaje del jugador: ${jugador1.obtenerPuntaje()}`);
// Muestra "Puntaje del jugador: 1"
```

La Programación Orientada a Objetos se trata de organizar nuestro código de manera que sea fácil de entender y mantener. Clases y objetos nos permiten agrupar datos y funciones relacionadas en un solo lugar, lo que hace que el código sea más claro y manejable. Con TypeScript, podemos aprovechar estos conceptos para construir programas más estructurados y eficientes.

## Una clase

Podemos decir que una clase es un molde de objetos. Ese molde es el que define la estructura (propiedades, métodos) que va a tener cada objeto que se cree a partir de cierta clase. Entonces, si queremos que un grupo de objetos comparta una serie de características, crearemos una clase que predefina las condiciones que tienen que tener esos objetos.

Veamos cómo se crea una clase con TypeScript:

```ts
class Persona {
  nombre: string;
  apellido: string;
  fechaNacimiento: Date;

  constructor(nombre: string, apellido: string, fechaNacimiento: Date) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
  }

  getEdad(): number {
    const fechaActual = new Date();
    const tiempoDiferencia =
      fechaActual.getTime() - this.fechaNacimiento.getTime();
    const edad = Math.floor(tiempoDiferencia / (1000 * 3600 * 24 * 365.25));
    return edad;
  }
}

// Crear una instancia de la clase Persona
const persona1 = new Persona("Juan", "Perez", new Date(1990, 5, 15));

// Obtener y mostrar la edad de la persona
const edad = persona1.getEdad();
console.log(`${persona1.nombre} ${persona1.apellido} tiene ${edad} años.`);
```

En este ejemplo, declaramos el método getEdad() para obtener la edad actual de la persona a partir de su fecha de nacimiento. Entonces, cada objeto que creemos con la clase Persona, va a poder usar esta función para calcular una edad.

En este punto, no es importante que se detengan en la lógica que usamos para el método getEdad(). Lo importante es que entiendan que las clases nos permiten definir una serie de métodos para realizar acciones que compartirán los objetos que se desprendan de la misma clase.

## This

La palabra clave this hace referencia al objeto instanciado. Entonces, en el ejemplo, cuando se hace referencia a this.fechaNacimiento se está haciendo alusión a la fecha de

```ts
class Persona {
  nombre: string;
  fechaNacimiento: string;

  constructor(nombre: string, fechaNacimiento: string) {
    this.nombre = nombre;
    this.fechaNacimiento = fechaNacimiento;
  }

  mostrarInfo() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Fecha de Nacimiento: ${this.fechaNacimiento}`);
  }
}

// Crear dos objetos de la clase Persona
const persona1 = new Persona("Juan", "1990-05-15");
const persona2 = new Persona("María", "1985-08-20");

// Llamar al método mostrarInfo para cada objeto
console.log("Persona 1:");
persona1.mostrarInfo();
console.log("Persona 2:");
persona2.mostrarInfo();
```
