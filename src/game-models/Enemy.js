class Enemy {
  constructor(fieldSizeX) {
    this.skin =  "🧟"
    this.generateStartPosition(fieldSizeX);
  }

  generateStartPosition(fieldSizeX) {
    this.position = { x: 0, y: 0 };
    this.position.x = Math.ceil(Math.random() * fieldSizeX - 1);
  }

  moveDown() {
    this.position.y++;
  }

  die() {
    this.position = "?";
    console.log("Enemy is dead!");
  }
}

module.exports = Enemy;
