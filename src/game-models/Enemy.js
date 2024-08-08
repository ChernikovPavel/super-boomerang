class Enemy {
  constructor(fieldSizeX) {
    this.generateSkin();
    this.generateStartPosition(fieldSizeX);
  }

  generateSkin() {
    const skins = [
      "👾",
      "💀",
      "👹",
      "👻",
      "👽",
      "👿",
      "💩",
      "🤡",
      "🤺",
      "🧛",
      "🧟",
      "🎃",
    ];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  generateStartPosition(fieldSizeX) {
    this.position = { x: 0, y: 0 };
    this.position.x = Math.ceil(Math.random() * fieldSizeX * 2 - 1);
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
