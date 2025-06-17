/*
Leyendo ternarios
Desafío
Declara las siguientes constantes relacionadas con una computadora:

ram (número): La cantidad de RAM en gigabytes.
almacenamiento (número): La capacidad de almacenamiento en gigas.
nucleosCPU (número): El número de núcleos de la CPU.
velocidadCPU (número): La velocidad de la CPU en gigahercios (GHz).
precio (número): El precio de la computadora.



Utiliza operadores ternarios para determinar los siguientes datos basados en la información proporcionada:

esPotente (booleano): Si la computadora se considera potente o no (dependiendo de la cantidad de RAM y núcleos de la CPU).
capacidad (cadena de texto): Una descripción de la capacidad de almacenamiento (por ejemplo, "Alta" si es mayor a 500GB o "Baja" si es igual o menor a este valor).
tipoCPU (string): El tipo de CPU según la velocidad (por ejemplo, "Rápida" si la velocidad es mayor a 3GHz o "Lenta" si es igual o menor a 3GHz).
rangoPrecio (cadena de texto): Una categorización del precio (por ejemplo, "Asequible" si es menor a $1000 o "Costosa" si es igual o mayor a $1000).
descripcion (cadena de texto): Una descripción general de la computadora que incluye información sobre su potencia, capacidad, tipo de CPU y precio.
*/

const ram = 16; // GB
const almacenamiento = 2; // TB
const nucleosCPU = 8;
const velocidadCPU = 3.2;
const precio = 1500;

const esPotente = ram >= 8 && nucleosCPU >= 4;
const capacidad = almacenamiento > 1 ? "Alta" : "Baja";
const tipoCPU = velocidadCPU > 3 ? "Rápida" : "Lenta";
const rangoPrecio = precio >= 1000 ? "Costosa" : "Asequible";

console.log("¿Es potente?", esPotente);
console.log("Capacidad de almacenamiento:", capacidad);
console.log("Tipo de CPU:", tipoCPU);
console.log("Rango de precio:", rangoPrecio);

// Redacta una descripción
const descripcion =
  "Esta computadora es " +
  esPotente +
  "Y además tiene " +
  capacidad +
  " de almacenamiento, " +
  tipoCPU +
  " de CPU y " +
  rangoPrecio +
  " de precio.";
