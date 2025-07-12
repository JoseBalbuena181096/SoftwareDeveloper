## Mi primer repo

Desafío
Para este desafío, les proponemos que creen un proyecto con dos archivos:

index.ts
como siempre, debe tener una función main(). Desde este archivo vamos a importar las funciones que se declararán en cosas.ts.

cosas.ts
Debe exportar dos funciones:

- getAll()
- getById(id:number)

El módulo `cosas` debe tener una colección (array de objetos). Cada objeto de la colección debe tener al menos una propiedad id, el resto es a elección. La función getAll() debe devolver la colección completa y getById simplemente el objeto de la colección que tenga el id que le pasemos como parámetro.

```typescript
// Definimos el tipo de los objetos que estarán en la colección
interface Cosas {
  id: number;
  name: string;
  description: string;
}

// Creamos el módulo cosas
const cosas = {
  // Creamos la colección de objetos
  collection: [
    { id: 1, name: "Objeto 1", description: "Descripción del objeto 1" },
    { id: 2, name: "Objeto 2", description: "Descripción del objeto 2" },
    { id: 3, name: "Objeto 3", description: "Descripción del objeto 3" },
  ],
  // Método para obtener la colección completa
  getAll: function (): Cosas[] {
    // Tu código
  },
  // Método para obtener un objeto por id
  getById: function (id: number): Cosas | undefined {
    // Tu código
  },
};
```

Además, tenés que crear dos commits en dos momentos:

El primero cuando armes la estructura, con las funciones exportadas e importadas, pero vacías, o sea, sin la lógica.
El segundo cuando finalices el ejercicio.
Para corroborar tus dos commits podés usar el comando git log y ver dos commits.
