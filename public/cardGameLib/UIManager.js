function UIManager() {
  this.playerBlock = 0;
  this.enemyPlayers = [];
  this.playingZoneBlock = 0;
  this.cardInfoBlock = 0;
  this.draggedCard = null;
  this.selectedCard = null;

  

  this.show = function() {
    gameManager.infoBlock.show();
    for (let i = 0; i < gameManager.players.length; i++) {
      gameManager.players[i].value.show();
    }
    for (let i = 0; i < gameManager.decks.length; i++) {
      gameManager.decks[i].value.show();
    }
    for (let i = 0; i < gameManager.hands.length; i++) {
      gameManager.hands[i].value.show();
    }
    for (let i = 0; i < gameManager.buttons.length; i++) {
      gameManager.buttons[i].value.show();
    }
  }

  this.onMouseClicked = function(mx,my) {
    gameManager.infoBlock.onMouseClicked(mx,my);
    for (let i = 0; i < gameManager.players.length; i++) {
      gameManager.players[i].value.onMouseClicked(mx,my);
    }
    for (let i = 0; i < gameManager.buttons.length; i++) {
      gameManager.buttons[i].value.onMouseClicked(mx,my);
    }
    for (let i = 0; i < gameManager.hands.length; i++) {
      gameManager.hands[i].value.onMouseClicked(mx,my);
    }
  }
  
  this.onMouseDragged = function(mx,my) {
    for (let i = 0; i < gameManager.decks.length; i++) {
      gameManager.decks[i].value.onMouseDragged(mx,my);
    }
    for (let i = 0; i < gameManager.hands.length; i++) {
      gameManager.hands[i].value.onMouseDragged(mx,my);
    }
  }
  
  this.onMouseReleased = function(mx,my) {
    for (let i = 0; i < gameManager.decks.length; i++) {
      gameManager.decks[i].value.onMouseReleased(mx,my);
    }
    for (let i = 0; i < gameManager.hands.length; i++) {
      gameManager.hands[i].value.onMouseReleased(mx,my);
    }
  }
}
const uiManager = new UIManager();