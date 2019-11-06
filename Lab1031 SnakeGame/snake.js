class Snake{
constructor(x, y, dx, dy, c, bodyArr){
  this.loc= createVector(x,y);
  this.loc= createVector(0,0);
  this.clr = c;
  this.bodyArr = bodyArr;

}

run(){
  this.update();
  this.render();
}//end run function

update(){
  this.bodySegments[0].x = this.loc.x;
     this.bodySegments[0].y = this.loc.y;

     for(var i = this.bodySegments.length - 1; i >= 1; i--){
         this.bodySegments[i].x = this.segments[i - 1].x;
         this.bodySegments[i].y = this.segments[i - 1].y;
       }//end update

  this.loc.add(this.vel);
  this.loc.x = constrain(this.loc.x, 0, width-w);
  this.loc.y = constrain(this.loc.y, 0, width-w);

  //after snake eats food
  if(this.loc.dist(food.loc) === 0){
    this.bodySegments.push(createVector(0,0));
    for(i = 0; i < this.bodySegments.length; i++){
      if(food.loc != this.bodySegments[i].loc){
        food.loc = createVector(width / 2 - Math.floor(Math.random()*16-8)*w, height / 2+Math.floor(Math.random()*12-6)*w);
      }
    }
  }
}
}

render(){
  fill(this.clr);
  var row = Math.floor(this.loc.x/this.w);
  var col = Math.floor(this.loc.y/this.w);
  rect(row*this.w, col*this.w + header_height, 10, 10);
  rect(this.loc.x, this.loc.y, this.w, this.w );
  for(var i = 1; i <= bodySegments.length -1; i++){
    rect(bodySegments[i].x, bodySegments[i].y, this.w, this.w);
  }

   keyPressed(){
    if(keyCode === UP_ARROW){
      this.loc.y = this.loc.y - this.w;
    }
    if(keyCode === DOWN_ARROW){
      this.loc.y = this.loc.y + this.w;
    }
    if(keyCode === LEFT_ARROW){
      this.loc.x = this.loc.x - this.w;
    }
    if(keyCode === RIGHT_ARROW){
      this.loc.x = this.loc.x + this.w;
    }

  tangled(){
      //loop checks each segment
      for(i = 0; i < bodySegments.length; i++){
        //if stament checking if the locations are equal to each other
        if(this.loc.x == bodySegments[i].x && this.loc.y == bodySegments[i].y){
          console.log("Game Over");
        }
      }
    }
