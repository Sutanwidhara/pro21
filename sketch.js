
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var left;
var right;



function  preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}


	//Create the Bodies Here.

	ball = Bodies.circle(200,200,20);
	World.add(world,ball);
	
 groundObj =new Ground(width/2,600,width,10);
 left =new Ground(600,550,10,100);
 right=new Ground(750,550,10,100);
	
	
	
	
	
	
	
	
	
	
	
 
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20);
  groundObj.show();
  left.show();
  right.show();
  Engine.update(engine);
  drawSprites();
 
}

function keyPressed()
{
  if(keyCode==UP_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.03,y:-0.001});
    }
}

