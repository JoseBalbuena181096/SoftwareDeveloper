function loadPelis() {
  const fs = require("fs");
  const pelis = fs.readFileSync(__dirname + "/pelis.json", "utf-8");
  return JSON.parse(pelis);
}

function sortPeliculas(pelis, parametroDeOrdenamiento) {
  // Normalizar el parámetro de ordenamiento
  if (typeof parametroDeOrdenamiento === "string") {
    parametroDeOrdenamiento = parametroDeOrdenamiento.toLowerCase().trim();
  }
  // Verificar que el parámetro de ordenamiento sea válido
  if (
    !Object.prototype.hasOwnProperty.call(pelis[0], parametroDeOrdenamiento)
  ) {
    console.log(
      `El parámetro de ordenamiento ${parametroDeOrdenamiento} no es válido`
    );
    return [];
  }

  return pelis.sort((peli1, peli2) => {
    const valor1 = peli1[parametroDeOrdenamiento];
    const valor2 = peli2[parametroDeOrdenamiento];

    // Si los valores son strings, usar localeCompare
    if (typeof valor1 === "string" && typeof valor2 === "string") {
      return valor1.localeCompare(valor2);
    }

    // Si son números, comparar directamente
    if (typeof valor1 === "number" && typeof valor2 === "number") {
      return valor1 - valor2;
    }

    // Si son arrays, convertir a string y comparar
    if (Array.isArray(valor1) && Array.isArray(valor2)) {
      return valor1.join(",").localeCompare(valor2.join(","));
    }

    // Para cualquier otro caso, convertir a string y comparar
    return String(valor1).localeCompare(String(valor2));
  });
}

function buscarPeliculaPorTitulo(pelis, wordSearch) {
  wordSearch = wordSearch.toLowerCase().trim();
  const pelisFiltradas = pelis.filter((peli) => {
    const regex = new RegExp(wordSearch, "gi"); // gi = global + insensitive
    return peli.title.match(regex);
  });
  return pelisFiltradas;
}

function buscarPeliculaPorTag(pelis, tag) {
  const pelisFiltradas = pelis.filter((peli) => {
    const tagLower = tag.toLowerCase().trim();
    return peli.tags.some((t) => t.toLowerCase().trim() === tagLower);
  });
  return pelisFiltradas;
}

function selectOperation(userInput) {
  const options = {
    "--search": buscarPeliculaPorTitulo,
    "--sort": sortPeliculas,
    "--tag": buscarPeliculaPorTag,
  };

  const command = userInput[2];

  if (!command) {
    return loadPelis();
  }

  const selectedFunction = options[command];

  if (!selectedFunction) {
    console.log("Comando no válido. Usa --search, --sort o --tag");
    return [];
  }

  const argument = userInput[3];

  if (!argument) {
    console.log(`Falta el argumento para el comando ${command}`);
    return [];
  }

  return selectedFunction(loadPelis(), argument);
}

module.exports = {
  loadPelis,
  buscarPeliculaPorTag,
  buscarPeliculaPorTitulo,
  sortPeliculas,
  selectOperation,
};
