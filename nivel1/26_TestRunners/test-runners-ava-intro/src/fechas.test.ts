import { diasDesde } from "./fechas";
import test from "ava";

test("diasDesde calcula la diferencia en días entre hoy y una fecha pasada", (t) => {
  const hoy = new Date();
  const ayer = new Date(hoy);
  ayer.setDate(hoy.getDate() - 1);

  const resultado = diasDesde(ayer);
  t.is(resultado, "1 días");
});
