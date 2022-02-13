
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var block;
var retangulo;
var ground;

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.


	var block_options={
		restitution:0.7,
		friction:0.01,
		frictionAir:0.1	

	}

	var ball_options={
		restitution:0.5,
		friction:0.02,
		frictionAir:0	

	}

	var retangulo_options={
		restitution:0.01,
		friction: 1,
		frictionAir:0.3
	}

	var ground_options ={
		isStatic: true
	};
	 
	  
   
 ground = Bodies.rectangle(200,390,400,20,ground_options);
World.add(World,ground);
   

ball = Bodies.circle(220,10,10,ball_options);
World.add(World,ball)

block = Bodies.rectangle(110,50,10,10, block_options)
World.add(World,block);

retangulo = Bodies.rectangle(350,50,10,10,retangulo_options)
World.add(World,ratangulo);


  
}


function draw() {
  rectMode(CENTER);
  background("green");
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  fill("pink"); 
  rect(ground.position.x,ground.position.y,400,20);
  rect(block.position.x,block.position.y,10,10);
  rect(retangulo.position.x,retangulo.position.y,30,10);

 
  drawSprites();
 
}



