//  Natalie Hallmann
// 	PaddleBall Game Project 9/16
//  This is a comment
//  The setup function function is called once when your program begins
var balls=[];
var paddle;
var gameState =1;
var btnEasy, btnMedium, btnHard, btnBTME, btnBTMI, btnInstructions;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
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

function startGame(){

  //PaddleBall Text
  fill(150,150,150);
  textAlign(CENTER);
  textSize(80);
  text("Paddle Ball",400,300);

  //Score Text
  textSize(40)
  text("SCORE:0",100,790);

  btnEasy.render();
  btnMedium.render();


  //Easy Button
  textSize(20);
  fill(5,5,5);
  text("Easy",200,500);

  //medium button

  fill(5,5,5);
  text("Medium", 400,500);

  //Hard Button
btnHard.render();
  fill(5,5,5);
  text("Hard", 600,500);

  //Instructions Button
  btnInstructions.render();
  fill(5,5,5);
  text("Instructions", 400,650);


//instructions screen
}
function Instructions(){
textSize(25);
text("Move the mouse in order to control the paddle and hit the balls.",400,200)
text("You are only allowed to lose three balls off the bottom of the screen",400,300)
text("and each time a ball hits the paddle you earn one point.",400,400)
text("In order to win you must earn 25 points and if more than 3 balls have fallen",400,500)
text("off the screen, you lose.",400,600);


}
//making Buttons
function newButton(){
  btnEasy = new Button(120,460,150,50,color(200,0,0));
  btnMedium = new Button(325,460,150,50,color(0,200,0));
  btnHard = new Button(325,460,150,50,color(0,0,200));
  btnInstructions = new Button (325,610,150,50,color(150,150,150));
  btnBTMI = new Button (325,610,150,50,color(150,150,150));
  btnReplay = new Button (70,100,150,50,color(150,150,150));
  btnBTME = new button ()
}

function playGame(){
  runObjects();

}
function endgame(){

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
