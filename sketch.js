
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
   

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bob1 = new Bob(200,600,50);
	bob2 = new Bob(300,600,50);
	bob3 = new Bob(400,600,50);
	bob4 = new Bob(500,600,50);
	bob5 = new Bob(600,600,50);

	roof = new Roof(400,200,600,20);

	a = new Rope(bob1.body,{x:150,y:200});
	b = new Rope(bob2.body,{x:250,y:200});
	c = new Rope(bob3.body,{x:350,y:200});
	d = new Rope(bob4.body,{x:450,y:200});
	e = new Rope(bob5.body,{x:550,y:200});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();
  
  a.display();
  b.display();
  c.display();
  d.display();
  e.display();

  drawSprites();
 
}
function keyPressed(){

	
		if(keyCode ===37){
			console.log("hello");
			Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100, y:-95});
		}
	}







