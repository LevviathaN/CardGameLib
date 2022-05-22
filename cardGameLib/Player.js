function Player() {
  this.hand = 0;
  this.stats = 0; //array
  
  this.show = function() {
    push();
    
    pop();
  }
}

Player.prototype = geometryObjProto;
Player.prototype.constructor = Player;
const playerProto = new Player();