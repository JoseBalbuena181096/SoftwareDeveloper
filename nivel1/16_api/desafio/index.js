const process = require("process");

const hasArgs = (inputTerminal) => {
  const args = {};
  for (let i = 1; i < inputTerminal.length; i++) {
    //console.log(inputTerminal[i]);
    if (inputTerminal[i].includes("--")) {
      console.log(inputTerminal[i]);
      args[inputTerminal[i]] = inputTerminal[++i];
    }
  }
  console.log(args);
};

function main() {
  hasArgs(process.argv);
}

main();
