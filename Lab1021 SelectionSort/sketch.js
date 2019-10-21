//  Natalie Hallmann
// 	10/21 SelectionSort
//  This is a comment
//  The setup function function is called once when your program begins
var list=[];
var Compares = 0;
Swaps = 0;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  for (var x = 0; x < 10; x++){
      list[x] = Math.floor(random(1,100));
    }
  }

function SelectionSort(list){
  for (var i = 0; i < list.length -1; i++){
    var index = i;
    for (var j = i + 1; j < list.length; j++){
      index = j;
      if (list[j] < list[index]){
          index = j;
      }
    }
}
  var smallerNumber = list[index];
  list[index] = list[i];
  list[i] = smallerNumber;
}


}

//  The draw function is called @ 30 fps
function draw() {

}
