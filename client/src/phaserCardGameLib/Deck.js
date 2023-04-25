import CardContainer from "./CardContainer";

export default class Deck extends CardContainer {
  constructor(scene, name) {
    super(scene, name);
    this.name = "";
    this.cards = []; //array
    this.selectedCards = []; //array
    this.hiddenCards = []; //array
    this.shape = "rect";
    this.defauldAppearingCardNumber = 3;
    this.appearingCardNumber = this.defauldAppearingCardNumber;
    this.cardsOffsetInDeck = 5;
    
    this.show = function() {
      //setup deck size
      this.w = this.gcCardSize;
      this.h = this.gcCardSize*this.gcCardAspectRatio;
      
      //setup how many cards visually appears in the deck
      if (this.cards.length > 0 && this.cards.length < 3) {
        this.appearingCardNumber = this.cards.length;
      } else if (this.cards.length == 0) {
        this.appearingCardNumber = 1;
      } else {
        this.appearingCardNumber = this.defauldAppearingCardNumber;
      }
      
      //draw the deck
      for (let i = 0; i < this.appearingCardNumber; i++) {
        push();
        rectMode(CENTER);
        fill(this.color);
        rect(this.x-i*this.cardsOffsetInDeck, this.y-i*this.cardsOffsetInDeck, this.w, this.h);
        pop();
      }
      
      //draw text on the top of the deck
      push();
      textAlign(CENTER,CENTER);
      text(this.cards.length, this.x-this.appearingCardNumber*this.cardsOffsetInDeck, this.y-this.appearingCardNumber*this.cardsOffsetInDeck);
      pop();

      //draw deck name
      push();
      textAlign(CENTER,CENTER);
      text(this.name, this.x, this.y + this.gcCardSize/2 * this.gcCardAspectRatio + 12);
      pop();
    }
    
    this.onMouseDragged = function(mx,my) {
      if (uiManager.draggedCard == null){
        if (this.isMouseOver(mx,my)) {
          console.log("mouse dragged over deck");
          if (this.cards.length > 0) {
            uiManager.draggedCard = this.cards.pop();
          }
        }
      } else {
        uiManager.draggedCard.x = mx;
        uiManager.draggedCard.y = my;
      }
    }
    
    this.onMouseReleased = function(mx,my) {
      if (uiManager.draggedCard != null) {
        if (this.isMouseOver(mx,my)) {
          this.addCard(uiManager.draggedCard);
          uiManager.draggedCard = null;
        }
      }
    }
  }
}