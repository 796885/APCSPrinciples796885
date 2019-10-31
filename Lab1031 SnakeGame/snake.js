class snake
constructor(x, y, dx, dy, c, bodyArr){
  this.loc.x = createVector(x,y);
  this.clr = c;
  this.bodyArr = bodyArr;
  }
}

update(){
  this.loc.add(this.vertical);
}

render(){
  fill(255,240,76);
  var row = Math.floor(this.loc.x/w);
  var col = Math.floor(this.loc.y/w);
  rect(row*w, col*w + header_height, 10, 10);
}
