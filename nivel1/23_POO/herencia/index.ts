import reverse from "lodash/reverse";

class Product {
  price: number;
  name: string;
  constructor(price: number, name: string) {
    this.price = price;
    this.name = name;
  }
  getPrice() {
    return this.price;
  }
}

class ProductoElectronico extends Product {
  useBatteries: boolean = false;
  marca: string;
  apps: string[] = [];
  constructor(
    price: number,
    name: string,
    marca: string,
    useBatteries: boolean
  ) {
    super(price, name);
    this.marca = marca;
    this.useBatteries = useBatteries;
  }
  setUseBatteries(useBatteries: boolean) {
    this.useBatteries = useBatteries;
  }
  setApps(apps: string[]) {
    this.apps = apps;
  }
  getAppsReverse() {
    return reverse(this.apps);
  }
}

function main() {
  const producto = new ProductoElectronico(100, "iPhone", "Apple", true);
  producto.setApps(["App1", "App2", "App3"]);
  console.log(producto);
  console.log(producto.getAppsReverse());
}

main();
