/**
 * Javascrip siempre evalua las operaciones de izquierda a derecha
 * Lo de la derecha se resuelve primero y luego se evalua la izquierda,
 * por ultimo lo asigna a la variable
 *  */
let saldo = 1000;
console.log(" saldo -> " + saldo);
saldo += 500; // Equivale a saldo = saldo + 500
console.log(" saldo + 500 -> " + saldo);
saldo -= 200; // Equivale a saldo = saldo - 200
console.log(" saldo - 200 -> " + saldo);
saldo *= 2; // Equivale a saldo = saldo * 2
console.log(" saldo * 2 -> " + saldo);
saldo /= 4; // Equivale a saldo = saldo / 4
console.log(" saldo / 4 -> " + saldo);
saldo %= 3; // Equivale a saldo = saldo % 3
console.log(" saldo % 3 -> " + saldo);
