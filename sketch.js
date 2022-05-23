var canva;
var cardInfo;
var spellDeck;
var playerZavadila;
var playerNavorot;
var playerPrihod;
var playerHand;
// var playerSpell;
var player;
var enemyPlayers;

var mousePressedX = 0;
var mousePressedY = 0;
var mouseReleasedX = 0;
var mouseReleasedY = 0;

function setup() {
  canva = createCanvas(600, 600);

  // Initialize player hand
  playerHand = new Hand();
  playerHand.x = width/2;
  playerHand.y = 550;
  playerHand.handX = playerHand.x;
  playerHand.handY = playerHand.y;
  playerHand.color = "green";
  for (let i = 0; i < 3; i++) {
    playerHand.addCard(new Card(i));
    playerHand.cards[i].id = i;
  }
  
  // initialize player spell area
  playerNavorot = new Hand();
  playerNavorot.x = width/2;
  playerNavorot.y = 450;
  playerNavorot.handX = playerNavorot.x;
  playerNavorot.handY = playerNavorot.y;
  playerNavorot.color = "orange";
  playerNavorot.expandDirection = "up";

  playerPrihod = new Hand();
  playerPrihod.x = playerNavorot.x + 70;
  playerPrihod.y = 450;
  playerPrihod.handX = playerPrihod.x;
  playerPrihod.handY = playerPrihod.y;
  playerPrihod.color = "darkred";
  playerPrihod.expandDirection = "up";
  
  playerZavadila = new Hand();
  playerZavadila.x = playerNavorot.x - 70;
  playerZavadila.y = 450;
  playerZavadila.handX = playerZavadila.x;
  playerZavadila.handY = playerZavadila.y;
  playerZavadila.color = "yellow";
  playerZavadila.expandDirection = "up";

  // playerSpell = new Hand();
  // playerSpell.x = width/2;
  // playerSpell.y = 450;
  // playerSpell.color = "lightgreen";
  
  // Initialize spell deck
  spellDeck = new Deck();
  spellDeck.name = "Spell Deck";
  spellDeck.x = 400;
  spellDeck.y = 50;
  spellDeck.color = "blue";
  for (let i = 0; i < 5; i++) {
    spellDeck.addCard(new Card("spell" + i));
    spellDeck.cards[i].id = i;
    spellDeck.cards[i].setStat("attack",i*20);
    spellDeck.cards[i].setStat("mana",i*5);
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
  playerHand.show();
  // playerSpell.show();
  playerNavorot.show();
  playerPrihod.show();
  playerZavadila.show();
  spellDeck.show();
  cardInfo.show();
  player.show();
  if (gameManager.draggedCard != null) {
    gameManager.draggedCard.show();
  }
}

function mouseDragged() {
  playerHand.onMouseDragged(mouseX,mouseY);
  // playerSpell.onMouseDragged(mouseX,mouseY);
  playerNavorot.onMouseDragged(mouseX,mouseY);
  playerPrihod.onMouseDragged(mouseX,mouseY);
  playerZavadila.onMouseDragged(mouseX,mouseY);
  spellDeck.onMouseDragged(mouseX,mouseY);
}

function mousePressed() {
  mousePressedX = mouseX;
  mousePressedY = mouseY;
  
}

function mouseReleased() {
  if (abs(mousePressedX-mouseX) < 5 || abs(mousePressedX-mouseX) < 5) {
    console.log("Mouse clicked");
    playerHand.onMouseClicked(mouseX,mouseY);
    // playerSpell.onMouseClicked(mouseX,mouseY);
    playerNavorot.onMouseClicked(mouseX,mouseY);
    playerPrihod.onMouseClicked(mouseX,mouseY);
    playerZavadila.onMouseClicked(mouseX,mouseY);
  }
  console.log("Mouse released");
  playerHand.onMouseReleased(mouseX,mouseY);
  // playerSpell.onMouseReleased(mouseX,mouseY);
  playerNavorot.onMouseReleased(mouseX,mouseY);
  playerPrihod.onMouseReleased(mouseX,mouseY);
  playerZavadila.onMouseReleased(mouseX,mouseY);
  spellDeck.onMouseReleased(mouseX,mouseY);
}