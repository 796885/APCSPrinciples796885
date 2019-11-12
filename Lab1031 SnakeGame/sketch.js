//  Natalie Hallmann
// 	10/31 SnakeGame
//  This is a comment
//  The setup function function is called once when your program begins
var bodySegments = [];
var snake, score, header_height;
var Snake
var head, body

function setup() {
  var cnv = createCanvas(800, 600);
  cnv.position((windowWidth-width)/2, 30);
  background(179, 54, 54);
  header_height = 800;
  newGame();
}

//  The draw function is called @ 30 fps
function draw(){
  background(179, 54, 54);
  snake.run();
  food.render();
  if (checkTangled === true){
    newGame();
  }
  if(getFood === true){
    startNewRound();
  }
  function checkTangled(){
    return snake.tangled();

  }
}

function startNewRound(){

}

function newGame(){
  score=0;
  snake= new Snake (random(0,200), random(0,200), 40, 40, head, body, color(50,50,130));
  food= new Food (random(0,200), random(0,200), 40, 40, color(200,250,65))
}

function keyPressed(){
  if(keyCode=== UP_ARROW){
  }
  if(keyCode=== DOWN_ARROW){
  }
  if(keyCode=== LEFT_ARROW){
  }
  if(keyCode=== RIGHT_ARROW){
  }
}

function run(){
  snake.update();
  snake.render();
}

function getFood(){

}
function update(){
  if(keyCode === UP_ARROW){
    head.position(5,5);
  }

}
function loadObjects(n){
  snake = new Snake (Math.floor(Math.random()*26)*30,Math.floor(Math.random()*26)*30,30, color(227, 69, 7));
    for (var j = 0; j < n; j++){
      food[j] = new Food (Math.floor(Math.random()*26)*30,Math.floor(Math.random()*26)*30, color(70));
      }
  }

  function runObjects(){
      snake.run();
  }

  tangled(){
      if(snakeHead.loc.x === this.loc.x && snakeHead.loc.y === this.loc.y){
        this.loc.x = this.cubeWidth * int(random(0,800/this.cubeWidth));
        this.loc.y = this.cubeWidth * int(random(0,800/this.cubeWidth));
        loadObjects(1);
      }
  }

}
