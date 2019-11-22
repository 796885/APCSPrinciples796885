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
  background(77, 168, 179);
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

function runObjects(){//runs the snake and food objects
  snake.run();

  for(var i = 0; i< food.length; i++){
    food[i].run();
  }
}

function checkTangled(){//checks if head touches other body segment
  if(snake.tangled() === true){
    gameState  = 4;
  }
}

function loadObjects(n){//loads snake and food objects
  snake = new Snake (Math.floor(Math.random()*26)*30,Math.floor(Math.random()*26)*30,30, color(227, 69, 7));
  for (var j = 0; j < n; j++){
    food[j] = new Food (Math.floor(Math.random()*26)*30,Math.floor(Math.random()*26)*30, color(70));
  }
}


function newButton(){//does not show up
  btnPlay = new Button(260, 450, 260, 200, color(235, 122, 184) );
}

 checkDifficulty(); //check if 'play' is clicked
  if (btnPlay.isClicked()=== true){
  difficulty = 'Play';
  }


function startGame(){
  textSize(100);

  fill(0, 0, 0);
  textAlign(RIGHT);
  textFont('fontBold');
  text ("Snake Game", 650, 300); //title


  btnPlay.render();//does not show up

  textSize (45);
  fill(0);
  text ("Play", 265, 525, 265, 200);

  gameState = 1
}
  function checkDifficulty(){ // checks if play button is chosen
  if (difficulty === 'Play'){
      loadObjects(7);
    }
    gameState = 2; // automatically goes to play game
}


function playGame(){//set up the play gameState
  frameRate(20);
  background(0, 0, 0);
  runObjects();
  fill(77, 168, 179);
  textSize(30);
  text ("Score: " + score, 650, 50); //score
  checkTangled();
}

function endGame(){//once head touches other body segment
  background(235, 122, 184);
  fill(0, 0, 0);
  textSize(100);
  textFont('fontBold');
  text("YOU LOSE!", 150, 350);
  }
