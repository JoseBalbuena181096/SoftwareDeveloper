// Definimos el tipo de los objetos que estarán en la colección
interface Cosas {
  id: number;
  name: string;
  description: string;
}

class Cosa implements Cosas {
  id: number;
  name: string;
  description: string;
  constructor(id: number, name: string, description: string) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}

// Creamos el módulo cosas
const cosas = {
  // Creamos la colección de objetos
  collection: [
    new Cosa(1, "Objeto 1", "Descripción del objeto 1"),
    new Cosa(2, "Objeto 2", "Descripción del objeto 2"),
    new Cosa(3, "Objeto 3", "Descripción del objeto 3"),
  ],
  // Método para obtener la colección completa
  getAll: function (): Cosas[] {
    // Tu código
    return this.collection;
  },
  // Método para obtener un objeto por id
  getById: function (id: number): Cosas | undefined {
    // Tu código
    return this.collection.find((c: Cosas) => c.id === id);
  },
};

export { cosas };
