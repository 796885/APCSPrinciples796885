//  Natalie Hallmann
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var list
for Random(list>0, list<10,000)
InsertionSort()

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {

}
function InsertionSort();
 insertionSort = (nums) => {
for (let i = 1; i < nums.length; i++) {
  let j = i - 1
  let tmp = nums[i]
  while (j >= 0 && nums[j] > tmp) {
    nums[j + 1] = nums[j]
    j--
  }
  nums[j+1] = tmp
}
return nums
}

swap(list,i,j){
  var temp = list[i];
      list = list[j]
      list = temp;
}
