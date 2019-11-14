class Snake{
  constructor(x, y, w, c){
    this.head =createVector(x,y);
    this.vel = createVector(0,0);
    this.w = 30;
    this.clr = c;
    this.body = [];

  }// end constructor

  run(){
    this.update();
    this.render();
  } //end run

  update(){
    this.keyPressed();
     for(var i = 0; i< food.length; i++){
     if(this.head.x === food[i].loc.x &&
        this.head.y === food[i].loc.y){
          this.loadSegment();
          food.push(new Food (Math.floor(Math.random()*25)*30,Math.floor(Math.random()*25)*30, color(70)));
          score++;
      }
    }
     // update for body
     for (i = this.body.length-1; i>=0; i--){
     if (i >= 1){
       this.body[i].x = this.body[i-1].x;
       this.body[i].y = this.body[i-1].y;
    }  if (i === 0){
       this.body[i].x = this.head.x;
       this.body[i].y = this.head.y;
     }
  }

}//end update

  render(){//render head and the body
    fill(this.clr);
    rect(this.head.x, this.head.y, this.w, this.w);
    for(var i = 0; i < this.body.length; i++){
      rect(this.body[i].x, this.body[i].y, 30, 30);
   }
 }

  loadSegment(){
    this.body.push(createVector(this.head.x, this.head.y));
  }

  tangled(){
    //loop checking segments
    for(var i = 0; i < this.body.length; i++){
      if(this.head.x === this.body[i].x || this.head.y === this.body[i].y){
      }
    }
  }

   keyPressed(){ //how player moves snake around
     this.head.add(this.vel);
    if(keyCode === UP_ARROW){
        this.vel.x = 0;
        this.vel.y = -30;
    }
    if(keyCode === DOWN_ARROW){
      this.vel.x = 0;
      this.vel.y = 30;

  //
      }
    if(keyCode === LEFT_ARROW){
      this.vel.y = 0;
      this.vel.x = -30;

      }
    if(keyCode === RIGHT_ARROW){
      this.vel.y = 0;
      this.vel.x = 30


      }
  }//end

}//  +++++++++++++++++++++++++++++++++++++++++++  end Snake
