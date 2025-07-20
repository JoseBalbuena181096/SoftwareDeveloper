import { diasDesde } from "./fechas";


export class Usuario {
  fechasDeCompras: Date[];

  constructor() {
    this.fechasDeCompras = [];
  }

  agregarFechaCompra(fechaCompra: Date) {
    this.fechasDeCompras.push(fechaCompra);
  }

  obtenerUltimaCompra(): Date {
    return this.fechasDeCompras[this.fechasDeCompras.length - 1];
  }

  diasDesdeLaUltimaCompra(): string {
    const ultimaCompra = this.obtenerUltimaCompra();
    const diasDesdeUltimaCompra = diasDesde(ultimaCompra);
    return "Han pasado " + diasDesdeUltimaCompra + " desde la última compra";
  }
}
