// objeto literal
// const unObjeto = {
//   unNumero: 1,
//   unaPalabra: "una palabra",
// };

class Pelicula {
  private title: string;
  private rating: number;

  constructor(title: string, rating?: number) {
    this.title = title;
    this.rating = rating || 0;
  }

  getTitle() {
    return this.title;
  }

  public toString(): string {
    return `Pelicula: ${this.title} - Rating: ${this.rating}`;
  }
}

function main() {
  const unaPelicula = new Pelicula("El Padrino", 5);
  console.log(unaPelicula.toString());

  const unaPelicula2 = new Pelicula("El Padrino", 5);
  console.log(unaPelicula2.toString());
}

main();
