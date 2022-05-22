function Hand() {

  this.cards = []; //array
  this.selectedCards = []; //array
  this.hiddenCards = []; //array
  this.shape = "rect";
  
  this.show = function() {
    this.h = this.gcCardSize*this.gcCardAspectRatio+2*this.margin;
    let startX;
    //if there are cards in hand
    if (this.cards.length > 0) {
      this.w = (this.gcCardSize+this.margin) * this.cards.length + this.margin;
      //if number of cards is odd (1,3,5...)
      if (this.cards.length % 2) {
        startX = this.x - this.gcCardSize * ((this.cards.length-1)/2) - this.margin * ((this.cards.length-1)/2);
      } else {
        startX = this.x - this.gcCardSize * (this.cards.length/2) - this.margin * (this.cards.length/2-1) - this.margin/2 + this.gcCardSize/2;
      }
      //set all cards coordinates inside the hand
      for (let i = 0; i < this.cards.length; i++) {
        this.cards[i].x = startX;
        this.cards[i].y = this.y;
        startX = startX + this.gcCardSize + this.margin;
      }
    } else {
      this.w = this.margin+this.gcCardSize+this.margin;
    }
    push();
    rectMode(CENTER);
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);
    pop();
    for (let i = 0; i < this.cards.length; i++) {
      this.cards[i].show();
    }
  }
  
  this.onMouseClicked = function(mx,my) {
    if (this.isMouseOver(mx,my)) {
        console.log("mouse clicked on hand");
        for (let i = 0; i < this.cards.length; i++) {
          if (this.cards[i].isMouseOver(mx,my)) {
            if (gameManager.selectedCard != null) {
              gameManager.selectedCard.highlight("black",1);
            }
            gameManager.selectedCard = this.cards[i];
            gameManager.selectedCard.highlight("red",2);
          }
        }
      }
  }
  
  this.onMouseDragged = function(mx,my) {
    if (gameManager.draggedCard == null){
      if (this.isMouseOver(mx,my)) {
        console.log("mouse dragged over hand");
        for (let i = 0; i < this.cards.length; i++) {
          if (this.cards[i].isMouseOver(mx,my)) {
            gameManager.draggedCard = this.cards[i];
            this.cards.splice(i,1);
          }
        }
      }
    } else {
      gameManager.draggedCard.x = mx;
      gameManager.draggedCard.y = my;
    }
  }
  
  this.onMouseReleased = function(mx,my) {
    if (gameManager.draggedCard != null) {
      if (this.isMouseOver(mx,my)) {
        this.addCard(gameManager.draggedCard);
        gameManager.draggedCard = null;
      }
    }
  }
}

Hand.prototype = cardContainerProto;
Hand.prototype.constructor = Hand;
const handProto = new Hand();