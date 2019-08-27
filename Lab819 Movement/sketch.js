//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins

var x, y;
var speedX, speedY;

function setup() {

  x = 800;
  y = 800;
  speedX = 5;
  speedY = 5;
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0, 0,0);
  fill(200, 30, 150);



}

//  The draw function is called @ 30 fps
function draw() {
  x = x +2;
  y = y+ 4;

fill(10,40,255);
rect(0,400,800,800); //water

fill(255,255,0); //stars
ellipse(500,300,4,4)
fill(255,255,0);
ellipse(600,100,4,4)
fill(255,255,0);
ellipse(100,267,4,4)
fill(255,255,0);
  ellipse(200,90,4,4)
  fill(255,255,0);
  ellipse(10,24,4,4)
  fill(255,255,0);
  ellipse(230,104,4,4)
  fill(255,255,0);
  ellipse(50,166,4,4)
  fill(255,255,0);
  ellipse(8,200,4,4)

fill(200,200,0); //moon
ellipse(600,150,200,200);
fill(0,0,0);
ellipse(500,150,200,200);

fill(4,200,20);
triangle(350, 500, 575, 400, 575, 700 )



}
