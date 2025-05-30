/* 
La misión de este desafío es construir un pequeño 
software que almacene una playlist de videos del canal de
 YouTube de apx https://www.youtube.com/apxschool. 
 Para esto vas a tener que elegir al menos 5 videos y 
 armar una estructura similar a esta:

*/


const miPlaylist = [
    {
      // El título del video.
      titulo: "Una lista ordenada de datos",
      // La URL del video.
      url: "https://www.youtube.com/watch?v=Ac7_qK6OJEs&t=2s",
      // Un breve resumen del video.
      resumen: "Un video explicativo de como funciona una lista ordenada de datos",
     // Un array de strings con etiquetas relacionadas con el contenido del video. 
      tags: ["lista ordenada", "datos", "js"],
      // Un boolean que indica si ya viste el video.
      visto: false,
      //Un número del 1 al 5 que indica el nivel de dificultad del tema del video.
      dificultad: 3,
    },
    // completar con al menos 5 videos
    {
      titulo: "Arboles binarios",
      url: "https://www.youtube.com/watch?v=Ac7_qK6OJEs&t=2s",
      resumen: "Un video explicativo de como funciona un arbol binario",
      tags: ["arbol binario", "datos", "js"],
      visto: false,
      dificultad: 4,
    },
    {
        titulo: "Vectores",
        url: "https://www.youtube.com/watch?v=Ac7_qK6OJEs&t=2s",
        resumen: "Un video explicativo de como funciona un vector",
        tags: ["vector", "producto escalar", "producto vectorial"],
        visto: true,
        dificultad: 5,
    },
    {
        titulo: "LLMs",
        url: "https://www.youtube.com/watch?v=Ac7_qK6OJEs&t=2s",
        resumen: "Un video explicativo de como funciona un LLM",
        tags: ["LLM", "IA", "producto vectorial"],
        visto: true,
        dificultad: 5,
    },
    {
        titulo: "LLMs",
        url: "https://www.youtube.com/watch?v=Ac7_qK6OJEs&t=2s",
        resumen: "Un video explicativo de como funciona un LLM",
        tags: ["LLM", "IA", "Atencion", "Memoria", "Contexto"],
        visto: true,
        dificultad: 5,
    }
  ];


  /*
  Reporte

  Finalmente, deberás imprimir un reporte que indique 
  la cantidad de videos de tu playlist y mostrar algunos 
  datos relevantes (título, url y resumen) del primer video 
  y del último.
  
*/

// Número total de videos
console.log("Número total de videos: ", miPlaylist.length);

// Datos del primer video
console.log("Primer video - Titulo: ", miPlaylist[0].titulo);
console.log("Primer video - URL: ", miPlaylist[0].url);
// Imprimir el resumen del primer video
console.log("Primer video - Resumen: ", miPlaylist[0].resumen);


// Datos del último video
console.log("Ultimo video - Titulo: ", miPlaylist[miPlaylist.length-1].length);
console.log("Ultimo video - URL: ", miPlaylist[miPlaylist.length-1].url);
// Imprimir el resumen del primer video
console.log("Ultimo video - Resumen: ", miPlaylist[miPlaylist.length-1].resumen);