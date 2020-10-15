const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var polygon,polyImg;
function preload(){
  polyImg = loadImage("images/polygon.png")
}
function setup() {

  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
//polygon holder


polygon =Bodies.circle(50,200,20);
World.add(world,polygon)
slingShot = new SlingShot(this.polygon,{x:100,y:100});

  //Tower1
ground1 = new Ground(400,200,150,10)
block1 = new Box(400,185,20,20)
block2 = new Box(420,185,20,20)
block3 = new Box(440,185,20,20)
block4 = new Box(460,185,20,20)
block5 = new Box(380,185,20,20)
block6 = new Box(360,185,20,20)
block7 = new Box(340,185,20,20)

block8 = new Box(400,165,20,20)
block9 = new Box(420,165,20,20)
block10 = new Box(440,165,20,20)
block11 = new Box(380,165,20,20)
block12 = new Box(360,165,20,20)

block13 = new Box(400,145,20,20)
block14 = new Box(420,145,20,20)
block15 = new Box(380,145,20,20)

block16 = new Box(400,125,20,20)

  //Tower2
ground2 = new Ground( 600,150,110,10)
blockz1 = new Box(600,135,20,20)
blockz2 = new Box(620,135,20,20)
blockz3 = new Box(640,135,20,20)
blockz4 = new Box(580,135,20,20)
blockz5 = new Box(560,135,20,20)

blockz6 = new Box(600,115,20,20)
blockz7 = new Box(620,115,20,20)
blockz8 = new Box(580,115,20,20)

blockz9 = new Box(600,95,20,20)

  
}

function draw() {
  background(55, 43, 43); 
  Engine.update(engine); 
  // Tower 1
ground1.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();

block8.display();
block9.display();
block10.display();
block11.display();
block12.display();

block13.display();
block14.display();
block15.display();

block16.display();

  //Tower 2
ground2.display();
blockz1.display();
blockz2.display();
blockz3.display();
blockz4.display();
blockz5.display();

blockz6.display();
blockz7.display();
blockz8.display();

blockz9.display();

keyPressed();
slingShot.display();
imageMode(CENTER);
image(polyImg,polygon.position.x,polygon.position.y,50,50)

fill("White")
textFont("Burbank Big Condensed")
textSize(30);
text("Drag the Hexagonal Stone and release it, to launch it towards the blocks....",5,25)
drawSprites();
}
function mouseDragged(){
Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}
function mouseReleased(){
slingShot.fly();
}
function keyPressed(){
  if(keyCode===32){
    slingShot.attach(this.polygon);
  }
}
