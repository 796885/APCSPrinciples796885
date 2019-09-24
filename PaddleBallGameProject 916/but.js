ifTouched();
if(difficulty==="easy")||if(difficulty==="medium")||if(difficulty==="hard")||if(difficulty==="instructions")




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
