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

## Instancias

Ya vimos cómo declarar una clase. Pero, las clases no significan nada si no instanciamos objetos a partir de ellas. Instanciar objetos es el proceso de generar un ejemplar de una clase, es decir, la clase es la declaración de una forma y el objeto es un caso o elemento concreto que responde a esa forma.

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
    const today = new Date();
    const diferenciaEntreFechas =
      today.getFullYear() - this.fechaNacimiento.getFullYear();

    // Verificar si aún no ha pasado el cumpleaños de la persona este año
    if (
      today.getMonth() < this.fechaNacimiento.getMonth() ||
      (today.getMonth() === this.fechaNacimiento.getMonth() &&
        today.getDate() < this.fechaNacimiento.getDate())
    ) {
      return diferenciaEntreFechas - 1;
    } else {
      return diferenciaEntreFechas;
    }
  }
}

const laura = new Persona("Laura", "Vitale", new Date("1995-08-05"));

console.log(`${laura.nombre} ${laura.apellido} tiene ${laura.getEdad()} años.`);
```

En el ejemplo, para crear una instancia de la clase "Persona", utilizamos la palabra clave "new" seguida del nombre de la clase que deseamos instanciar. Luego, asignamos esta instancia a una constante, que en este caso llamamos "laura".

```ts
const laura = new Persona("Laura", "Vitale", new Date("1995-08-05"));
```

Como resultado, obtenemos un objeto llamado "laura" que se basa en la definición de la clase "Persona". A través de la notación de punto, podemos establecer valores para las propiedades como "nombre", "apellido" y "fechaNacimiento".

De esta manera, creamos un objeto que posee las características especificadas en la clase "Persona". Además, podemos crear múltiples instancias de esta clase, cada una representando un objeto independiente con sus propios valores.

## Métodos

En el contexto de una clase, un método es una función que está asociada a esa clase y puede realizar acciones específicas o cálculos basados en los datos o propiedades de la instancia de la clase. Los métodos son parte fundamental de la Programación Orientada a Objetos (POO) y se utilizan para encapsular el comportamiento relacionado con la clase.

```ts
class Rectangulo {
  ancho: number;
  alto: number;

  constructor(ancho: number, alto: number) {
    this.ancho = ancho;
    this.alto = alto;
  }

  calcularArea(): number {
    return this.ancho * this.alto;
  }

  calcularPerimetro(): number {
    return 2 * (this.ancho + this.alto);
  }
}

// Crear una instancia de la clase Rectangulo
const miRectangulo = new Rectangulo(5, 10);

// Calcular el área y el perímetro utilizando los métodos
const area = miRectangulo.calcularArea();
const perimetro = miRectangulo.calcularPerimetro();

console.log(`Área: ${area}`);
console.log(`Perímetro: ${perimetro}`);
```

## Constructor

Conozcamos otro elemento muy importante que podemos usar con las clases. Estamos hablando del método constructor, que es un tipo especial de método, que se ejecuta automáticamente cuando hacemos un new de una clase.

Le podemos pasar argumentos al método constructor entre los paréntesis que le siguen al nombre de la clase que se está por instanciar. Estos argumentos son los valores iniciales del nuevo objeto que queremos crear.

```ts
class Persona {
  nombre: string;
  apellido: string;
  fechaNacimiento: Date;
  constructor(nombreParaArrancar: string) {
    this.nombre = nombreParaArrancar;
  }
  getEdad() {
    const today = new Date();
    const diferenciaEntreFechas = today - this.fechaDeNacimiento;
    // y todo lo demás para calcular la edad
  }
}
const laura = new Persona("laura");
console.log(laura.nombre);
// laura
```

El método constructor de la clase Persona nos pide que, para instanciar un objeto, le pasemos como argumento el valor que le daremos a la propiedad nombre en el caso del objeto que estamos por crear.

Entonces, la expresión new Persona("laura") que vemos en el ejemplo, significa que queremos crear una instancia de la clase Persona que tome al string “laura” como valor de la propiedad nombre.

Gracias al método constructor podemos determinar ciertos valores mínimos que tienen que tener los objetos en el momento en el que son creados.

## Clases con clases

En este capítulo, vamos a aumentar la complejidad para entender todas las posibilidades que nos permiten las clases, con la ayuda de TypeScript.

La clase Banda que creaste probablemente se ve así:

```ts
class Banda {
  members: string[];
  albums: object[];
  constructor(members: string[], albums: object[]) {
    this.members = members;
    this.albums = albums;
  }
}
```

En el desafío, le indicamos al constructor que albums tiene que recibir el tipo de dato object[], o sea, cualquier array de objetos. Esa es la única condición.

Ahora, imaginemos que queremos ser más específicos. En lugar de indicarle a albums que tiene que recibir un object[], podemos decirle que espere recibir otra clase, a la que le vamos a definir ciertas características.

```ts
class Album {
  title: string;
  songs: string[];
}
class Banda {
  members: string[];
  albums: object[];
  constructor(members: string[], albums: Album[]) {
    this.members = members;
    this.albums = albums;
  }
}
```

Entonces, ahora especificamos en la clase Banda que uno de los parámetros de su constructor va a ser otra clase, a la que llamamos Albums. A su vez, le definimos a la clase Albums dos propiedades: title, que espera un string, y songs, que espera un array de strings.

De esta forma, podemos ir formando una especie de red de clases, en la que unas nos ayudan a definir otras. El objetivo es que las estructuras de las clases sean análogas a la relación que tienen los objetos en el mundo real, tal como se espera en el paradigma de la programación orientada a objetos.
