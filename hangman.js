const readline = require('readline');

const words = require("./data.json").words;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// strings returned in console
const title = `
      ___

  H A N G M A N
      ___

`

// clear console on start
console.clear()

console.log(title)

function startGame () {
  // rl.question("Ready to play? (y/n)")
}
