class Peli {
  title: string;
  tags: string[];

  constructor(title: string) {
    this.title = title;
    this.tags = [];
  }

  getTitle(): string {
    return this.title;
  }
}

function main() {
  const miPeli = new Peli("Mi película");
  console.log(miPeli.getTitle());
}

main();
