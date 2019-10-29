//  Natalie Hallmann
// 	10/23 SortBars
//  This is a comment
//  The setup function function is called once when your program begins
var bars=[];
var barWidth = 30;




function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(200, 30, 150);

  loadBars(bars);
frameRate(15);

  for (var i = 0; i < bars.length; i++){
    bars[i].run();
  }
}

//  The draw function is called @ 30 fps
function draw(){
  bubbleSort();
}

function loadBars(){
  for (var x=0; x<60; x++){
    var w=int(random(1,60));
    bars[x]= new Bar(barWidth*x,800-(barWidth*w),barWidth,(barWidth*w))
  }
}


function update(){
  for(var i=0; i<bars.length; i++){
    bars[i].set(i);
  }
  background(200, 30, 150);
  for(var i=0; i<bars.length; i++){
    bars[i].run();
  }
}

function bubbleSort(bars){
  for(var j =0; j > bars.length-1; j++){
      if (bars[j].h>bars[j+1].h){
        swap(bars, j, j+1);
        update();
      }
        }
      }


function swap(bars,i,j){
  var temp = bars[i];
  bars[i] = bars[j];
  bars[j] = temp;
}
