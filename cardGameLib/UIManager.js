function UIManager() {
  this.playerBlock = 0;
  this.enemyPlayers = [];
  this.playingZoneBlock = 0;
  this.cardInfoBlock = 0;
  this.decks = [];
  this.hands = [];

  this.createDeck = function(deckName,x,y) {
    let deck = new Deck();
    deck.name = deckName;
    deck.x = x;
    deck.y = y;

    let deckExists = false;
    for (let i = 0; i < this.decks.length; i++) {
      if (this.decks[i].name == deckName) {
        this.decks[i].value = deck;
        handExists = true;
        break;
      }
    }
    if (!deckExists) {
      this.decks.push({name: deckName, value: deck});
    }
  }

  this.getDeck = function(deckName) {
    for (let i = 0; i < this.decks.length; i++) {
      if (this.decks[i].name == deckName) {
        return this.decks[i].value;
      }
    }
  }

  this.createHand = function(handName,x,y) {
    let hand = new Hand();
    hand.x = x;
    hand.y = y;
    hand.handX = hand.x;
    hand.handY = hand.y;

    let handExists = false;
    for (let i = 0; i < this.hands.length; i++) {
      if (this.hands[i].name == handName) {
        this.hands[i].value = hand;
        handExists = true;
        break;
      }
    }
    if (!handExists) {
      this.hands.push({name: handName, value: hand});
    }
  }

  this.getHand = function(handName) {
    for (let i = 0; i < this.hands.length; i++) {
      if (this.hands[i].name == handName) {
        return this.hands[i].value;
      }
    }
  }

  this.onMouseClicked = function(mx,my) {
    for (let i = 0; i < this.hands.length; i++) {
      this.hands[i].value.onMouseClicked(mx,my);
    }
  }
  
  this.onMouseDragged = function(mx,my) {
    for (let i = 0; i < this.decks.length; i++) {
      this.decks[i].value.onMouseDragged(mx,my);
    }
    for (let i = 0; i < this.hands.length; i++) {
      this.hands[i].value.onMouseDragged(mx,my);
    }
  }
  
  this.onMouseReleased = function(mx,my) {
    for (let i = 0; i < this.decks.length; i++) {
      this.decks[i].value.onMouseReleased(mx,my);
    }
    for (let i = 0; i < this.hands.length; i++) {
      this.hands[i].value.onMouseReleased(mx,my);
    }
  }
}
const uiManager = new UIManager();