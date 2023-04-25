import GeometryObj from "./GeometryObj";

export default class Player extends GeometryObj {
  constructor(scene, name) {
    super(scene, name);
    this.name = "";
    this.hand = null;
    this.stats = []; //array
    this.size = 60;
    this.shape = "circle";
    this.alreadyTurnedThisRound = false;
    
    this.show = function() {
      push();
      ellipseMode(CENTER);
      stroke(this.borderColor);
      strokeWeight(this.borderThickness);
      fill(this.color);
      ellipse(this.x,this.y,this.size,this.size);
      textAlign(CENTER,CENTER);
      fill("black");
      text(this.name.charAt(0),this.x,this.y);
      pop();
    }

    this.setStat = function(statName, statValue) {
      let statExists = false;
      for (let i = 0; i < this.stats.length; i++) {
        if (this.stats[i].name == statName) {
          this.stats[i].value = statValue;
          statExists = true;
          break;
        }
      }
      if (!statExists) {
        this.stats.push({name: statName, value: statValue});
      }
    }
    
    this.getStat = function(statName) {
      for (let i = 0; i < this.stats.length; i++) {
        if (this.stats[i].name == statName) {
          return this.stats[i].value;
        }
      }
    }

    this.onMouseClicked = function(mx,my) {
      if (this.isMouseOver(mx,my)) {
        if (uiManager.selectedCard != null) {
          uiManager.selectedCard.highlight("black",1);
        }
        uiManager.selectedCard = this;
        uiManager.selectedCard.highlight("red",2);
      }
    }
  }
}