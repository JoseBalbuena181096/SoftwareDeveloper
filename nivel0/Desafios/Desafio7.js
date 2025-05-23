/*
Usando tipos
Desafío
Declará una constante firstName con tu nombre como valor.
Una constante lastName con tu apellido como valor.
Una constante birthYear con tu año de nacimiento.
Una constante currentYear con el año actual.
Una constante fullName que sea el resultado de la suma de firstName y lastName
Una constante years que sea el resultado de la resta de currentYear y birthYear
Mostrar fullName y years usando console.log()
*/

const firstName = "Jose";
const lastName = "Balbuena";
const birthYear = 1996;
const currentYear = 2025;
const fullName = firstName + ' ' + lastName;
const years = currentYear - birthYear;
console.log(`Mi nombre es ${fullName} ${lastName} y mi edad es ${years}`);