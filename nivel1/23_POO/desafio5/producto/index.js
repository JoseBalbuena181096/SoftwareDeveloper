class Product {
    constructor(name, price) {
        this.price = price;
        this.name = name;
    }
    getPrice() {
        return this.price;
    }
}
class ProductoAlimenticio extends Product {
    constructor(name, price, fechaCaducidad) {
        super(name, price);
        // guarda la fecha de caducidad
        this.fechaCaducidad = fechaCaducidad;
    }
    checkCaducidad() {
        const hoy = new Date();
        // [Completa la lógica para obtener si el producto está vencido]
        return this.fechaCaducidad < hoy;
    }
}
class ProductoCongelado extends ProductoAlimenticio {
    constructor(name, price, fechaCaducidad, temperaturaRecomendada, margen = 5) {
        super(name, price, fechaCaducidad);
        this.margen = margen;
        // [Tu código: Guarda  el dato temperaturaRecomendada]
        this.temperaturaRecomendada = temperaturaRecomendada;
    }
    estaAlmacenadoCorrectamente(temperaturaActual) {
        // [Calcula si el producto está bien conservado contemplando
        // el temperaturaRecomendada y el margen]
        return (this.temperaturaRecomendada - this.margen <= temperaturaActual &&
            this.temperaturaRecomendada + this.margen >= temperaturaActual);
    }
}
// Creación de la instancia
const helado = new ProductoCongelado("Helado de Vainilla", 2.99, new Date("2025-12-31"), -18);
// Temperatura actual de almacenamiento
const temperaturaActual = 20; // Supongamos que esta es la temperatura actual
// Verificar si el producto está almacenado correctamente
const estaAlmacenadoCorrectamente = helado.estaAlmacenadoCorrectamente(temperaturaActual);
console.log("¿Está almacenado correctamente?:", estaAlmacenadoCorrectamente ? "Sí" : "No");
// Verificar si el producto está caducado
const esCaducado = helado.checkCaducidad();
console.log("¿El producto está caducado?:", esCaducado ? "Sí" : "No");
// Mostrar detalles del producto
console.log("Nombre del Producto:", helado.name);
console.log("Precio:", helado.getPrice());
console.log("Fecha de Caducidad:", helado.fechaCaducidad.toDateString());
console.log("Temperatura Recomendada:", helado.temperaturaRecomendada, "grados");
