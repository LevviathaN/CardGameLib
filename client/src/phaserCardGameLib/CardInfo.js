import GeometryObj from "./GeometryObj";

export default class CardInfo extends GeometryObj {
  constructor(scene, name) {
    super(scene, name);
    this.card = new Card("");
    this.padding = 5;
    this.shape = "rect";
    this.displayedStatIndex = 0;
    
    this.show = function() {
      this.h = this.gcCardSize * this.gcCardAspectRatio + 2*this.padding;
      this.w = 4*this.gcCardSize * this.gcCardAspectRatio + 3*this.padding;
      let statAreaWidth = 4*this.gcCardSize;
      // draw background rect
      push();
      rectMode(CENTER);
      fill(this.color);
      rect(this.x, this.y, this.w, this.h);
      pop();
      // show card, if there is one selected
      if (uiManager.selectedCard != null) {
        this.card.name = uiManager.selectedCard.name;
        this.card.stats = uiManager.selectedCard.stats;
        this.card.x = this.x + this.w/2 - this.gcCardSize/2 - this.padding;
        this.card.y = this.y;
        this.card.show();
        // Show stats if present
        let textX = this.x - this.w/2 + this.padding;
        let textY = this.y - this.h/2 + this.padding;
        push();
        textAlign(LEFT,TOP);
        if (this.displayedStatIndex > this.card.stats.length-1) this.displayedStatIndex = 0;
        text(this.card.stats[this.displayedStatIndex].name + " : " + this.card.stats[this.displayedStatIndex].value, textX, textY, statAreaWidth);
        pop();
        // calculate max length of stat name
  //      let maxStatNameW = 0;
  //      for (let i = 0; i < this.card.stats.length; i++) {
  //        if (textWidth(this.card.stats[i].name) > maxStatNameW) {
  //          maxStatNameW = textWidth(this.card.stats[i].name);
  //        }
  //      }
        // for each stat
  //      for (let i = 0; i < this.card.stats.length; i++) {
  //        let spacingAfterName = maxStatNameW - textWidth(this.card.stats[i].name);
  //        let statValueStartingPointX = textX + textWidth(maxStatNameW);
  //        let statValueAreaWidth = statAreaWidth - textWidth(this.card.stats[i].name + ":" + spacingAfterName);
  //        push();
  //        textAlign(LEFT,TOP);
  //        fill("black");
  //        text(this.card.stats[i].name + ":", textX, textY + (35*i), 35);
  //        text(this.card.stats[i].value, statValueStartingPointX, textY + (35*i), statValueAreaWidth, 35);
  //        pop();
  //      } 
      }
    }

    this.onMouseClicked = function(mx,my) {
      if (this.isMouseOver(mx,my)) {
        //this.displayedStatIndex++;
        //this.displayedStatIndex += this.displayedStatIndex % this.card.stats.length;
        if (this.displayedStatIndex < this.card.stats.length - 1) {
          this.displayedStatIndex++;
        } else {
          this.displayedStatIndex = 0;
        }
      }
    }
  }
}