//  Natalie Hallmann
// 	10/31
//  This is a comment
//  The setup function function is called once when your program begins
var w;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

}

//  The draw function is called @ 30 fps
function draw() {
 var snake= new Snake(10, 30, 40, 15, color(50));
}
