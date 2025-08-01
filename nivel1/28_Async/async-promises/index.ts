import { readFile } from "fs/promises";
import fetch from "node-fetch";

async function otraFuncion() {
  try {
    console.log("Iniciando la otra función");

    console.time("leer archivo");
    const fileContent = await readFile("./archivo.json", "utf-8");
    const archivo = JSON.parse(fileContent);
    console.log(archivo);
    console.timeEnd("leer archivo");

    console.time("fetching data");
    const response = await fetch(
      "https://api.github.com/users/JoseBalbuena181096/repos"
    );
    const data = await response.json();
    console.log(data);
    console.timeEnd("fetching data");

    setTimeout(() => {
      console.log("Soy otra función");
    }, 1);

    console.log("Terminando la otra función");
    for (let i = 0; i < 10; i++) {
      console.log(i);
    }
  } catch (error) {
    console.error("Ocurrió un error:", error);
  }
}

function main() {
  otraFuncion();
}

main();

/**
 
JavaScript es un lenguaje single thread
Significa que solo puede hacer una cosa a la vez, un solo thread donde se ejecutan las tareas

 */

// Etapa 1
// Declara funcion otraFuncion()
// declara funcion main()
// ejecutar main()
// Etapa 2
// entro a main, (ejecuta main)
// ejecutar otraFuncion()
// 1er console.log
// declarar el timeout
// 2do console.log
// for
// etapa (3/4/5)
//
main();
