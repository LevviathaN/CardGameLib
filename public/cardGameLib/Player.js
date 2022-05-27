function Player() {
  this.name = "";
  this.hand = 0;
  this.stats = []; //array
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

  this.setStat = function(statName, statValue) {
    let statExists = false;
    for (let i = 0; i < this.stats.length; i++) {
      if (this.stats[i].name == statName) {
        this.stats[i].value = statValue;
        statExists = true;
        break;
      }
    }
    if (!statExists) {
      this.stats.push({name: statName, value: statValue});
    }
  }
  
  this.getStat = function(statName) {
    for (let i = 0; i < this.stats.length; i++) {
      if (this.stats[i].name == statName) {
        return this.stats[i].value;
      }
    }
  }
}

Player.prototype = geometryObjProto;
Player.prototype.constructor = Player;
const playerProto = new Player();