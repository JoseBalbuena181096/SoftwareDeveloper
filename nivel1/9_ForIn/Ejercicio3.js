/*
Candidatos

Desafío
El objetivo de este ejercicio es usar un for...in para recorrer un array de usuarios y chequear si cumplen con los requisitos de un aviso laboral o no.

Copiá este código base y completá la lógica.

*/

const usuarios = [
  { nombre: "Juan", habilidades: ["javascript", "react"] },
  { nombre: "María", habilidades: ["typescript", "react", "next.js"] },
  { nombre: "Lucas", habilidades: [] },
  { nombre: "Ana", habilidades: ["inglés", "javascript"] },
  { nombre: "Sofía", habilidades: ["typescript", "react"] },
  { nombre: "Martín", habilidades: ["react", "next.js"] },
  { nombre: "Julián", habilidades: ["javascript", "typescript"] },
  { nombre: "Lucía", habilidades: ["inglés", "react"] },
  { nombre: "Ezequiel", habilidades: ["typescript", "react"] },
];

const aviso = {
  compania: "TechFlow",
  texto:
    "Buscamos desarrolladores para unirse a nuestra startup de tecnología innovadora.",
  requisitos: ["typescript", "react"],
};

const candidatos = [];

for (const index in usuarios) {
  const usuario = usuarios[index];

  let cumpleTodosLosRequisitos = true;
  let encontrado = false;

  for (const requisito of aviso.requisitos) {
    // chequeo los requisitos del aviso
    // si el usuario no cumple alguno de ellos,
    // cumpleTodosLosRequisitos se vuelve false
    // [Completar]
    for (const habilidad of usuario.habilidades) {
      if (habilidad === requisito) {
        encontrado = true;
      }
    }
    if (!encontrado) {
      cumpleTodosLosRequisitos = false;
      break;
    }
    encontrado = false;
  }

  if (cumpleTodosLosRequisitos) {
    // agrego al usuario al array de candidatos
    // [Completar]
    candidatos.push(usuario);
  }
}

console.log(candidatos);
