//  Natalie Hallmann
// 	12/11 WarmUp 12/11
//  This is a comment
//  The setup function function is called once when your program begins


var list=[]

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  for (var x = 0; x < 11; x++){
    list[x] = Math.floor(random(1,100));
  }
}

function loadNumbers(){
  for (var x = 0; x < 10; x++){
    list[x] = Math.floor(random(1,100));
  }
}
//  The draw function is called @ 30 fps
function draw() {

}
function mySort(list){
  for(var j = list.length; j > 0 ; j --){
      for (var i = 0 ; i < list.length; i ++){

          if (list[i+1] < list [i]){
            var temp = list[i];
            list[i] = list[i+1];
            list[i+1] = temp;
          }
        }
      }
      console.log(list);
    }
function findAvg(list){
  var= avg;
  var = sum 0
for (var i= 1; i < list.length; i++){
  sum = sum + list[i];
}
avg = Math.floor(int(sum/list.length));
console.math(avg);
}

 function findMedian(){
   if(list.length % 2 ===0){
     var half = list[half] + list[half + 1];
     var medianEven = twoMedian/2;
     console.log(medianEven);  
   }
else if(list.length % 2 ===1){
  var half= (list.length /2) -0.5;
  var medianOdd = list[half];
  console.log(medianOdd);
}
 }
