const {
  writeScore,
  writeBestScore,
  writeTotalScore,
  writeTopScoreResult,
} = require("../../modules/sequelizer-for-inquirer");

class Player {
  constructor(fieldSize, score, symbol, userId, scoreId) {
    this.position = { x: Math.floor(fieldSize / 2), y: fieldSize - 1 };
    this.symbol = symbol;
    this.userId = userId; // Player`s id in DB
    this.scoreId = scoreId; // Score`s id in DB
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

  async die() {
    const wtitedScore = await writeScore(this.scoreId, this.score);
    const bestScore = await writeBestScore(this.userId);
    const totalScore = await writeTotalScore(this.userId);
    const topScoreResult = await writeTopScoreResult();
    console.log(`\nВ этой игре Вы заработали ${this.score} очков.`);
    console.log(`\nВаш лучший результат - ${bestScore} очков за игру!`);
    console.log(`\nСуммарно за все игры вы заработали ${totalScore} очков.`);
    console.log(
      `\nСуммарно за все игры вы заработали ${topScoreResult} очков.\n\n`
    );
    process.exit();
  }
}

module.exports = Player;
