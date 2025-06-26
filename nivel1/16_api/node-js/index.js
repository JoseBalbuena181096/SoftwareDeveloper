const cosas = require("./cosas");
const http = require("http");
const fs = require("fs");
const process = require("process");

// function main() {
//   //console.log(cosas.getCosas());
//   //console.log(http);
//   fs.readFile("./cosas.txt", (err, data) => {
//     if (err) {
//       throw err;
//     } else {
//       const text = data.toString();
//       console.log(text.slice(0, 5));
//     }
//   });
// }

function main() {
  console.log(process.argv[3]);
}

main();
