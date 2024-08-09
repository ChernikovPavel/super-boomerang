class Enemy {
constructor(){
    this.skin = "👾"
    this.x = 0
    this.y = 0
    this.posChanged = false
}
    moveHorizontal(){
        this.x += Math.random() > .5 ? 1 : -1
    }

}