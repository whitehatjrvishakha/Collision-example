class Dots {
  constructor(x, y) {
    var options = {
      isStatic: true,
    };
    this.body = Bodies.rectangle(x, y, 30, 30, options);
    this.body.label = "dots";
    // just label to help in destroying
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = 30;

    World.add(world, this.body);
  }

  display() {
    fill(255);
    stroke("blue");
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    // ellipseMode(RADIUS);
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
  }
}
