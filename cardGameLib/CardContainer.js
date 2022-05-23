function CardContainer() {
  this.cards = []; //array
  this.expandDirection = "horizontal"; // determines how container area will expand when new cards added to it. 
  // Possible values: horizontal, vertical, up, down, left, right, none
  this.selectedCards = []; //array
  this.hiddenCards = []; //array
  this.allowedInputFrom = []; //array of card containers, from where you can drag cards to current container
  this.allowedCardStats = []; //array of stats and their values, card should have, to be contained in current container
  this.maxCards = 0; //maximum of cards, container can hold. If 0 - unlimited
  this.isHidden = true;
  this.padding = 0;
  this.margin = 5;
  this.curvature = 0;
  
  this.shuffle = function() {
    
  }
  
  this.addCard = function(cardToAdd) {
    cardToAdd.container = this;
    this.cards.push(cardToAdd);
  }
  
  this.addCardAt = function(cardToAdd, index) {
    
  }
  
  this.addCards = function(cardsToAdd) {
    
  }
  
  this.removeCard = function(cardToRemove) {
    
  }
  
  this.sortCards = function(sortingParameter) {
    
  }
}

CardContainer.prototype = geometryObjProto;
CardContainer.prototype.constructor = CardContainer;
const cardContainerProto = new CardContainer();