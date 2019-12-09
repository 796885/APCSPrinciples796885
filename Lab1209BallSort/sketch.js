//  Natalie Hallmann
// 	12/09 BallSort
//  This is a comment
//  The setup function function is called once when your program begins
var balls=[];
var ballscolor;
var balls=[];
var redness;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);



loadBalls(20);

}

//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5, 20);

runBalls();

}
function loadBalls(n){
  for(var i=0; i<n;i++){
    balls[i]=new Ball(random(width),random(height),random(-30,25),random(-30,25));
  }


}
function runBalls(){
  for(var i=0; i<balls.color;i++){
    balls[i].run();
  }
}


  for (var i = 0; i < balls.color; i++){
    balls[i].run();
  }


 //  The draw function is called @ 30 fps
function draw(){
  bubbleSort();
}


function update(){
  for(var i=0; i<balls.color; i++){
    balls[i].set(i);
  }
  background(54, 79, 63);
  for(var i=0; i<balls.color; i++){
    balls[i].run();
  }
}

function bubbleSort(){
  for(var j =0; j < balls.color -1; j++){
      if (balls[j].redness>balls[j+1].redness){
        swap(balls, j, j+1);
        update();
      }
        }
      }


function swap(balls,i,j){
  var temp = balls[i];
  balls[i] = bars[j];
  balls[j] = temp;
}
