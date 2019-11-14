//  Natalie Hallmann
// 	10/31 SnakeGame
//  This is a comment
//  The setup function function is called once when your program begins
var score, header_height, snake, playgame;
var h = 10;
var food = [];
var body = [];
var btnPlay
var gameState = 1;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(217, 189, 124);
  header_height = 800;
  score = 0;
  loadObjects(2);
  newButton();
}

function draw(){
    if (gameState ===1){
      startGame(); //start screen
    }else if (gameState === 2){
      playGame(); //game screen
    }else if (gameState === 3){
      instructionsText();
    }else if (gameState === 4){ //game over screen
      endGame();
  }
}

function newButton(){
  btnPlay = new Button(50, 450, 200, 200, color(68, 19, 218) );
}

function startGame(){
  textSize(90);

  fill(30,178,250);
  textAlign(CENTER);
  textFont('Courior')
  text ("Snake Game", 600, 200);
  textAlign(CENTER);

  btnPlay.render(); //draws play button

  textSize (45); //text for button
  fill(255);
  text ("PLAY", 400, 400, 200, 200);

    checkPlayGame(); // if play button is chosen
    if (checkPlayGame === 'PLAY' || difficulty === 'medium'|| difficulty === 'hard'){
      if (difficulty === 'easy'){
        loadObjects(7);
      gameState = 2; // play game
    }
}

function playGame(){
  frameRate(10);
  background(100, 200, 100);
  runObjects();
  text ("Score: " + score, 100, 50);
  checkTangled();
}

function loadObjects(n){
  snake = new Snake (Math.floor(Math.random()*26)*30,Math.floor(Math.random()*26)*30,30, color(227, 69, 7));
    for (var j = 0; j < n; j++){
      food[j] = new Food (Math.floor(Math.random()*26)*30,Math.floor(Math.random()*26)*30, color(70));
      }
  }

function runObjects(){
    snake.run();

  for(var i = 0; i< food.length; i++){
    food[i].run();
  }
}

function checkTangled(){
  return snake.tangled();
}

function startNewRound(){

}


function getFood() {

}
}
