class Player {
  constructor(fieldSize, score, symbol) {
    this.position = { x: Math.floor(fieldSize / 2), y: fieldSize - 1 };
    this.symbol = symbol;
    this.score = score;
  }

  moveLeft() {
    if (this.position.x > 0) {
      this.position.x--;
    }
  }

  moveRight(fieldSize) {
    if (this.position.x < fieldSize * 2 - 1) {
      this.position.x++;
    }
  }

  moveTop() {
    if (this.position.y < 9) {
      this.position.y--;
    }
  }

  moveBottom() {
    if (this.position.y < 9) {
      this.position.y++;
    }
  }

  die() {
    console.log("Game Over!");
    console.log(`Вы заработали ${this.score} очков!`);
    process.exit();
  }
}

module.exports = Player;
