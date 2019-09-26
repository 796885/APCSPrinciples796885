
class Button{
  constructor(x,y,w,h,msg,clr){
    this.loc=createVector(x,y);
    this.w=w;
    this.h=h;
    this.msg=msg;
    this.clr=color(255,255,255)
  }
  render(){
    fill(this.clr);
    rect(this.loc.x,this.loc.y,this.h,this.w);

  }
  this.isTouched(){
    if(mouseIsPressed&&
    mouseX > this.loc.x&&
  mousex < this.loc.x+this.w &&
mouseY > this.loc.y&&
mouseY < this.loc.y +this.h){
  return true;
}

  }
}
ifTouched();
if(difficulty==="easy")||if(difficulty==="medium")||if(difficulty==="hard")||if(difficulty==="instructions")
 if(difficulty==="easy"){
   loadObjects(5);
 }
 gameState===2
 if(difficulty==="medium"){
   loadObjects(7);
 }
 gameState===2
 if(difficulty==="hard"){
   loadObjects(11);
 }
 gameState===2
 if(difficult==="instructions"){
   function Instructions();
 }
gameState===2

function ifTouched(){
  (if gameState===1)
  //Easy Button touched
  if(mouseIsPressed&&
  mouseX>120&&
  mouseX<150&&
  mouseY>50&&
  mouseY<460){
    difficulty="easy"
  }
  //Medium Button touched
  if(mouseIsPressed&&
  mouseX>150&&
  mouseX<325&&
  mouseY>50&&
  mouseY<460){
    difficulty="medium"
}
//Hard Button touched
if(mouseIsPressed&&
mouseX>150&&
mouseX<530&&
mouseY>50&&
mouseY<460){
  difficulty="hard"
}
if(mouseIsPressed&&
mouseX>150&&
mouseX<325&&
mouseY>50&&
mouseY<610){
  difficulty="instructions"
}

}
