var canva;
var player;
var enemyPlayers;

var mousePressedX = 0;
var mousePressedY = 0;
var mouseReleasedX = 0;
var mouseReleasedY = 0;

function setup() {
  canva = createCanvas(600, 600);

  // Initialize player hand
  gameManager.createHand("Player Hand",width/2,550);
  gameManager.getHand("Player Hand").color = "green";
  
  // initialize player spell area
  gameManager.createHand("Player Navorot",width/2,450);
  gameManager.getHand("Player Navorot").color = "orange";
  gameManager.getHand("Player Navorot").expandDirection = "up";

  gameManager.createHand("Player Prihod",gameManager.getHand("Player Navorot").x+70,450);
  gameManager.getHand("Player Prihod").color = "darkred";
  gameManager.getHand("Player Prihod").expandDirection = "up";
  
  gameManager.createHand("Player Zavadila",gameManager.getHand("Player Navorot").x-70,450);
  gameManager.getHand("Player Zavadila").color = "yellow";
  gameManager.getHand("Player Zavadila").expandDirection = "up";
  
  // Initialize spell deck
  gameManager.createDeck("Spell Deck",400,220);
  gameManager.getDeck("Spell Deck").color = "blue";
  gameManager.getDeck("Spell Deck").parseCardsFromJson(spellDeckInitializer);
  
  // Initialize card info module
  gameManager.createInfoBlock(450,50);
  gameManager.infoBlock.color = "yellow";

  // initialize player
  player = new Player();
  player.x = width - player.size;
  player.y = height - player.size;
  player.name = "Ruslan";
  player.color = "green";

  // add players
  gameManager.createPlayer("Ira","yellow");
  gameManager.createPlayer("Nastya","green");
  gameManager.createPlayer("Petya","red");
  let startingPlayerY = 350;
  for (let i = 0; i < gameManager.players.length; i++) {
    gameManager.players[i].value.x = 50;
    gameManager.players[i].value.y = startingPlayerY;
    gameManager.players[i].value.setStat("health",20);
    gameManager.players[i].value.setStat("blood",5);
    gameManager.players[i].value.setStat("castle",false);
    gameManager.players[i].value.setStat("treasures",3);
    gameManager.players[i].value.setStat("medal",1);
    startingPlayerY -= 80;
  }

  gameManager.createButton("Play selected card",100,550);
  gameManager.getButton("Play selected card").color = "yellow";
  gameManager.getButton("Play selected card").w = 50;
  gameManager.getButton("Play selected card").h = 20;
  gameManager.getButton("Play selected card").setAction(() => gameManager.playSelectedCard());

  gameManager.createButton("Draw card",100,500);
  gameManager.getButton("Draw card").color = "yellow";
  gameManager.getButton("Draw card").w = 50;
  gameManager.getButton("Draw card").h = 20;
  gameManager.getButton("Draw card").setAction(() => gameManager.moveNumberOfCardsBetweenContainers(gameManager.getDeck("Spell Deck"),gameManager.getHand("Player Hand"),1));

}

function draw() {
  background(220);

  uiManager.show();
  player.show();
  if (uiManager.draggedCard != null) {
    uiManager.draggedCard.show();
  }
}

function mouseDragged() {
  uiManager.onMouseDragged(mouseX,mouseY);
}

function mousePressed() {
  mousePressedX = mouseX;
  mousePressedY = mouseY;
  
}

function mouseReleased() {
  if (abs(mousePressedX-mouseX) < 5 || abs(mousePressedX-mouseX) < 5) {
    uiManager.onMouseClicked(mouseX,mouseY);
  }
  uiManager.onMouseReleased(mouseX,mouseY);
}