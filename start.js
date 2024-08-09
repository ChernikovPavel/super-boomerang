const Game = require("./src/controllers/Game.js");
const startinquirer = require('./modules/inquirer.js')




async function start() {


const dif = await startinquirer()
const game = new Game(10, dif.difficulty, "🛸");

game.play();
}
start()
//console.log('💂');
