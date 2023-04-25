import GeometryObj from "./GeometryObj";

export default class Button extends GeometryObj {
  constructor(scene, name) {
    super(scene, name);
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
}