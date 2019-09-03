class Ball {
  constructor(x, y, dx, dy){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.acc= createVector(0,1);
    this.clr = color(random(255), random(255), random(255));

  }

  run(){
    this.checkedges();
    this.update();
    this.render();
  }

  checkedges(){
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.x > width){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.y < 0){
      this.vel.y = -this.vel.y;
    }
    if(this.loc.y > height){
      this.vel.y = -this.vel.y;
      this.loc.y = height -2;
    }

  }
  update(){
    this.vel.add(this.acc);

this.loc.add(this.vel);

this.acc=p5.Vector.sub(mainball.loc,this.loc);
this.acc.normalize();
this.acc.mult(0.5);

  }

  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y,11,11);

    this.vel.add(this.acc);
    this.vel.limit(5);
    this.loc.add(this.vel);
  }
}
