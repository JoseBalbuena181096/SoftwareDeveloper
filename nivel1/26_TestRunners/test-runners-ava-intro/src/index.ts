import { Usuario } from "./usuario";

function main() {
  const usuario = new Usuario();
  const fechaDeCompra = new Date("2024-01-01");
  const hoy = new Date();
  console.log(hoy);
  console.log(fechaDeCompra);
  usuario.agregarFechaCompra(fechaDeCompra);
  console.log(usuario.diasDesdeLaUltimaCompra());
}

main();
