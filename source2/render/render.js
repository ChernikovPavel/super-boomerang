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

  static debug(
    { field, config, config: { skins }, enemies, player, props },
    args,
    isNeededToRenderField
  ) {
    console.clear();
    if (isNeededToRenderField) {
      console.log(this.toStr(field, skins, '. '));
    }
    args.forEach((el) => {
      if (el === 'field') {
        console.table(field);
      } else {
        console.log(eval(el));
      }
    });
  }
}

module.exports = Render;
