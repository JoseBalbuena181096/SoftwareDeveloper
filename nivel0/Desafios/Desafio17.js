/**
Yo, objeto
Desafío


Uno de los primeros pasos para crear software es aprender a representar entidades del mundo real como objetos. Gracias a los primitivos (numbers, strings, booleans) y a estructuras como arrays y objetos, podemos construir modelos bastante complejos que reflejan la realidad. La clave está en saber estructurar los datos que representan cosas de la vida cotidiana; esto es esencial para el desarrollo de cualquier software. Aunque al principio puede parecer complicado, con la práctica se vuelve más natural y dominar esta habilidad es de mucha ayuda.

Consigna
En este desafío la misión es crear un objeto que te represente y que incluya los siguientes datos.

Nombre: string
Apellido: string
Edad: number
Pais: string
Profesión: string
Sabe manejar: boolean
Mascotas: array
Hobbies: array
Toca instrumentos: boolean
Nivel de inglés: string o number
Ciudad: string
Redes sociales: objeto
Películas favoritas: array
Comidas favoritas: array
Sabe cocinar: boolean
Día de la semana favorito: string
Objetivos por cumplir: array
Como notarás cada dato tiene una propuesta del tipo, pero la idea es que juegues y elijas vos como representar cada dato.

Por ejemplo, el array de mascotas puede ser un array de strings:

const mascotas = ["Fido", "Michi"];

oun array de objetos
const mascotas = [
  { nombre: "Fido", especie: "Perro" },
  { nombre: "Michi", especie: "Gato" }
];
**/

const yo = {
    Nombre: 'Jose Angel',
    Apellido: 'Balbuena Palma',
    Edad: 28,
    Pais: 'Mexico',
    Profesion: 'Mecatronico',
    SabeManejar: false,
    Mascotas: [
        {
            nombre: 'Kity',
            especie: 'Gato',
            raza: 'Siames',
            genero: 'Femenino',
            edad: 10,
            peso: 2.5,
            color: 'Gris'
        },
        {
            nombre: 'Koda',
            especie: 'Perro',
            raza: 'Pitbull',
            genero: 'Masculino',
            edad: 5,
            peso: 20,
            color: 'Cafe'
        }
    ],
    Hobbies: [
        {
            nombre: 'Ver tiktok',
            tipo: 'Individual',
            frecuencia: 'Diario'
        },
        {
            nombre: 'Jugar futbol',
            tipo: 'Equipo',
            frecuencia: 'Semanal'
        }
    ],
    TocaInstrumentos: false,
    NivelIngles: 'A2',
    Ciudad: 'Atlixco',
    RedesSociales:{
        tiktok: 'https://www.tiktok.com/@joseangelbalbuena',
        instagram: 'https://www.instagram.com/joseangelbalbuena/',
        facebook: 'https://www.facebook.com/joseangelbalbuena'
    },
    PeliculasFavoritas: [
        {
            nombre: 'Iron Man',
            genero: 'Ciencia ficcion',
            año: 2008
        },
        {
            nombre: 'El señor de los anillos el retorno del rey',
            genero: 'Accion',
            año: 2005
        },
        {
            nombre: 'Star Wars: Episodio 3 La venganza de los Sith',
            genero: 'Ciencia ficcion',
            año: 2005 
        }
    ],
    ComidasFavoritas: [
        {
            nombre: 'Caldo de Camaron',
            tipo: 'Costeño',
            frecuencia: '4 meses'
        },
        {
            nombre: 'KFC',
            tipo: 'Americano',
            frecuencia: '3 meses'
        }
    ],
    SaberCocinar: true,
    DiaSemanaFavorito: 'Sabado',
    ObjetivosPorCumplir: [
        {
            nombre: 'Ir a China',
            tipo: 'Personal',
            fecha: '2035'
        },
        {
            nombre: 'Emprender',
            tipo: 'Personal',
            fecha: '2026'
        }
    ]
}

console.log(yo);