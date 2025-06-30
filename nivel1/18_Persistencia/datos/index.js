const fs = require("fs");

function main() {
  //   let datos = 4;
  //   console.log(datos);

  //   const objetos = {
  //     nombre: "Juan",
  //     edad: 25,
  //     getNombre: function () {
  //       return this.nombre;
  //     },
  //   };

  //   console.log(objetos.getNombre());
  const texto = '{"valor": 4}';
  const obj = JSON.parse(texto);
  console.log(obj.valor);

  obj.valor = 5;
  console.log(obj.valor);

  //   fs.readFile("cosas.json", "utf-8", (err, data) => {
  //     if (err) throw err;
  //     console.log(data);
  //   });
  const archivoTexto = fs.readFileSync("cosas.json", "utf-8");
  console.log(archivoTexto.toString());

  const archivoObjeto = JSON.parse(archivoTexto);
  console.log(archivoObjeto.masCosas);
}

main();
