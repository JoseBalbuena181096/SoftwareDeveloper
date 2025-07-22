class ProductosModel {
  constructor() {}

  public getProducById(id: number) {
    return {
      // mock
      id: 1,
      nombre: "Producto 1",
      precio: 100,
    };
  }
}
class ProductosView {
  static render(producto: any) {
    console.log("<h1>" + producto.nombre + "</h1>");
    console.log("<p>" + producto.precio + "</p>");
    console.log("<hr/>");
  }
}

class ProductosController {
  public modeloDelProducto: ProductosModel;
  public vistaDelProducto: ProductosView;
  public producto: any;

  constructor() {
    this.modeloDelProducto = new ProductosModel();
    this.vistaDelProducto = new ProductosView();
    this.producto = this.modeloDelProducto.getProducById(1);
    ProductosView.render(this.producto);
  }
}

function main() {
  const controller = new ProductosController();
  ProductosView.render(controller.producto);
}

main();
