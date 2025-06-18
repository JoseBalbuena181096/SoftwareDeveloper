/* 
Detené el while
Desafío
El while de este ejemplo no se detiene, es un bucle infinito.

Modificá este while para que el counter se modifique en cada ejecución del while y que se ejecute solo 50 veces. Al finalizar mostrá un mensaje usando console.log() que diga "Terminó"
*/


let counter = 0;

while(counter < 50){
  console.log(counter);
  counter++;
}
console.log("Terminó");