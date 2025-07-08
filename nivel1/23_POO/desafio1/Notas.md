## Clase "Libro"

Crea una clase llamada Libro en TypeScript. Esta clase debe tener las siguientes propiedades:

- titulo: un string que representa el título del libro.
- autor: un strign que representa el autor del libro.
- añoPublicacion: un número que representa el año de publicación del libro.

### Método para obtener la antigüedad del Libro

Agrega un método llamado getAntiguedad() a la clase Libro. Este método debe calcular y devolver la antigüedad del libro basándose en el año actual y el año de publicación (añoPublicacion).

### Instanciación

Crea dos instancias diferentes de la clase Libro con diferentes títulos, autores y años de publicación.

### Utiliza los métodos

Llama al método getAntiguedad() en ambas instancias para obtener la antigüedad de cada libro.

## Imprime los resultados

Imprime en consola los detalles de cada libro (título, autor y año de publicación) junto con su antigüedad.

## Código base

Copia el siguiente código base y completa la lógica faltante.

```ts
class Libro {
  titulo: string;
  autor: string;
  añoPublicacion: number;

  constructor(titulo: string, autor: string, añoPublicacion: number) {
    this.titulo = titulo;
    // [Tu código para inicializar las otras propiedades]
  }
  getAntiguedad(): number {
    const añoActual = new Date().getFullYear();
    // [Tu código para devolver la antiguedad basada en la propiedad this.añoPublicacion]
  }
}

// Creando instancias de la clase Libro
const libro1 = new Libro(
  "Cien años de soledad",
  "Gabriel García Márquez",
  1967
);
// [Tu código para el segundo libro]

// Usando el método getAntiguedad y mostrando detalles de los libros
console.log(
  `El libro "${libro1.titulo}" de ${libro1.autor}, publicado en ${
    libro1.añoPublicacion
  }, tiene ${libro1.getAntiguedad()} años de antigüedad.`
);

// [Tu código para imprimir los datos del segundo libro]
```
