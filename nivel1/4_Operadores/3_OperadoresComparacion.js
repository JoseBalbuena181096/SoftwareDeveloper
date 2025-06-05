/**
 * Los operadores de comparacion
 * Compara valores booleanos y dev
 */

const igualdad = 5 == "5"; // true, compara valor
console.log("igualdad -> 5 == '5' " + igualdad);
const igualdadEstricta = 5 === "5"; // false, compara valor y tipo
console.log("igualdadEstricta -> 5 === '5' " + igualdadEstricta);
const desigualdad = 5 != "4"; // true
console.log("desigualdad -> 5 != '4' " + desigualdad);
const desigualdadEstricta = 5 !== "5"; // true
console.log("desigualdadEstricta -> 5 !== '5' " + desigualdadEstricta);
const mayorQue = 10 > 5; // true
console.log("mayorQue -> 10 > 5 " + mayorQue);
const menorQue = 5 < 10; // true
console.log("menorQue -> 5 < 10 " + menorQue);
const mayorOigualQue = 5 >= 5; // true
console.log("mayorOigualQue -> 5 >= 5 " + mayorOigualQue);
const menorOigualQue = 5 <= 5; // true
console.log("menorOigualQue -> 5 <= 5 " + menorOigualQue);
