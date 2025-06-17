/*

Casilla de mensajes
Desafío
El siguiente código evalúa un array de mensajes de una casilla de email para mostrar un mensaje en la pantalla.

Si el usuario no tiene mensajes (o sea que el array está vacío) hay que mostrar un mensaje que diga "No tenés mensajes".

Si el usuario tiene mensajes hay que mostrar un mensaje que diga "Tenés X mensajes nuevos" si son varios, si es un solo mensaje tenés que mostrar el mensaje "Tenés 1 mensaje nuevo".

Para lograr esto tenés que usar dos ternarios. Uno para definir cual de los dos mensajes mostrar y otro ternario para definir si la palabra mensaje debe mostrarse en singular o plural (mensajes).

*/

const inbox = [
  {
    messageId: 1,
    asunto: "Oferta especial",
    preview: "Aprovechá este descuento exclusivo por tiempo limitado...",
  },
  {
    messageId: 2,
    asunto: "Reunión programada",
    preview: "Recordatorio: tenés una reunión mañana a las 10 AM.",
  },
  {
    messageId: 3,
    asunto: "Novedades en tu cuenta",
    preview: "Actualizamos nuestras políticas de privacidad. Más detalles...",
  },
];

const count = inbox.length;

// const m = // El ternario que debés agregar debe devolver
// "mensaje" si count es == 1
// y "mensajes" si mayor
const m = count === 1 ? "mensaje" : "mensajes";

const message =
  /* 
    Tenés que usar 'count' en un ternario para 
    determinar si el mensaje es "No hay mensajes" o 
    "Hay x mensajes" y usar 'm' en vez de la palabra 'mensajes'
  */
  count > 1
    ? `Tienes  ${count} ${m} `
    : count === 1
    ? `Tienes 1 ${m}`
    : "No tienes mensajes";

console.log(message);
