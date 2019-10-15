/*
**Lab 911:CheckerBoard
**
**
*/


//  Global variables
// Declare squares[] as a global variable
var squares = [];
// put setup code here
function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(235);
  // Create a function that loads the squares into an
  // array of square objects and call the function

  loadSquares();
    for(var i=0;i<squares.length;i++){
      squares[i].render();
    }
}
  //  traverse array and run each square
  function loadSquares(){
    for (var i=0; i<8; i++){
      for(var x=0; x<8; x++){ //nested for loop
        if(i%2===0){
          if(x%2===0){
            //var shade=color(102,102,0); //even=yellow
              var shade=color(153, 255, 153);
          }
          if(x%2!==0){ //Is the number odd?
          //  var shade=color(179, 119, 0); //odd=orange
            var shade=color(179, 179, 255);
          }
        }
        if(i%2!==0){ //fixes for the rows
          if(x%2!==0){
            //var shade=color(102, 102, 0);
              var shade=color(153, 255, 153);
          }
          if(x%2===0){
            //var shade=color(179, 119, 0);
            var shade=color(179, 179, 255);
          }
        }
        squares[x+(8*i)]= new Square(100*x,100*i,100,100, shade); //loads array with square objects
      }
    }
  }
  //  create a loop that will push 64 squares into an array
  //  calculate the x and y position interms of the loop control variable
