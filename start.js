const Game = require('./src/controllers/Game.js');
const startinquirer = require('./modules/inquirer.js');
const settingsPromt = require('./modules/inquirer.js');

async function start() {
  try {

    const myArgs = await startinquirer().catch((r) => process.exit()); // Get userId and scoreId
    console.log(myArgs);
    //   const dif = await settingsPromt()
    const game = new Game(10, myArgs[2], '🌻', myArgs[0], myArgs[1]); // Add userId and scoreId
    //   await game.play();

  } catch (error) {
    process.exit();
  }
}
start();
