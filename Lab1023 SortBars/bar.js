class Bar {
  constructor(location){
    this.loc = location;
    this.w= barWidth;
    this.h= barheight - this.loc.y;

  }
  render(){
    fill(202,50,100);
    rect(this.loc.x, this.loc.y, this.w, this.h);
  }
}

run(){
  this.render;
}
