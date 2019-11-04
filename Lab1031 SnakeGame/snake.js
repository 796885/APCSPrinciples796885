class Snake{
constructor(x, y, dx, dy, c, bodyArr){
  this.loc.x = createVector(x,y);
  this.clr = c;
  this.bodyArr = bodyArr;

}

run(){
  this.update();
  this.render();
}

update(){
  this.bodySegments[0].x = this.loc.x;
     this.bodySegments[0].y = this.loc.y;

     for(var i = this.bodySegments.length - 1; i >= 1; i--){
         this.bodySegments[i].x = this.segments[i - 1].x;
         this.bodySegments[i].y = this.segments[i - 1].y;
       }

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

render(){
  fill(255,240,76);
  var row = Math.floor(this.loc.x/w);
  var col = Math.floor(this.loc.y/w);
  rect(row*w, col*w + header_height, 10, 10);
  rect(this.loc.x, this.loc.y, w, w);
    for(var i = 1; this.bodySegments.length -1; i++){
      rect(this.bodySegments[i].x, this.bodySegments[i].y, w, w);
    }
}
