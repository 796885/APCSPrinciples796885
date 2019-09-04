var balls=[];
var mainBall;
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
  for(var i=0; i<balls.length;i++){
    balls[i].run();
  }
}
