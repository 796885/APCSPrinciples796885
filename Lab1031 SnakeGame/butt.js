
class Button{

constructor(x, y, w, h , clr){
  this.loc = createVector(x,y);
  this.w= w;
  this.h = h;
  this.clr = clr;
}
isClicked(){ // to check if that play button is pressed
if (mouseIsPressed&& mouseX > this.loc.x && mouseX< this.loc.x+this.w&&
    mouseY>this.loc.y && mouseY<this.loc.y+this.h){
        return true;
}
}
render(){ // renders button
fill(this.clr);
rect (this.loc.x, this.loc.y, this.w, this.h);
}

}
