function Hand() {

  this.cards = []; //array
  this.selectedCards = []; //array
  this.hiddenCards = []; //array
  this.shape = "rect";
  //todo: for now handX amd handY are set separatly in scetch.js. Possible solution - set coordinates in constructor.
  this.handX = this.x; // starting x position of container. Needed to correct actual position depending on expandDirection
  this.handY = this.y; // starting y position of container. Needed to correct actual position depending on expandDirection
  
  this.show = function() {
    this.w = this.gcCardSize+2*this.margin;
    this.h = this.gcCardSize*this.gcCardAspectRatio+2*this.margin;
    let startX = this.x; // x position of the first card to be drawn
    let startY = this.y; // y position of the first card to be drawn

    //if there are cards in hand
    if (this.cards.length > 0) {

      // Correct container's coordinates and dimentions
      switch (this.expandDirection) {
        case "horizontal":
          this.w = (this.gcCardSize+this.margin) * this.cards.length + this.margin;
          break;
        case "vertical":
          this.h = (this.gcCardSize*this.gcCardAspectRatio+this.margin) * this.cards.length + this.margin;
          break;
        case "right":
          this.w = (this.gcCardSize+this.margin) * this.cards.length + this.margin;
          this.x = this.handX + ((this.gcCardSize+this.margin)/2) * (this.cards.length-1);
          break;
        case "left":
          this.w = (this.gcCardSize+this.margin) * this.cards.length + this.margin;
          this.x = this.handX - ((this.gcCardSize+this.margin)/2) * (this.cards.length-1);
          break;
        case "down":
          this.h = (this.gcCardSize*this.gcCardAspectRatio+this.margin) * this.cards.length + this.margin;
          this.y = this.handY + ((this.gcCardSize*this.gcCardAspectRatio+this.margin)/2) * (this.cards.length-1);
          break;
        case "up":
          this.h = (this.gcCardSize*this.gcCardAspectRatio+this.margin) * this.cards.length + this.margin;
          this.y = this.handY - ((this.gcCardSize*this.gcCardAspectRatio+this.margin)/2) * (this.cards.length-1);
          break;
      }

      // Correct starting card coordinates
      if (this.expandDirection == "horizontal" || this.expandDirection == "right") {
        //if number of cards is odd (1,3,5...)
        if (this.cards.length % 2) {
          startX = this.x - this.gcCardSize * ((this.cards.length-1)/2) - this.margin * ((this.cards.length-1)/2);
        } else {
          startX = this.x - this.gcCardSize * (this.cards.length/2) - this.margin * (this.cards.length/2-1) - this.margin/2 + this.gcCardSize/2;
        }
      } else if (this.expandDirection == "left") {
        //if number of cards is odd (1,3,5...)
        if (this.cards.length % 2) {
          startX = this.x + this.gcCardSize * ((this.cards.length-1)/2) + this.margin * ((this.cards.length-1)/2);
        } else {
          startX = this.x + this.gcCardSize * (this.cards.length/2) + this.margin * (this.cards.length/2-1) + this.margin/2 - this.gcCardSize/2;
        }
      } else if (this.expandDirection == "vertical" || this.expandDirection == "down") {
        //if number of cards is odd (1,3,5...)
        if (this.cards.length % 2) {
          startY = this.y - this.gcCardSize*this.gcCardAspectRatio * ((this.cards.length-1)/2) - this.margin * ((this.cards.length-1)/2);
        } else {
          startY = this.y - this.gcCardSize*this.gcCardAspectRatio * (this.cards.length/2) - this.margin * (this.cards.length/2-1) - this.margin/2 + (this.gcCardSize*this.gcCardAspectRatio)/2;
        }
      } else if (this.expandDirection == "up") {
        //if number of cards is odd (1,3,5...)
        if (this.cards.length % 2) {
          startY = this.y + this.gcCardSize*this.gcCardAspectRatio * ((this.cards.length-1)/2) + this.margin * ((this.cards.length-1)/2);
        } else {
          startY = this.y + this.gcCardSize*this.gcCardAspectRatio * (this.cards.length/2) + this.margin * (this.cards.length/2-1) + this.margin/2 - (this.gcCardSize*this.gcCardAspectRatio)/2;
        }
      }

      //set all cards coordinates inside the hand
      for (let i = 0; i < this.cards.length; i++) {
        this.cards[i].x = startX;
        this.cards[i].y = startY;
        if (this.expandDirection == "horizontal" || this.expandDirection == "right") {
          startX = startX + this.gcCardSize + this.margin;
        } else if (this.expandDirection == "left") {
          startX = startX - this.gcCardSize - this.margin;
        } else if (this.expandDirection == "vertical" || this.expandDirection == "down") {
          startY = startY + this.gcCardSize*this.gcCardAspectRatio + this.margin;
        } else if (this.expandDirection == "up") {
          startY = startY - this.gcCardSize*this.gcCardAspectRatio - this.margin;
        }
      }
    }

    // draw container
    push();
    rectMode(CENTER);
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);
    pop();

    // draw all the cards in the container
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