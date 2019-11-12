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


  update(){
    if(snake.head.x === this.loc.x &&
      snake.head.y === this.loc.y){
        this.loc.x = Math.floor(random(0,79))*30;
        this.loc.y = Math.floor(random(0,79))*30;
      }

    }
  }
