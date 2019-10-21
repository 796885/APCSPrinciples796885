//  Natalie Hallmann
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var list = []

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

    for (var x = 0; x < 10; x++){
        list[x] = Math.floor(random(1,100));
      }

}

//  The draw function is called @ 30 fps
function draw() {

}

function InsertionSort(list){
 for (var i = 1; i < list.length; i++){
   for (var j = i; j > 0; j--){
     if(list[j] < list[j-1]){
       swap (list, j, j-1);
     }
   }
 }
}
function swap (list, x, y){
  var tmp = list[x];
  list[x] = list[y];
  list[y] = tmp;

}
