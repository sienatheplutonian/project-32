const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
let ball, blower, blowermouth, button

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(500,500);
ball = new Ball(width/2+80, height/2-80,80,80)
blower = new Blower(width/2-50,height/2+50,150,20)
blowermouth = new Blowermouth(width/2+70,height/2+20,100,90)

button = createButton("Click to Blow")
button.position(width/2, height - 100)
button.class("blowButton")
button.mousePressed(blow)
}

function draw() {
  background(255,255,255); 

  Engine.update(engine)
  ball.show()
  blower.show()
  blowermouth.show()

  drawSprites();
}

function blow(){
  Matter.Body.applyForce(ball.body,{x:0,y:0}, {x:0,y:0.05})
}