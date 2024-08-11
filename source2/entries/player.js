const { Render } = require("../render");
const Bullet = require("./Bullet");


class Player {
  constructor() {
    this.x = 0;
    this.y = 5;
  }
  move({field, config},deltaX, deltaY) {
    field[this.y][this.x] = field[this.y][this.x].filter((el, i, arr) => {
      if (el === this) {
        i = arr.length;
        return false;
      }
      return true;
    });
    this.x = Math.max(Math.min((this.x + deltaX), 9), 0);
    this.y = Math.max(Math.min((this.y + deltaY), 9), 0);
    field[this.y][this.x].unshift(this)
    if(field[this.y][this.x].some((el) => el.constructor.name === 'Enemy')) {

      this.die({ field, config })
    }

  }
  die({field, config: { skins }}){
    skins.Player = '💀'
    Render.log({ field, config: { skins } })
    console.log('wot i vse')
    process.exit()
  }
  shoot({field, props}){
    const bullet = new Bullet(this.x, this.y)
    props.push(bullet)
    field[this.y][this.x].push(bullet)
  }
}
module.exports = Player