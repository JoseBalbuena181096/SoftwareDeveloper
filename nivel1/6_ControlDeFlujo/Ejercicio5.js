/*
Usando Switch
Desafío
Agregar el switch necesario para modificar la variable dayName para que tenga el valor correspondiente al día de la semana. Por ejemplo, si el valor day vale 1 dayName debería ser Lunes.

*/

// day es un valor del 1 al 7
const day = 4;
let dayName = "";

// acá agregá tu coídgo para asignarle a dayName el valor correcto
// por ejemplo si day es 2 dayName debería valer "Martes"
switch (day) {
  case 1:
    dayName = "Lunes";
    break;
  case 2:
    dayName = "Martes";
    break;
  case 3:
    dayName = "Miercoles";
    break;
  case 4:
    dayName = "Jueves";
    break;
  case 5:
    dayName = "Viernes";
    break;
  case 6:
    dayName = "Sabado";
    break;
  case 7:
    dayName = "Domingo";
    break;
  default:
    dayName = "Dia no valido";
    break;
}

console.log("Hoy es", dayName);
