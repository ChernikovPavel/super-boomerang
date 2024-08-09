class Bullet {
  constructor(position) {
    this.fire = "🌞";
    this.position = { x: position.x, y: position.y };
  }

  move() {
    this.position.y--;
  }

  isOutOfField() {
    return this.y < 0;
  }
}

module.exports = Bullet;
