//  Natalie Hallmann
// 	10/23 SortBars
//  This is a comment
//  The setup function function is called once when your program begins
var bars=[];


loadBars(bars);
runBars();
bubbleSort();

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  for (var x = 0; x < 10; x++){
    bars[x] = Math.floor(random(1,100));
  }
}
function loadBars(num){
  for (var i = 0; i < num; i++){
    var barHeight = Math.florr(random(height));
    var loc = createVector(i*barWidth, barHeight);
    bars[i] = new Bar(loc);
  }
}
//  The draw function is called @ 30 fps
function draw(){
  background(20, 20,100);
  frameRate(1);
  runBars();

}
function runBars(){
  for(var i = 0; i < bars.length; i++){
    bars[i].render()
  }
}

function bubbleSort(list){
  for(var j = bars.length; j > 0 ; j --){
      for (var i = 0 ; i < bars.length; i ++){

          if (bars[i+1] < bars [i]){
            var temp = bars[i];
            bars[i] = bars[i+1];
            bars[i+1] = temp;
          }
        }
      }
      console.log(list);
    }
