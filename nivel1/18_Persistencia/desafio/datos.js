const fs = require("fs");

function getAll() {
  const texto = fs.readFileSync("datos.json", "utf-8");
  const obj = JSON.parse(texto);
  return obj;
}

function getOlderThan(number) {
  const texto = fs.readFileSync("datos.json", "utf-8");
  const obj = JSON.parse(texto);
  return obj.filter((persona) => persona.edad > number);
}

module.exports = {
  getAll,
  getOlderThan,
};
