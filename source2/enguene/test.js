class Sayer{
    constructor(text){
        this.text = text
    }
    say(){
        console.log(this.text);
        return this
    }
}
module.exports = Sayer