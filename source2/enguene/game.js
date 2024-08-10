const {Enemy, Player} = require('../entries')
const {Render} = require('../render')
class Game {
  /*prettier-ignore*/
  constructor(playerSkin = '🌻', enemySkin = '🧟', IndexOfDifficulty = 1, fieldSize = 10) {
    this.config = {
        enemySpeed: IndexOfDifficulty * 500,
        enemyPropSpeed: IndexOfDifficulty * 200,
    }
    this.field = this.fieldGenerator(fieldSize);
    this.render = new Render({Player: playerSkin, Enemy: enemySkin})
    this.player = new Player();
    this.enemies = [new Enemy(), new Enemy(), new Enemy()]
    this.props = []
  }
  start() {
    return this;
  }
  intervals(){
    setInterval()
    setInterval()
    return this
  }
}

module.exports = Game;
