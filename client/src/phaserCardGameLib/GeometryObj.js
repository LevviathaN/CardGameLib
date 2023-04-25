export default class GeometryObj {
  constructor(scene, name) {
    this.id = 0;
    this.x = 0; //w/2
    this.y = 0; //h/2
    this.w = 0;
    this.h = 0;
    this.maxW = 0;
    this.maxH = 0;
    this.minW = 0;
    this.minH = 0;
    this.size = 0;
    this.color = 0;
    this.borderColor = "black";
    this.borderThickness = 1;
    this.rotation = 0;
    this.shape = 0;
    this.isDragged = false;
    
    this.isMouseOver = function(mx,my) {
      switch(this.shape) {
        case "rect":
          return abs(mx-this.x) <= this.w/2 && abs(my-this.y) <= this.h/2;
        case "circle": 
          return dist(this.x,this.y,mx,my) <= this.size;
          break;
        case "ellipse": 
          break;
      }
    }
    
    this.show = function() {
      push();
      pop();
    }
    
    this.highlight = function(color, thickness) {
      this.borderColor = color;
      this.borderThiskness = thickness;
    }

    
    this.onHover = function() {
      
    }
    
    this.dragAndDrop = function() {
      
    }
  }
}