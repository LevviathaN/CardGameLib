var canva;
var card1, card2, card3;
var cardInfo;
var deck;
var hand;
var spell;

var mousePressedX = 0;
var mousePressedY = 0;
var mouseReleasedX = 0;
var mouseReleasedY = 0;

function setup() {
  canva = createCanvas(600, 600);

  hand = new Hand();
  hand.x = width/2;
  hand.y = 550;
  hand.color = "green";
  for (let i = 0; i < 3; i++) {
    hand.addCard(new Card(i));
    hand.cards[i].id = i;
  }
  
  spell = new Hand();
  spell.x = width/2;
  spell.y = 450;
  spell.color = "lightgreen";
  
  deck = new Deck();
  deck.x = 200;
  deck.y = 300;
  deck.color = "blue";
  for (let i = 0; i < 5; i++) {
    deck.addCard(new Card("deck" + i));
    deck.cards[i].id = i;
    deck.cards[i].setStat("attack",i*20);
    deck.cards[i].setStat("mana",i*5);
  }
  
  cardInfo = new CardInfo();
  cardInfo.x = 510;
  cardInfo.y = 50;
  cardInfo.color = "yellow";
}

function draw() {
  background(220);
  hand.show();
  spell.show();
  deck.show();
  cardInfo.show();
  if (gameManager.draggedCard != null) {
    gameManager.draggedCard.show();
  }
}

function mouseDragged() {
  hand.onMouseDragged(mouseX,mouseY);
  spell.onMouseDragged(mouseX,mouseY);
  deck.onMouseDragged(mouseX,mouseY);
}

function mousePressed() {
  mousePressedX = mouseX;
  mousePressedY = mouseY;
  
}

function mouseReleased() {
  if (abs(mousePressedX-mouseX) < 5 || abs(mousePressedX-mouseX) < 5) {
    console.log("Mouse clicked");
    hand.onMouseClicked(mouseX,mouseY);
    spell.onMouseClicked(mouseX,mouseY);
  }
  console.log("Mouse released");
  hand.onMouseReleased(mouseX,mouseY);
  spell.onMouseReleased(mouseX,mouseY);
  deck.onMouseReleased(mouseX,mouseY);
}