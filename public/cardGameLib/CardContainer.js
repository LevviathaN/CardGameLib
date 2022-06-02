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
    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
  
      // swap elements array[i] and array[j]
      // we use "destructuring assignment" syntax to achieve that
      // you'll find more details about that syntax in later chapters
      // same can be written as:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
  
  this.addCard = function(cardToAdd) {
    cardToAdd.container = this;
    this.cards.push(cardToAdd);
  }
  
  this.addCardAt = function(cardToAdd, index) {
    
  }
  
  this.addCards = function(cardsToAdd) {
    
  }

  this.parseCardsFromJson = function(initializer) {
    fetch(initializer.prihodCardsJsonPath).then(response => response.json()).then(data => {
      for (let i = 0; i < data.length; i++) {
        let card = new Card(data[i][0].value);
        card.action = () => initializer.play(card);
        this.cards.push(card);
        for (let j = 0; j < data[i].length; j++) {
          card.setStat(data[i][j].name, data[i][j].value);
        }
      }
    });
  }
  
  this.removeCard = function(cardToRemove) {
    
  }
  
  this.sortCards = function(sortingParameter) {
    
  }
}

CardContainer.prototype = geometryObjProto;
CardContainer.prototype.constructor = CardContainer;
const cardContainerProto = new CardContainer();