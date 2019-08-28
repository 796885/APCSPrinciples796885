//  Natalie Hallmann
// 	8/28
//  This is a comment
//  The setup function function is called once when your program begins
var b1, b2, b3;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  b1 = new Ball(random(200, 400), random(300, 500), random(250,500), random(50,75));
  b2 = new Ball(random(650,800), random(75,100), random(5,50), random(5,50));
  b3 = new Ball(random(500, 550), random(800), random(53,75), random(580,59));






}
function preload(){

}
//  The draw function is called @ 30 fps
function draw() {

  b1.run();
  b2.run();
  b3.run();
}
