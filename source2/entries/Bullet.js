class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  moveRight({ field, props, enemies, config: { fieldSize } }) {
    const cell = field[this.y][this.x]
    cell.splice(cell.indexOf(this), 1);

    if (this.x >= fieldSize - 1) {
      props.splice(props.indexOf(this), 1);
      return;
    }

    if (
      this.killua(cell, props, enemies, this) &
      this.killua(field[this.y][this.x + 1], props, enemies, this)
    ) {
      this.x += 1;
      field[this.y][this.x].push(this);
    }
  }

  killua(cell, props, enemies) {
    for (let i = 0; i < cell.length; i++) {
      if (cell[i].constructor.name === 'Enemy') {
        enemies.splice(enemies.indexOf(cell[i]), 1);
        cell.splice(i, 1);
        props. splice(props.indexOf(this), 1);
        return false;
      }
    }
    return true;
  }
}
module.exports = Bullet;
