## Usando interfaces

Completa el siguiente código para definir una interfaz llamada Book que tenga las siguientes propiedades:

- title, de tipo string
- author, de tipo string
- pages, de tipo number
- isbn, de tipo string

Luego, crea un objeto que cumpla con esta interfaz y utilízalo para imprimir la información del libro en la consola.

```ts
interface Book {
  // Completa aquí la definición de la interfaz
}

function printBookInfo(book: Book) {
  console.log(`Title: ${book.title}`);
  console.log(`Author: ${book.author}`);
  console.log(`Pages: ${book.pages}`);
  console.log(`ISBN: ${book.isbn}`);
}

// Crea aquí el objeto que cumpla con la interfaz Book
const book: Book = {
  // Completa aquí los valores de las propiedades
};

printBookInfo(book);
```

Utiliza el compilador de typescript para compilar y node para ejecutar:

```bash
npx tsc index.ts
node index.js
```
