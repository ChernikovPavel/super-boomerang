class Difficult {
  constructor(difficult = 100) {
    this.difficult = difficult;
    this.fieldSizeCoefficient = difficult / 100;
    this.enemySpeed = 5 * difficult;
    this.enemyCreateSpeed = 5 * difficult;
  }
}

module.exports = Difficult;
