
class Button{
  constructor(x,y,w,h,clr){
    this.loc=createVector(x,y);
    this.w=w;
    this.h=h;
    this.clr=clr
  }

  run(){
    this.render();
    this.isTouched();
  }
  render(){
    fill(this.clr);
    rect(this.loc.x,this.loc.y,this.h,this.w);

  }

  isTouched(){
    if(mouseIsPressed &&
      mouseX > this.loc.x &&
      mousex < this.loc.x+this.w &&
      mouseY > this.loc.y &&
      mouseY < this.loc.y +this.h){
        return true;
      }else{
        return false;
      }

    }

ifTouched();
 if(difficulty==="easy")||if(difficulty==="medium")||if(difficulty==="hard")||if(difficulty==="instructions");
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
  mouseX>50&&
  mouseX<125&&
  mouseY>150&&
  mouseY<470){
    difficulty="easy"
  }
  //Medium Button touched
  if(mouseIsPressed&&
  mouseX>50&&
  mouseX<325&&
  mouseY>150&&
  mouseY<470){
    difficulty="medium"
}
//Hard Button touched
if(mouseIsPressed&&
mouseX>50&&
mouseX<525&&
mouseY>150&&
mouseY<470){
  difficulty="hard"
}
//Instructions Button touched
if(mouseIsPressed&&
mouseX>50&&
mouseX<325&&
mouseY>150&&
mouseY<615){
  difficulty="instructions"
}

}
