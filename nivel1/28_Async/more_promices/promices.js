// function traeData(cb) {
//   setTimeout(() => {
//     cb("Data de internet");
//   }, 1000);
// }

// function otraData(queDato, cb) {
//   setTimeout(() => {
//     cb("Otra data " + queDato + " ");
//   }, 1000);
// }

// function main() {
//   console.log("a");
//   traeData((data) => otraData("Jijij", (data) => console.log(data)));
//   console.log("c");
// }

// main();

function promiceData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data de internet");
    }, 1000);
  });
}

function otraData(queDato) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Otra data " + queDato + " ");
    }, 1000);
  });
}

function main() {
  console.log("a");
  promiceData().then((data) =>
    otraData("Jijij").then((data) => console.log(data))
  );
  console.log("c");
}

main();
