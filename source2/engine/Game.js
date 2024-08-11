const { Enemy, Player } = require('../entries');
const { Render } = require('../render');
const keypress = require('keypress')
class Game {
  /*prettier-ignore*/
  constructor(playerSkin = '🌻', enemySkin = '🧟', IndexOfDifficulty = 1, fieldSize = 10) {
    this.config = {
      skins: {Player: playerSkin, Enemy: enemySkin, Bullet: '🌞'},
        fieldSize: fieldSize,
        enemySpawnSpeed: IndexOfDifficulty * 700,
        enemySpeed: IndexOfDifficulty * 500,
        enemyPropSpeed: IndexOfDifficulty * 200,
    }
    this.field = new Array(fieldSize).fill().map(() => new Array(fieldSize).fill().map(() => new Array()));
    this.player = new Player();
    this.field[5][0].push(this.player)
    this.enemies = []
    this.props = []
  }

  setupInput() {
    keypress(process.stdin);

    process.stdin.on("keypress", (ch, key) => {
      if (key) {
        if (key.name === "a") {
          this.player.move(this,-1,0);
        } else if (key.name === "d") {
          this.player.move(this,+1,0);
        } else if (key.name === "w") {
          this.player.move(this,0,-1);
        } else if (key.name === "s") {
          this.player.move(this,0,+1);
        } else if (key.name === "space") {
          this.player.shoot(this);
        } else if (key.name === "e") {
          process.exit();
        } else if (key.ctrl && key.name === "c") {
          process.exit();
        }
      }
    });

    process.stdin.setRawMode(true);
    process.stdin.resume();
  }

  start() {
    if (arguments[0]) {
      setInterval(() => Render.debug(this, arguments), 50);
    } else {
      setInterval(() => Render.log(this), 50);
    }
    this.setupInput()


    setInterval(() => {this.enemies.push(new Enemy(this))}, this.config.enemySpawnSpeed)
    setInterval(() => this.enemies.forEach((el) => el.moveLeft(this)), this.config.enemySpeed)
    setInterval(() => this.props.forEach((el) => el.moveRight(this)), 100)
    return this;
  }
  intervals() {

  }

  fieldGenerator() {}
}

module.exports = Game;
