//  Natalie Hallmann
// 	9/06
//  This is a comment
//  The setup function function is called once when your program begins
var ships = []; //declares array
var mainBall;
var sliderSize, sliderColor;

function setup() {

  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);

  loadObjects(70);
  
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);//  back ground color
  sliderSize = createSlider(0, 400, 200);
  sliderSize.position(200, 400);
  sliderColor = createSlider(0, 255, 100);
  sliderColor.position(200, 450);
}

function draw() {
background(5,5,5,20);
  runObjects();
  background(0, 0, 0);
  fill(sliderColor.value(), 0, 0);

}

function loadObjects(x){
  for(var i = 0; i < x; i++){
    ships[i]=new Ship(random(width), random(height), random (-1,1), random(-1,1), i);
  }
}

function runObjects(){
  for(var i = 0; i < ships.length; i++){
    ships[i].run();
}
}
