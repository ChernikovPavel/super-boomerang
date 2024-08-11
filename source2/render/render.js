const { EOL } = require('os');
class Render {
  static toStr(array, skins, filler) {
    let str = '';
    for (let i = 0; i < array.length; i++) {
      str += EOL;
      array[i].map(([cell]) => {
        str += cell === undefined ? filler : skins[cell.constructor.name];
      });
    }
    return str;
  }
  static log({ field, config: { skins } }) {
    console.clear();
    console.log(this.toStr(field, skins, '  '));
  }
  static debug({ field, config: { skins }, enemies, player, props }, args) {
    console.clear();
    console.log(this.toStr(field, skins, '. '));
    // console.table(field);
  }
}

module.exports = Render;
