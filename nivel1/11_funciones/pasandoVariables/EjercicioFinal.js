/**
 
Solo pares
Desafío
Para este desafío, les proponemos que:

Creen una función main() que no reciba ningún parámetro ni tampoco retorne nada, por ahora. Este va a representar al punto de entrada del programa.
Declaren un array que contenga, por lo menos, 20 objetos. Cada uno de los objetos debe tener un texto y un número distinto: { texto: "hola", unNumero: 4}
Creen otra función que reciba el array de objetos como parámetro y que tenga un nombre acorde a la tarea que hace.
Esta función tiene que devolver un nuevo array solo con los objetos que tengan números pares adentro.
Es decir: Si la segunda función recibe: [{ t:"a", n:1 }, { t:"b", n:2 }, { t:"c", n:3 }] solo debería devolver: [{ t:"b", n:2 }]
 
 */

function filtrarObjetosPares(array) {
  const resultado = [];

  // Recorrer el array de objetos
  for (let i = 0; i < array.length; i++) {
    const objeto = array[i];

    // Verificar si el número dentro del objeto es par
    if (objeto.unNumero % 2 === 0) {
      // Agregar el objeto al array resultado
      resultado.push(objeto);
    }
  }

  return resultado;
}

function filtrarObjetosParesTest(array) {
  const resultado = [];

  // Recorrer el array de objetos
  for (let i = 0; i < array.length; i++) {
    const objeto = array[i];

    // Verificar si el número dentro del objeto es par
    if (objeto.num % 2 === 0) {
      // Agregar el objeto al array resultado
      resultado.push(objeto);
    }
  }

  return resultado;
}

function testFiltrarObjetosPares() {
  const array1 = [{ num: 1 }, { num: 2 }, { num: 3 }, { num: 4 }];
  const array2 = [{ num: 1 }, { num: 3 }, { num: 5 }, { num: 7 }];

  // Prueba 1
  const resultado1 = filtrarObjetosParesTest(array1);
  const esperado1 = [{ num: 2 }, { num: 4 }];
  console.assert(
    JSON.stringify(resultado1) === JSON.stringify(esperado1),
    `Error en la Prueba 1. Se esperaba ${JSON.stringify(
      esperado1
    )} pero se obtuvo ${JSON.stringify(resultado1)}`
  );

  // Prueba 2
  const resultado2 = filtrarObjetosParesTest(array2);
  const esperado2 = [];
  console.assert(
    JSON.stringify(resultado2) === JSON.stringify(esperado2),
    `Error en la Prueba 2. Se esperaba ${JSON.stringify(
      esperado2
    )} pero se obtuvo ${JSON.stringify(resultado2)}`
  );
}

function main() {
  // Declarar un array de objetos
  const arrayObjetos = [
    { texto: "hola", unNumero: 1 },
    { texto: "mundo", unNumero: 2 },
    { texto: "javascript", unNumero: 3 },
    { texto: "programacion", unNumero: 4 },
    { texto: "desarrollo", unNumero: 5 },
    { texto: "codigo", unNumero: 6 },
    { texto: "programador", unNumero: 7 },
    { texto: "desarrollador", unNumero: 8 },
    { texto: "programacion", unNumero: 9 },
    { texto: "desarrollo", unNumero: 10 },
    { texto: "codigo", unNumero: 11 },
    { texto: "programador", unNumero: 12 },
    { texto: "desarrollador", unNumero: 13 },
    { texto: "programacion", unNumero: 14 },
    { texto: "desarrollo", unNumero: 15 },
    { texto: "codigo", unNumero: 16 },
    { texto: "programador", unNumero: 17 },
    { texto: "desarrollador", unNumero: 18 },
    { texto: "programacion", unNumero: 19 },
    { texto: "desarrollo", unNumero: 20 },
    // agregar más objetos
  ];

  // Llamar a la función que filtra los objetos pares
  const resultado = filtrarObjetosPares(arrayObjetos);

  // Mostrar el resultado por consola
  console.log(resultado);

  // Realizar pruebas
  testFiltrarObjetosPares();
}

main();
