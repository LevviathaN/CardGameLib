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
  gameManager.createHand("Player Hand",width/2,550);
  gameManager.getHand("Player Hand").color = "green";
  for (let i = 0; i < 3; i++) {
    gameManager.getHand("Player Hand").addCard(new Card(i));
    gameManager.getHand("Player Hand").cards[i].id = i;
  }
  
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
  gameManager.createDeck("Spell Deck",400,50);
  gameManager.getDeck("Spell Deck").color = "blue";
  gameManager.getDeck("Spell Deck").parseCardsFromJson("http://localhost:3000/games/Mages/spellDeckStringStats.json");
  // for (let i = 0; i < 5; i++) {
  //   gameManager.getDeck("Spell Deck").addCard(new Card("spell" + i));
  //   gameManager.getDeck("Spell Deck").cards[i].id = i;
  //   gameManager.getDeck("Spell Deck").cards[i].setStat("attack",i*20);
  //   gameManager.getDeck("Spell Deck").cards[i].setStat("mana",i*5);
  // }
  
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

  uiManager.show();
  cardInfo.show();
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