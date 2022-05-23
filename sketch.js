var canva;
var cardInfo;
var player;
var enemyPlayers;

var mousePressedX = 0;
var mousePressedY = 0;
var mouseReleasedX = 0;
var mouseReleasedY = 0;

function setup() {
  canva = createCanvas(600, 600);

  // Initialize player hand
  uiManager.createHand("Player Hand",width/2,550);
  uiManager.getHand("Player Hand").color = "green";
  for (let i = 0; i < 3; i++) {
    uiManager.getHand("Player Hand").addCard(new Card(i));
    uiManager.getHand("Player Hand").cards[i].id = i;
  }
  
  // initialize player spell area
  uiManager.createHand("Player Navorot",width/2,450);
  uiManager.getHand("Player Navorot").color = "orange";
  uiManager.getHand("Player Navorot").expandDirection = "up";

  uiManager.createHand("Player Prihod",uiManager.getHand("Player Navorot").x+70,450);
  uiManager.getHand("Player Prihod").color = "darkred";
  uiManager.getHand("Player Prihod").expandDirection = "up";
  
  uiManager.createHand("Player Zavadila",uiManager.getHand("Player Navorot").x-70,450);
  uiManager.getHand("Player Zavadila").color = "yellow";
  uiManager.getHand("Player Zavadila").expandDirection = "up";
  
  // Initialize spell deck
  uiManager.createDeck("Spell Deck",400,50);
  uiManager.getDeck("Spell Deck").color = "blue";
  for (let i = 0; i < 5; i++) {
    uiManager.getDeck("Spell Deck").addCard(new Card("spell" + i));
    uiManager.getDeck("Spell Deck").cards[i].id = i;
    uiManager.getDeck("Spell Deck").cards[i].setStat("attack",i*20);
    uiManager.getDeck("Spell Deck").cards[i].setStat("mana",i*5);
  }
  
  // Initialize card info module
  cardInfo = new CardInfo();
  cardInfo.x = 510;
  cardInfo.y = 50;
  cardInfo.color = "yellow";

  // initialize player
  player = new Player();
  player.x = width - player.size;
  player.y = height - player.size;
  player.name = "Ruslan";
  player.color = "green";
}

function draw() {
  background(220);

  uiManager.getHand("Player Hand").show();
  uiManager.getHand("Player Navorot").show();
  uiManager.getHand("Player Prihod").show();
  uiManager.getHand("Player Zavadila").show();
  uiManager.getDeck("Spell Deck").show();
  cardInfo.show();
  player.show();
  if (gameManager.draggedCard != null) {
    gameManager.draggedCard.show();
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