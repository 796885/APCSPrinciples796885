//  Natalie Hallmann
// 	10/31 SnakeGame
//  This is a comment
//  The setup function function is called once when your program begins
var score, header_height, snake, difficulty;
var gameState = 1;
var h = 10;
var newButton;
var btnPlay;
var food = [];
var body = [];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(80, 138, 230);
  header_height = 800;
  score = 0;
  loadObjects(2);
  newButton();
}

function draw(){//draws start,play, and end screens
    if (gameState ===1){
      startGame();
    }else if (gameState === 2){
      playGame();
    }else if (gameState === 3){
      instructionsText();
    }else if (gameState === 4){
      endGame();
  }
}

function runObjects(){
    snake.run();

  for(var i = 0; i< food.length; i++){
    food[i].run();
  }
}

function checkTangled(){
  if(snake.tangled() === true){
    gameState  = 4;
  }
}

function loadObjects(n){
  snake = new Snake (Math.floor(Math.random()*26)*30,Math.floor(Math.random()*26)*30,30, color(227, 69, 7));
    for (var j = 0; j < n; j++){
      food[j] = new Food (Math.floor(Math.random()*26)*30,Math.floor(Math.random()*26)*30, color(70));
      }
  }


function newButton(){
  btnPlay = new Button(260, 450, 260, 200, color(255, 0, 183) );
}

function checkDifficulty(){ //check if 'play' is clicked
  if (btnPlay.isClicked()=== true){
     difficulty = 'Play';
   }
}

function startGame(){
  textSize(80);

  fill(0, 0, 0);
  textAlign(RIGHT);
  textFont('fontBold');
  text ("Snake Game", 600, 300); //title
  textAlign(CENTER);

  btnPlay.render();

  textSize (45);
  fill(0);
  text ("Play", 265, 525, 265, 200);

    checkDifficulty(); // checks if play is chosen
    if (difficulty === 'Play'){
      if (difficulty === 'Play'){
        loadObjects(7);
      }
      gameState = 2; // play game
    }
}

function playGame(){
  frameRate(30);
  background(0, 0, 0);
  runObjects();
  fill(80, 138, 230);
  text ("Score: " + score, 700, 50); //score
  checkTangled();
}

function endGame(){
background(255, 0, 183);
 fill(80, 138, 230);
 textSize(100);
 text("YOU LOSE!", 400, 400);
  textSize(40);
 text("PRESS THE REFRESH BUTTON", 400, 600);
 text("TO PLAY AGAIN", 400, 700);
}
