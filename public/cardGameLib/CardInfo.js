function CardInfo() {
  this.card = new Card("");
  this.padding = 5;
  this.shape = "rect";
  
  this.show = function() {
    this.h = this.gcCardSize * this.gcCardAspectRatio + 2*this.padding;
    this.w = 2*this.gcCardSize * this.gcCardAspectRatio + 3*this.padding;
    push();
    rectMode(CENTER);
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);
    pop();
    if (uiManager.selectedCard != null) {
      this.card.name = uiManager.selectedCard.name;
      this.card.stats = uiManager.selectedCard.stats;
      this.card.x = this.x + this.w/2 - this.gcCardSize/2 - this.padding;
      this.card.y = this.y;
      this.card.show();
      // Show stats if present
      let textX = this.x - this.w/2 + this.padding;
      let textY = this.y - this.h/2 + this.padding;
      for (let i = 0; i < this.card.stats.length; i++) {
        push();
        textAlign(LEFT,TOP);
        fill("black");
        text(this.card.stats[i].name + ": " + this.card.stats[i].value, textX, textY + (12*i));
        pop();
      } 
    }
  }
}

CardInfo.prototype = geometryObjProto;
CardInfo.prototype.constructor = CardInfo;
const cardInfoProto = new CardInfo();