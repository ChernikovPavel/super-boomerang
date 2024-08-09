const {EOL} = require('os')
class Render{
    constructor(skins){
        this.skins = skins
        this.str = ''
    }
    toStr(fieldArrayArray){
        this.str = ''
        fieldArrayArray.forEach((fieldArray) => {
            fieldArray.forEach((cell) => this.str += cell === null ? ' ' : this.skins[cell.constructor.name])
        this.str += EOL
    });
    return this
    }
    toConsole(){
        console.clear()
        console.log(this.str)
    }
}

module.exports = Render