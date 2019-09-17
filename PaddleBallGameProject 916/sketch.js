//  Natalie Hallmann
// 	PaddleBall Game Project 9/16
//  This is a comment
//  The setup function function is called once when your program begins
var balls=[];
var paddle;
var gameState=1;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
loadObjects(5);

}

//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5);
  runObjects();


    if(gameState===1){
      startGame();
    }else if(gameState===2){
      playGame();
    }else if(gameState===3){
      endGame();
    }

}
function loadObjects(n){
  paddle= new Paddle(50,400,95,95);
  for(var i=0; i< n; i++){
    balls[i] =new Ball(random(width),0, random(-5,5),random(-5,5));
  }
}
function runObjects(){
  paddle.run();
  for(var i=0; i<balls.length; i++){
    balls[i].run();
  }
}
function startGame(){
textSize(75);
fill(150,150,150);
textAlign(CENTER);
text("Paddle Ball",200,400);

}
function playGame(){
  runObjects();

}
function endgame(){

}
