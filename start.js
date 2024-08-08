const Game = require("./src/controllers/Game.js");
const startinquirer = require('./modules/inquirer.js')


async function start() {


await startinquirer()
const game = new Game(10, 300, "🛸");

game.play();
}
start()