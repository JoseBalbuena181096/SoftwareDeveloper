function checkIfHaveAWord(text, word) {
  return text.includes(word);
}

function main() {
  const word = "Hello";
  const number = 1;
  console.log(typeof number);
  console.log(typeof word);

  var edad = 22;
  console.log(typeof edad);

  const text = "Hello World my love";
  console.log(checkIfHaveAWord(text, "my"));

  let price = 33.33333333;
  console.log(price.toFixed(2));

  console.log(Number.parseInt("123") + 1);
}

main();
