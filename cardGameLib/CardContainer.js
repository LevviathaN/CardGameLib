function CardContainer() {
  this.cards = []; //array
  this.selectedCards = []; //array
  this.hiddenCards = []; //array
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