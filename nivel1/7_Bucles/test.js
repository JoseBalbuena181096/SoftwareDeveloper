// let num = 3;

// while (num < 6) {
//   // esto se va a trabar acá
//   console.log("El valor de num es", num);
//   num++;
// }

// console.log("Esto nunca se va a ejecutar");

const usuarios = [
  {
    id: "hj12ds92j",
    nombreCompleto: "Juan Pérez",
    ciudad: "Buenos Aires",
    mascotas: ["Firulais", "Michi"],
    email: "juan.perez@gmail.com",
  },
  {
    id: "kf98as71p",
    nombreCompleto: "Ana Gómez",
    ciudad: "Bogotá",
    mascotas: [],
    email: "ana.gomez@gmail.com",
  },
  {
    id: "mn63tr45q",
    nombreCompleto: "Carlos Ramírez",
    ciudad: "Ciudad de México",
    mascotas: ["Max", "Luna"],
    email: "carlos.ramirez@gmail.com",
  },
  {
    id: "zx75lg29v",
    nombreCompleto: "María Torres",
    ciudad: "Oaxaca",
    mascotas: ["Bobby"],
    email: "maria.torres@gmail.com",
  },
  {
    id: "qw82hj64k",
    nombreCompleto: "Pedro Fernández",
    ciudad: "Lima",
    mascotas: [],
    email: "pedro.fernandez@gmail.com",
  },
  {
    id: "ab39kl72f",
    nombreCompleto: "Lucía Martínez",
    ciudad: "Buenos Aires",
    mascotas: ["Simba"],
    email: "lucia.martinez@gmail.com",
  },
  {
    id: "yt48mn90z",
    nombreCompleto: "Jorge Rojas",
    ciudad: "Bogotá",
    mascotas: ["Nina", "Rocky"],
    email: "jorge.rojas@gmail.com",
  },
  {
    id: "uv91pq64w",
    nombreCompleto: "Sofía Herrera",
    ciudad: "Ciudad de México",
    mascotas: [],
    email: "sofia.herrera@gmail.com",
  },
  {
    id: "op54xs31c",
    nombreCompleto: "Diego López",
    ciudad: "Oaxaca",
    mascotas: ["Kira", "Tom"],
    email: "diego.lopez@gmail.com",
  },
  {
    id: "gh76bn83d",
    nombreCompleto: "Valentina Castro",
    ciudad: "Lima",
    mascotas: ["Coco"],
    email: "valentina.castro@gmail.com",
  },
];

// // iniciamos esto en 0
// let i = 0;

// while (i < usuarios.length) {
//   // cada vez que esto se ejecuta
//   // el while va a chequear si i es menor
//   // a la cantidad de posiciones de nuestro array
//   // si es menor, va a ejecutar todo el bloque
//   // una vez más

//   // acá usamos la misma lógica pero en vez
//   // de escribir el número de posición
//   // usamos i para que ir recorriendo
//   // una a una cada posición
//   console.log("i vale", i);
//   if (usuarios[i].mascotas.length > 0) {
//     console.log(`El usuario ${usuarios[i].nombreCompleto} tiene mascotas.`);
//   }
//   // modificamos i para que sea igual a si mismo +1
//   i++;
// }

// let i = 0;

// do {
//   if (usuarios[i].mascotas.length > 0) {
//     console.log(`El usuario ${usuarios[i].nombreCompleto} tiene mascotas.`);
//   }
//   i++;
// } while (i < usuarios.length);

// const numeros = [3, 90, 12, 6, 42, 21, 54, 15];

// for (const n of numeros) {
//   console.log(n);
// }

// for (const user of usuarios) {
//   if (user.mascotas.length > 0) {
//     console.log(`El usuario ${user.nombreCompleto} tiene mascotas.`);
//   }
// }

// for (const user of usuarios) {
//   if (user.mascotas.length > 0) {
//     console.log(`El usuario ${user.nombreCompleto} tiene mascotas.`);
//   }
// }

// const numeros = [3, 8, 12, 5, 9, 20, 7, 15];

// for (const pos in numeros) {
//   console.log(numeros[pos]);
// }

// const mascotasPorUsuario = {
//   hj12ds92j: 2,
//   kd49fs27a: 1,
//   lk34mc92z: 3,
//   mn73gb45d: 0,
//   qw84kp12x: 4,
//   pr12mc97v: 1,
//   xb49wd28y: 2,
//   pd20zy98r: 0,
//   cn59hd21s: 5,
//   vd28ka34o: 3,
// };

// let idConMasMascotas = null;
// let maxMascotas = 0;

// for (const id in mascotasPorUsuario) {
//   if (mascotasPorUsuario[id] > maxMascotas) {
//     maxMascotas = mascotasPorUsuario[id];
//     idConMasMascotas = id;
//   }
// }

// console.log(
//   `El ID con más mascotas es ${idConMasMascotas}, con ${maxMascotas} mascotas.`
// );

for (let i = 0; i < usuarios.length; i++) {
  const u = usuarios[i];

  if (u.mascotas.length > 0) {
    console.log(`El usuario ${u.nombre} tiene mascotas.`);
  }
}
