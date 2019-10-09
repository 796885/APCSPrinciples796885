/*
**Lab 1007 Ball
**Checker Board
**
*/


//  Global variables
var squares = []  // declare b1 as a global variable
var class

// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(235);
  loadSquares();
  //  traverse array and run each ball
  for(var i = 0; i < squares.length; i++){
   squares[i].render();
  }
}


function loadSquares(){

}


}
var i, j, class;
for (i = 0; i < 8; i++) {
    for (j = 0; j < 8; j++) {
        class = '';
