const { Render } = require('../render');
const Player = require('./Player');

class Enemy {
  constructor({ enemies, config: { fieldSize } }) {
    this.x = fieldSize - 1;
    this.y = Math.floor(Math.random() * fieldSize);
  }
  moveLeft({ field, enemies, config }) {
    field[this.y][this.x] = field[this.y][this.x].filter((el, i, arr) => {
      if (el === this) {
        i = arr.length;
        return false;
      }
      return true;
    });
    if (!this.x) {
      enemies.splice(enemies.indexOf(this), 1);
      return;
    }
    this.x -= 1;
    if (field[this.y][this.x].some((el) => el.constructor.name === 'Player')) {
      this.die({ field, config });
    }
    field[this.y][this.x].push(this);
  }

  die({ field, config: { skins } }) {
    skins.Player = '💀';
    Render.log({ field, config: { skins } });
    console.log('wot i vse');
    process.exit();
  }
}
module.exports = Enemy;
