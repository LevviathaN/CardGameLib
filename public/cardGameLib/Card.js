function Card(name) {
  this.name = name;
  //this.id = name;
  this.shape = "rect";
  this.stats = [];
  this.action = null;
  this.container = 0;
  
  this.show = function() {
    this.w = this.gcCardSize
    this.h = this.gcCardSize * this.gcCardAspectRatio;
    push();
    rectMode(CENTER);
    stroke(this.borderColor);
    strokeWeight(this.borderThickness);
    rect(this.x, this.y, this.w, this.h);
    pop();
    push();
    rectMode(CENTER);
    textAlign(CENTER,CENTER);
    text(this.name, this.x, this.y, this.w);
    pop();
  }
  
  this.showAt = function(x,y,s) {
    this.x = x;
    this.y = y;
    this.w = this.gcCardSize
    this.h = this.gcCardSize * this.gcCardAspectRatio;
    push();
    rectMode(CENTER);
    stroke(this.borderColor);
    strokeWeight(this.borderThickness);
    rect(this.x, this.y, this.w, this.h);
    pop();
    textAlign(CENTER);
    text(this.name, this.x, this.y);
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

Card.prototype = geometryObjProto;
Card.prototype.constructor = Card;
const cardProto = new Card();