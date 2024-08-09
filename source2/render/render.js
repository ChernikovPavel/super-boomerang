const {EOL} = require('os')
class Render{
    constructor(skins){
        this.skins = skins
        this.str = ''
    }
    toStr(fieldArrayArray){
        let str = ''
        fieldArrayArray.forEach((fieldArray) => {
            fieldArray.forEach((cell) => str += cell === null ? ' ' : this.skins[cell.constructor.name])
        str += EOL
    });
    return str
    }
    toConsole(fieldArrayArray){
        console.clear()
        console.log(this.toStr(fieldArrayArray))
    }
}

module.exports = Render