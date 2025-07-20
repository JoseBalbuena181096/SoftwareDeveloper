export function diasDesde(fecha) {
  const hoy = new Date();
  const fechaPasada = new Date(fecha);
  const diferencia = hoy.getTime() - fechaPasada.getTime();
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  return `${dias} días`;
}
