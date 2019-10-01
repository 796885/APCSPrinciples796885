//  Natalie Hallmann
// 	PaddleBall Game Project 9/16
//  This is a comment
//  The setup function function is called once when your program begins
var balls=[];
var paddle;
var ifTouched;
var score=0
var gameState =1;
var win;
var btnEasy, btnMedium, btnHard, btnBTME, btnBTMI, btnInstructions;
// loadObjects();
// newButton();
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  newButton();
}

//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5);
  //runObjects();
  if(gameState===1){
    startGame();//start splash screen
  }else if(gameState===2){
    playGame();//paddle and balls screen
  }else if(gameState===3){
    Instructions();
    if(btnBTMI.isTouched() === true){
      gameState = 1;
      endGame();//end splash screen
    }
  }
} //end of draw function

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
    btnEasy.run();
    textSize(20);
    fill(5,5,5);
    text("Easy",200,500);
    if(btnEasy.isTouched()){//figure why button is not being detected
      gameState=2;
      LoadObjects(5)
    }

    //medium button
    btnMedium.run();
    fill(5,5,5);
    text("Medium", 400,500);

    //Hard Button
    btnHard.run();
    fill(5,5,5);
    text("Hard", 600,500);

    //Instructions Button
    btnInstructions.run();
    fill(5,5,5);
    text("Instructions", 400,650);
    Instructions();


    //instructions screen
  }
  function Instructions(){
    textSize(25);
    textAlign(CENTER);
    text("Move the mouse in order to control the paddle and hit the balls.",400,200)
    text("you must collect all green balls in order to win and avoid the red balls.",400,300)
    text("if a red ball bounces on your paddle, you lose",400,400)




  }
  //making Buttons
  function newButton(){
    btnEasy = new Button(125,470,50,150,color(200,0,0));
    btnMedium = new Button(325,470,50,150,color(0,200,0));
    btnHard = new Button(525,470,50,150,color(0,0,200));
    btnInstructions = new Button (325,615,50,150,color(150,150,150));
    // btnBTMI = new Button (325,610,150,50,color(150,150,150));
    // btnReplay = new Button (70,100,150,50,color(150,150,150));
    // btnBTME = new button ()
  }
  //gameState2
  function playGame(){
    runObjects();
    fill (550);
    textSize(40)
    text("SCORE:0",100,790);
    runObjects();
    if (checkRed() === true|| balls.length === 0){
      gameState= 4;
      win = 'yes';
    } else if( score < 0 ){
      gameState = 4;
      win = 'no';
    }
}
   function LoadObjects(n){
    for(var i=0; i<n; i++){
      balls[i] = new Ball(random(width),random(height),5,4);
    }
   }
    function endgame(){
      if (win === "yes"){//score>0
        textSize(95);
        fill(155,155,155);
        text ("You Won!",325,400);
      }else if (win === 'no'){//score<0
        textSize(95);
        fill(155,155,155);
        text ("You Lost!",325,400);
        fill(200, 200, 200) //Main Menu
        btnBTME.run();
        fill(100, 150, 100);
        textSize(30);
        text("Return to Main Menu", 600, 500)
        if (btnBTME.isTouched()){
          gameState =1;
        }
      }
    }

  // }//end endgame
  // function loadObjects(n){
  //   paddle= new Paddle(50,400,95,95);
  //   for(var i=0; i< n; i++){
  //     balls[i] =new Ball(random(width),0, random(-5,5),random(-5,5));
  //   }
  // }
  // function runObjects(){
  //   paddle.run();
  //   for(var i=0; i<balls.length; i++){
  //     balls[i].run();
  //   }
  //   fill(200, 200, 200) //Main Menu
  //   btnBTME.run();
  //   fill(100, 150, 100);
  //   textSize(30);
  //   text("To Main Menu", 600, 500)
  //   if (btnBTME.isTouched()){
  //     gameState =1;
  //   }
///
