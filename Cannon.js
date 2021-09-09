class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.image = loadImage("assets/cannonBase.png");
    this.cannon = loadImage("assets/canon.png");
    
  }
  display(){
    push()
    translate (this.x,this.y);
    rotate (this.angle);

    imageMode(CENTER);
    image(this.cannon,this.x,this.y,this.width,this.height);

    pop ()
    image (this.image,70,20,200,200);
  }
  
}
