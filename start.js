const Game = require("./src/controllers/Game.js");
const startinquirer = require("./modules/inquirer.js");

async function start() {
  const myArgs = await startinquirer(); // Get userId and scoreId

  const game = new Game(10, 300, "🛸", myArgs[0], myArgs[1]); // Add userId and scoreId

  game.play();
}

start();
