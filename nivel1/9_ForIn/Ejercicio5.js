/*
Usuarios por video
Desafío
El objetivo de este ejercicio es entender cuales usuarios vieron cada uno de los videos que están planteados en el ejemplo. El resultado esperado es un objeto con este formato.

const userByVideosUrl = {
  "https://www.youtube.com/watch?v=IC4c_XOCDGw": {
    user1: "2025-03-10",
    user2: "2025-03-11",
  },
  "https://www.youtube.com/watch?v=aMFSi-Imcz8": {
    user1: "2025-03-12",
    user3: "2025-03-20",
  },
  // etc
};


Para generar este objeto vamos a partir de otro que tiene los videos vistos por cada usuario y usando dos for...in anidados vamos a llegar al resultado esperado.*
*/

const watchedVideosByUser = {
  user1: {
    "https://www.youtube.com/watch?v=IC4c_XOCDGw": "2025-03-10",
    "https://www.youtube.com/watch?v=aMFSi-Imcz8": "2025-03-12",
    "https://www.youtube.com/watch?v=fQy38V22E5s": "2025-03-14",
  },
  user2: {
    "https://www.youtube.com/watch?v=IC4c_XOCDGw": "2025-03-11",
    "https://www.youtube.com/watch?v=FoDnWun0gPI": "2025-03-13",
    "https://www.youtube.com/watch?v=cObGu3KanLc": "2025-03-15",
  },
  user3: {
    "https://www.youtube.com/watch?v=9_0-UXCx28U": "2025-03-16",
    "https://www.youtube.com/watch?v=I12QC4pwP1Q": "2025-03-18",
    "https://www.youtube.com/watch?v=aMFSi-Imcz8": "2025-03-20",
  },
  user4: {
    "https://www.youtube.com/watch?v=IC4c_XOCDGw": "2025-03-21",
    "https://www.youtube.com/watch?v=fQy38V22E5s": "2025-03-23",
    "https://www.youtube.com/watch?v=FoDnWun0gPI": "2025-03-25",
  },
  user5: {
    "https://www.youtube.com/watch?v=cObGu3KanLc": "2025-03-26",
    "https://www.youtube.com/watch?v=9_0-UXCx28U": "2025-03-28",
    "https://www.youtube.com/watch?v=I12QC4pwP1Q": "2025-03-30",
  },
  user6: {
    "https://www.youtube.com/watch?v=IC4c_XOCDGw": "2025-04-01",
    "https://www.youtube.com/watch?v=aMFSi-Imcz8": "2025-04-03",
    "https://www.youtube.com/watch?v=fQy38V22E5s": "2025-04-05",
  },
  user7: {
    "https://www.youtube.com/watch?v=FoDnWun0gPI": "2025-04-06",
    "https://www.youtube.com/watch?v=cObGu3KanLc": "2025-04-08",
    "https://www.youtube.com/watch?v=9_0-UXCx28U": "2025-04-10",
  },
  user8: {
    "https://www.youtube.com/watch?v=I12QC4pwP1Q": "2025-04-11",
    "https://www.youtube.com/watch?v=IC4c_XOCDGw": "2025-04-13",
    "https://www.youtube.com/watch?v=aMFSi-Imcz8": "2025-04-15",
  },
  user9: {
    "https://www.youtube.com/watch?v=fQy38V22E5s": "2025-04-16",
    "https://www.youtube.com/watch?v=FoDnWun0gPI": "2025-04-18",
    "https://www.youtube.com/watch?v=cObGu3KanLc": "2025-04-20",
  },
  user10: {
    "https://www.youtube.com/watch?v=9_0-UXCx28U": "2025-04-21",
    "https://www.youtube.com/watch?v=I12QC4pwP1Q": "2025-04-23",
    "https://www.youtube.com/watch?v=IC4c_XOCDGw": "2025-04-25",
  },
};

const usersByVideoUrl = {};

for (const userId in watchedVideosByUser) {
  for (const videoUrl in watchedVideosByUser[userId]) {
    // [Completar]
    usersByVideoUrl[videoUrl] = usersByVideoUrl[videoUrl] || {};
    usersByVideoUrl[videoUrl][userId] = watchedVideosByUser[userId][videoUrl];
  }
}
console.log(usersByVideoUrl);
