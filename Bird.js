class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,20,20);
   // this.image = loadImage("sprites/bird.png");
  // ellipse(this.body.position.x,this.body.position.y,10,10)
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    //ellipse(this.body.position.x,this.body.position.y,15,15)
    super.display();
  }
}
