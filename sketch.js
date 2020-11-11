var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	box1S= createSprite(width/2, 650, 200,20);
	box1S.shapeColor="red"

	box2S= createSprite(width/2-100, 610, 20,100);
	box2S.shapeColor="red"

	box3S= createSprite(width/2+100, 610, 20,100);
	box3S.shapeColor="red"

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.65, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	ground2 = Bodies.rectangle(width/2, 670, width, 10 , {isStatic:true} );
	World.add(world, ground);
	
	 box1 =Bodies.rectangle(box1S.x,box1S.y,200,60,{isStatic:true})
	 World.add(world, box1);
	 
	 box2 =Bodies.rectangle(box2S.x,box2S.y,box2S.width,box2S.heigth,{isStatic:true})
	 World.add(world, box2);
	 
	 box3 =Bodies.rectangle(box3S.x,box3S.y,box3S.width,box3S.heigth,{isStatic:true})
     World.add(world, box3);

	Engine.run(engine);
  
}


function draw() {

  Engine.update(engine)	
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false);
    
  }
}



