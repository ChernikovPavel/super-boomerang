class Game {
  /*prettier-ignore*/
  constructor(playerSkin = 'p', enemySkin = 'e', IndexOfDifficulty, fieldSize = 10) {
    this.config = {
        enemySpeed: IndexOfDifficulty * 500,
        enemyPropSpeed: IndexOfDifficulty * 200,
    }
    this.field = this.fieldGenerator(fieldSize);
    this.enemySkin = enemySkin;
    this.player = new Player(playerSkin);
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
