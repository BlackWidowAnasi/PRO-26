class Boat {
  constructor(x, y, width, height, boatPos, boatanimation) {
    
    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;
    this.boatPosition = boatPos;
    this.animation = boatanimation
    this.speed = 0.05
    this.isBroken = false
    this.image = loadImage("./assets/boat.png");

    World.add(world, this.body);
  }

  remove(index) {
    this.animation = brokenboatanimation
    this.speed = 0.05
    this.width = 300
    this.height = 300
    this.isBroken = true
    setTimeout(() => {
      Matter.World.remove(world, boats[index].body);
      delete boats[index];
    }, 2000);
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    var index = floor(this.speed%this.animation.length);
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.animation[index], 0, this.boatPosition, this.width, this.height);
    
    pop();
  }
  animate(){
    this.speed = this.speed+0.05
  }
}
