function Button() {
  this.shape = "rect";
  this.action = null;

  this.show = function() {
    this.w = textWidth(this.name)+20;
    push();
    rectMode(CENTER);
    fill(this.color);
    rect(this.x,this.y,this.w,this.h,20);
    textAlign(CENTER,CENTER);
    fill("black");
    text(this.name,this.x,this.y);
    pop();
  }

  this.setAction = function(action) {
      this.action = action;
  }

  this.onMouseClicked = function(mx,my) {
    if (this.isMouseOver(mx,my)) {
      this.action();
    }
  }
}

Button.prototype = geometryObjProto;
Button.prototype.constructor = Button;
const buttonProto = new Button();