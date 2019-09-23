//  Natalie Hallmann
// 	PaddleBall Game Project 9/16
//  This is a comment
//  The setup function function is called once when your program begins
var balls=[];
var paddle;
var gameState=1;
//var gameState=3;
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
  //runObjects();


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

  //PaddleBall Text
  fill(150,150,150);
  textAlign(CENTER);
  textSize(80);
  text("Paddle Ball",400,300);

  //Score Text
  textSize(40)
  text("SCORE:0",100,790);

  //Easy Button
  textSize(20);
  fill(200,0,0);
  rect(120,460,150,50);
  fill(5,5,5);
  text("Easy",200,500);

  //medium button
  fill(0,200,0);
  rect(325,460,150,50)
  fill(5,5,5);
  text("Medium", 400,500);

  //Hard Button
  fill(0,0,200);
  rect(530,460,150,50);
  fill(5,5,5);
  text("Hard", 600,500);

  //Instructions Button
  fill(150,150,150);
  rect(325,610,150,50);
  fill(5,5,5);
  text("Instructions", 400,650);

}


function mousePressed(){

}




function playGame(){
  runObjects();

}
function endgame(){

}
