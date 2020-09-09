const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon, polygon_Image;
var score = 0;
var backgroundImg

function preload(){
  getTimeForBackgroundImage ();
  polygon_Image = loadImage("hexagon.png");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(450,395,width,15);
  ground2 = new Ground(390,300,250,10);
  ground3 = new Ground(700,200,200,10);

//GROUND 2 BOXES
//Base Floor  
  box1 = new Box(300,275,30,40);
  box2 = new Box(330,275,30,40);
  box3 = new Box(360,275,30,40);
  box4 = new Box(390,275,30,40);
  box5 = new Box(420,275,30,40);
  box6 = new Box(450,275,30,40);
  box7 = new Box(480,275,30,40);

//First Floor
  box8 = new Box(330,235,30,40);
  box9 = new Box(360,235,30,40);
  box10 = new Box(390,235,30,40);
  box11 = new Box(420,235,30,40);
  box12 = new Box(450,235,30,40);

//Second Floor
  box13 = new Box(360,195,30,40);
  box14 = new Box(390,195,30,40);
  box15 = new Box(420,195,30,40);

//Third Floor
  box16 = new Box(390,155,30,40);
 
//GROUND 3 BOXES
//First Floor  
  boxes1 = new Box(640,175,30,40);
  boxes2 = new Box(670,175,30,40);
  boxes3 = new Box(700,175,30,40);
  boxes4 = new Box(730,175,30,40);
  boxes5 = new Box(760,175,30,40);

//Second Floor
  boxes6 = new Box(670,135,30,40);
  boxes7 = new Box(700,135,30,40);
  boxes8 = new Box(730,135,30,40);

//Third Floor  
  boxes9 = new Box(700,95,30,40);

  polygon = Bodies.circle(50,200,20);
  World.add(world, polygon);

  slingshot = new SlingShot(this.polygon, {x:100, y:200});
  
  
}

function draw() {
  if(backgroundImg != null){
    background(backgroundImg);
  }  
  Engine.update(engine);
  ground1.display();
  ground2.display();
  ground3.display();

  //Displyaing Box And Boxes
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();

  boxes1.display();
  boxes2.display();
  boxes3.display();
  boxes4.display();
  boxes5.display();
  boxes6.display();
  boxes7.display();
  boxes8.display();
  boxes9.display();

  slingshot.display();

  //Displaying Scores 
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();

  boxes1.score();
  boxes2.score();
  boxes3.score();
  boxes4.score();
  boxes5.score();
  boxes6.score();
  boxes7.score();
  boxes8.score();
  boxes9.score();

  //Displaying Score
  text("Score :"  +score, 750,40);
  
  imageMode(CENTER)
  image(polygon_Image ,polygon.position.x, polygon.position.y,40,40);

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32 && polygon.speed < 3 ){
   Matter.Body.setPosition(polygon, {x: 100, y: 200});
    slingshot.attach(polygon); 
  }
}

async function getTimeForBackgroundImage (){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour  = datetime.slice(11,13);
  console.log(hour);
  if(hour >= 06 && hour <= 18 ){
      bg="Day.png"
  }
  else{
      bg="Night.jpg"
  }
  backgroundImg = loadImage(bg);
}

