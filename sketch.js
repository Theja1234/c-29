const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    //platform = new Ground(150, 305, 300, 170);

    box1 = new Box(900,20,90,90);
    box2 = new Box(900,-30,90,90);
    //pig1 = new Pig(810, 350);
    //log1 = new Log(10,50,90,90);

    box3 = new Box(900,-80,90,90);
    box4 = new Box(900,-130,90,90);
    //pig3 = new Pig(810, 220);

    //log3 =  new Log(200,50,90,90);

    box5 = new Box(900,-180,90,90);
    //log4 = new Log(700,100,90,90);
    //log5 = new Log(870,120,90,90);

    bird = new Bird(200,50);

    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background("black");
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    //pig1.display();
    //log1.display();

    box3.display();
    box4.display();
    //pig3.display();
    //log3.display();

    box5.display();
    //log4.display();
    //log5.display();

    bird.display();
    //platform.display();
    //log6.display();
    slingshot.display();  
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}