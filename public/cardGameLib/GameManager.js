function GameManager() {
  this.players = [];
  this.currentPlayer = 0; //container for the player, which turn is now
  this.infoBlock = null;
  this.decks = [];
  this.hands = [];
  this.buttons = [];

  this.createInfoBlock = function(x,y) {
    this.infoBlock = new CardInfo();
    this.infoBlock.name = "Card Info";
    this.infoBlock.x = x;
    this.infoBlock.y = y;
  }

  //add universal Create and Get functions for objects in array
  this.createDeck = function(deckName,x,y) {
    let deck = new Deck();
    deck.name = deckName;
    deck.x = x;
    deck.y = y;

    let deckExists = false;
    for (let i = 0; i < this.decks.length; i++) {
      if (this.decks[i].name == deckName) {
        this.decks[i].value = deck;
        deckExists = true;
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

  //todo: there is a bug, when you move more than 1 card from Hand - it's Y coordinate decreases
  this.moveNumberOfCardsBetweenContainers = function(source, target, number) {
    for (let i = 0; i < number; i++) {
      let card = source.cards.pop();
      card.container = target;
      target.cards.push(card);
    }
  }

  this.createPlayer = function(playerName,color) {
    let player = new Player();
    player.name = playerName;
    player.color = color;

    let playerExists = false;
    for (let i = 0; i < this.players.length; i++) {
      if (this.players[i].name == playerName) {
        this.players[i].value = player;
        playerExists = true;
        break;
      }
    }
    if (!playerExists) {
      this.players.push({name: playerName, value: player});
    }
  }

  this.getPlayerIndex = function(player) {
    for (let i = 0; i < this.players.length; i++) {
      if (this.players[i] === player) {
        return i;
      }
    }
    console.log("No such player");
  }

  this.getCurrPlayerIndex = function() {
    return this.getPlayerIndex(this.currentPlayer);
  }

  this.getPlayerBy = function(property, value) {
    let playerToReturn;
    switch (property) {
      case "index":
        playerToReturn = this.players[value];
        break;
      case "name":
        for (let i = 0; i < this.players.length; i++) {
          if (this.players[i].name == value) {
            playerToReturn = this.players[i];
          }
        }
        break;
      case "color":
        for (let i = 0; i < this.players.length; i++) {
          if (this.players[i].value.color == value) {
            playerToReturn = this.players[i];
          }
        }
        break;
      //todo left and right player can be simplified in future
      case "left":
        playerToReturn = this.players[(this.getCurrPlayerIndex() + value) % this.players.length];
        break;
      case "right":
        playerToReturn = this.players[(this.players.length + (this.getCurrPlayerIndex() - value)) % this.players.length];
        break;
      //this one needs to be able to return more than one player
      case "turned":
        for (let i = 0; i < this.players.length; i++) {
          if (this.players[i].alreadyTurnedThisRound == value) {
            playerToReturn = this.players[i];
          }
        }
        break;
    }
    return playerToReturn;
  }

  this.getPlayersByStat = function(statName, condition, statValue) {
    let playersToReturn = [];
    let extremumValue = null;
    for (let i = 0; i < this.players.length; i++) {
      switch (condition) {
        case "highest":
          if (extremumValue === null) {
            extremumValue = this.players[i].value.getStat(statName);
          }
          if (this.players[i].value.getStat(statName) == extremumValue) {
            playersToReturn.push(this.players[i].value);
          } else if (this.players[i].value.getStat(statName) > extremumValue) {
            playersToReturn = [];
            playersToReturn.push(this.players[i].value);
          }
          break;
        case "lowest":
          if (extremumValue === null) {
            extremumValue = this.players[i].value.getStat(statName);
          }
          if (this.players[i].value.getStat(statName) == extremumValue) {
            playersToReturn.push(this.players[i].value);
          } else if (this.players[i].value.getStat(statName) < extremumValue) {
            playersToReturn = [];
            playersToReturn.push(this.players[i].value);
          }
          break;
        case "more than":
          if (this.players[i].value.getStat(statName) > statValue) {
            playersToReturn.push(this.players[i].value);
          }
          break;
        case "less than":
          if (this.players[i].value.getStat(statName) < statValue) {
            playersToReturn.push(this.players[i].value);
          }
          break;
        case "equals":
          if (this.players[i].value.getStat(statName) == statValue) {
            playersToReturn.push(this.players[i].value);
          }
          break;
      }
    }
    return playersToReturn;
  }

  this.selectPlayer = function() {
    let plyr = null;
    return plyr;
  }
  
  this.createButton = function(buttonName,x,y) {
    let button = new Button();
    button.name = buttonName;
    button.x = x;
    button.y = y;

    let buttonExists = false;
    for (let i = 0; i < this.buttons.length; i++) {
      if (this.buttons[i].name == buttonName) {
        this.buttons[i].value = button;
        buttonExists = true;
        break;
      }
    }
    if (!buttonExists) {
      this.buttons.push({name: buttonName, value: button});
    }
  }

  this.getButton = function(buttonName) {
    for (let i = 0; i < this.buttons.length; i++) {
      if (this.buttons[i].name == buttonName) {
        return this.buttons[i].value;
      }
    }
  }

  this.playSelectedCard = function() {
    if (uiManager.selectedCard != null) {
      uiManager.selectedCard.action();
    }
  }
}
const gameManager = new GameManager();