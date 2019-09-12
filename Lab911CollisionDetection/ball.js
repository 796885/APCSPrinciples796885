class Ball {
  constructor(x, y, dx, dy, id){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0,0);
    this.clr = color(random(255), random(255), random(255));
    this.w=25
  }

  run(){
    this.checkedges();
    this.update();
    this.render();

  }

  checkedges(){
    if(this.loc.x < 0){
      yhis.vel.x= -this.vel.x
    }
    if(this.loc.x> width){
      this.vel.x= -this.vel.x
    }
    if(this.loc.y < 0){
      yhis.vel.y= -this.vel.y
    }
    if(this.loc.y> height){
      this.vel.y= -this.vel.y
    }
  }
  update(){
this.vel.add(this.acc);
this.vel.add(this.acc);
    }
  }
  render(){

    fill(this.clr);
    ellipse(this.loc.x, this.loc.y,70,70);
  }
  IsColliding(){
    if(this.loc.x > paddle.loc.x &&
    this.loc.x < paddle.loc.x + paddle.w &&
  this.loc.y > paddle.loc.y &&
this.loc.y < paddle.loc.y + paddle.h){
  return true;
} else{
  return false;
}
  }
  Bounce
}

}//  +++++++++++++++++++++++++++++++++++  End Ball Class