
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var btn2;
var angle = 60;
var ground1
var ground2
var ground3
var ball2
var ball3
var ball4
var ball5

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01

  }
   

   var ball2_options = {
    restitution: 0.4,
    frictionAir:0.02
   }

  var ball3_options = {
    restitution: 0.4,
    frictionAir:0.02
  }
  var ball4_options = {
    restitution: 0.4,
    frictionAir:0.02
  }
  var ball5_options = {
    restitution: 0.4,
    frictionAir:0.02
  }

  var ground_options ={
    isStatic: true
  };

  ground1 = Bodies.rectangle(180,200,100,20,ground_options);
  World.add(world,ground1);

  ground2 = Bodies.rectangle(170,200,100,20,ground_options);
  World.add(world,ground2);

  ground3 = Bodies.rectangle(2100,200,100,20,ground_options);
  World.add(world,ground3);

  ball = Bodies.circle(200,10,10,ball_options);
  World.add(world,ball);

  ball2 = Bodies.circle(220,10,10,ball2_options);
  World.add(world,ball2);

  ball3 = Bodies.circle(200,10,20,ball3_options);
  World.add(world,ball3);

  ball4 = Bodies.circle(200,10,10,ball4_options);
  World.add(world,ball4);

  ball5 = Bodies.circle(200,10,10,ball5_options);
  World.add(world,ball5);


  ground = Bodies.rectangle(100,400,650,20,ground_options);
  World.add(world,ground); 
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);

  Matter.Body.rotate(ground1,angle)
  push();
  translate(ground1.position.x,ground1.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop();

  angle +=0.1;

  Matter.Body.rotate(ground2,angle)
  push();
  translate(ground2.position.x,ground2.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop();

  angle +=0.1;

  Matter.Body.rotate(ground3,angle)
  push();
  translate(ground3.position.x,ground3.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop();

  angle +=0.1;
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,6500,20)  

  ellipse(ball2.position.x,ball2.position.y,20);
  rect(ground.position.x,ground.position.y,650,20) 

  ellipse(ball3.position.x,ball3.position.y,20);
  rect(ground.position.x,ground.position.y,650,20) 

  ellipse(ball4.position.x,ball4.position.y,20);
  rect(ground.position.x,ground.position.y,650,20) 

  ellipse(ball5.position.x,ball5.position.y,20);
  rect(ground.position.x,ground.position.y,650,20) 

}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  