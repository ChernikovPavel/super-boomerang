class Player {
  constructor() {
    this.x = 5;
    this.y = 10;
    this.posChanged = false;
  }
  move(deltaX, deltaY) {
    this.x += deltaX;
    this.y += deltaY;
    this.posChanged = true;
  }
  die(){
    console.log('wot_i_vse')
  }
}
