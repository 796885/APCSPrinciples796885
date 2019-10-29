class Bar {
  constructor(x,y,w,h,c) {
    this.loc = createVector(x,y);
    this.w= w;
    this.h= h;

  }
  render(){
    fill(202,50,100);
    rect(this.loc.x, this.loc.y, this.w, this.h);
  }


run(){
  this.render();
}
set(i){
  this.loc.x=i*barWidth;
}
}
