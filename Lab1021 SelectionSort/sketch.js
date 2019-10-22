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

  function findMedian(list){
    if(list.length % 2 === 0){ 
      var half = list.length / 2;
      var twoMedian = list[half] + list[half+1];
      var medianEven = twoMedian/2;
      console.log(medianEven);
    }
    else if(list.length % 2 === 1){
        var half = list.length /2;
        var medianOdd = list[half];
        console.log(medianOdd);
    }
  }


  function selectionSort(list){
    for (var i  = 0; i <list.length -1; i++){
             var small = i;
             for (var j = i+1; j <list.length; j++){

                 if (list[j] < list[small]){
                     small = j;
                 }
             }
             swap(list, i ,small);
         }

    console.log(list);
  }



  function swap(list, a, b){
    var temp = list[a];
    list[a] = list[b];
    list[b] = temp;
  }

//  The draw function is called @ 30 fps
function draw() {

}
