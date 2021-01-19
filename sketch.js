const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,platform;
var slingShot;
var polygon, polygonImg;

function preload(){
    polygonImg = loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(590, 350, 280, 9);
    ground2 = new Ground(990, 200, 250, 9);
    
    box1 = new Box(500, 320, 30, 50);
    box2 = new Box(530, 320, 30, 50);
    box3 = new Box(560, 320, 30, 50);
    box4 = new Box(590, 320, 30, 50);
    box5 = new Box(620, 320, 30, 50);
    box6 = new Box(650, 320, 30, 50);
    box7 = new Box(680, 320, 30, 50);
    
    box8 = new Box(515, 270, 30, 50);
    box9 = new Box(545, 270, 30, 50);
    box10 = new Box(575, 270, 30, 50);
    box11 = new Box(605, 270, 30, 50);
    box12 = new Box(635, 270, 30, 50);
    box13 = new Box(665, 270, 30, 50);

    box14 = new Box(530, 220, 30, 50);
    box15 = new Box(560, 220, 30, 50);
    box16 = new Box(590, 220, 30, 50);
    box17 = new Box(620, 220, 30, 50);
    box18 = new Box(650, 220, 30, 50);

    box19 = new Box(545, 170, 30, 50);
    box20 = new Box(575, 170, 30, 50);
    box21 = new Box(605, 170, 30, 50);
    box22 = new Box(635, 170, 30, 50);

    box23 = new Box(560, 120, 30, 50);
    box24 = new Box(590, 120, 30, 50);
    box25 = new Box(620, 120, 30, 50);

    box26 = new Box(575, 70, 30, 50);
    box27 = new Box(605, 70, 30, 50);

    box28 = new Box(590, 20, 30, 50);

    box01 = new Box(990, 170, 30, 50);
    box02 = new Box(1020, 170, 30, 50);
    box03 = new Box(1050, 170, 30, 50);
    box04 = new Box(1080, 170, 30, 50);
    box05 = new Box(900, 170, 30, 50);
    box06 = new Box(930, 170, 30, 50);
    box07 = new Box(960, 170, 30, 50); 
    
    box08 = new Box(930, 120, 30, 50);
    box09 = new Box(960, 120, 30, 50); 
    box010 = new Box(990, 120, 30, 50);
    box011 = new Box(1020, 120, 30, 50);
    box012 = new Box(1050, 120, 30, 50);

    box013 = new Box(960, 70, 30, 50);
    box014 = new Box(990, 70, 30, 50);
    box015 = new Box(1020, 70, 30, 50);

    box016 = new Box(990, 20, 30, 50);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingshot = new SlingShot(this.polygon,{x:95, y:230})

}

function draw(){
    background(190, 30, 250);
    Engine.update(engine);
    ground.display();
    ground2.display();

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
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();

    box01.display();
    box02.display();
    box03.display();
    box04.display();
    box05.display();
    box06.display();
    box07.display();
    box08.display();
    box09.display();
    box010.display();
    box011.display();
    box012.display();
    box013.display();
    box014.display();
    box015.display();
    box016.display();

    fill("gold");
    imageMode(CENTER)
    image(polygonImg ,polygon.position.x,polygon.position.y,40,40);

    slingshot.display();

    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX, y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}