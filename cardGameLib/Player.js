function Player() {
  this.name = "";
  this.hand = 0;
  this.stats = 0; //array
  this.size = 60;
  
  this.show = function() {
    push();
    ellipseMode(CENTER);
    fill(this.color);
    ellipse(this.x,this.y,this.size,this.size);
    textAlign(CENTER,CENTER);
    fill("black");
    text(this.name.charAt(0),this.x,this.y);
    pop();
  }
}

Player.prototype = geometryObjProto;
Player.prototype.constructor = Player;
const playerProto = new Player();