//  Natalie Hallmann
// 	10/31
//  This is a comment
//  The setup function function is called once when your program begins
var w, snake;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(200, 5, 240);
  fill(20, 30, 150);

  var w = cnv.width/height;

}

//  The draw function is called @ 30 fps
function draw() {
 snake.render();
 food.run();
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
  snake= new Snake(random(0,200), random(0,200), 40, 40, head, body, color(50,50,130));
  food= new Food(random(0,200), random(0,200), 40, 40, color(200,250,65))
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

function run(){
  snake.update();
  snake.render();
}

function getFood(){

}
}
