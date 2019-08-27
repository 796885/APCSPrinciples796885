//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0, 100,255);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {
  fill(2,2,2);
  ellipse(400,400,150,150);

  rectMode(CENTER);
  fill(200,200,0);
  rect(400,400,50,50);


  fill(27,130,20, 10);
  quad(50, 650, 800, 732, 150, 3, 400,641);



   fill(255,255,255);
   triangle(105, 220, 215, 170,265,295 );

   fill(255,255,255);
   triangle(265, 295, 155, 350,305,400 );



}
