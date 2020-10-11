const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var divisionHeight=300;
var particles=[];
var plinkos=[];
var divisions=[];


function setup() {
  createCanvas(490,480);

  engine = Engine.create();
	world = engine.world;
    
  ground=new Ground(0,450,2800,10);
  division1=new Division(10,345,10,200);
  division2=new Division(90,345,10,200);
  division3=new Division(170,345,10,200);
  division4=new Division(250,345,10,200);
  division5=new Division(320,345,10,200);
  division6=new Division(400,345,10,200);
  division7=new Division(480,345,10,200);

  for (var j = 55; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,75));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,175));
  }

 

  
  Engine.run(engine);

}

function draw() {
  background(0,0,0);  

 ground.display();
 division1.display();
 division2.display();
 division3.display();
 division4.display();
 division5.display();
 division6.display();
 division7.display();

 for (var j = 0; j < plinkos.length; j++) {
     
  plinkos[j].display();
  
}
if(frameCount%60===0){
  particles.push(new Particles(random(width/2-30, width/2+30), 10,10));
}

for (var k = 0; k < particles.length; k++) {

  particles[k].display();
} 
 
  drawSprites();
}