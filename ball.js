class Ball 
{
  constructor(x, y, w,h) 
  {
    let options = {
     isStatic:false,
     restitution:0.8
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    let angle = this.body.angle
    push();
    translate(pos.x,pos.y)
    rotate(angle)
    ellipseMode(CENTER);
    noStroke();
    fill("#ABC4EF");
    ellipse(0,0, this.w, this.h);
    pop();
  }
}