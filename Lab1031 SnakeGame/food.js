class food{
  constructor(x,y,c){
    this.loc.x = createVector(x,y);
    this.clr = c;
  }

render(){
  fill(240,100,34);
  rect(this.loc.x, this.loc.y, this.w, this.w);
  }

run(){
this.update
this.render
}

tangled(){
    if(snakeHead.loc.x === this.loc.x && snakeHead.loc.y === this.loc.y){
      this.loc.x = this.cubeWidth * int(random(0,800/this.cubeWidth));
      this.loc.y = this.cubeWidth * int(random(0,800/this.cubeWidth));
      loadObjects(1);
    }
}

}
