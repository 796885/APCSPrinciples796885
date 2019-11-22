class Food{

  constructor (x, y, clr){
    this.loc = createVector(x,y);
    this.clr = clr;
  }

  run(){//runs the food objects
    this.render();
    this.update();
  }

  render(){//what food looks like
    fill(255,255,255);
    rect(this.loc.x, this.loc.y, 30, 30);
  }

  update(){//where food shows up once "eaten"
    if(snake.head.x === this.loc.x &&
      snake.head.y === this.loc.y){
        this.loc.x = Math.floor(random(0,79))*30;
        this.loc.y = Math.floor(random(0,79))*30;
      }

    }



  }
