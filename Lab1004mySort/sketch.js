//  Natalie Hallmann
// 	10/04 my Sort
//  This is a comment
//  The setup function function is called once when your program begins
var list = [1,4,786,54,12,96]
const insertionSort
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {

}
function swap(list, a, b){
  var temp = list[a];
  list[a]=list[b];
  list[b]=temp;
//insert Sort
  const insertionSort = arr => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      let el = arr[i];
      let j;

      for (j = i - 1; j >= 0 && arr[j] > el; j--) {
        arr[j + 1] = arr[j];
      }
      arr[j + 1] = el;
    }
    return arr;
  }
