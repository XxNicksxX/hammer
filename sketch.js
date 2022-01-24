const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var ferro;
 var rubber;
 var pedra;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    ferro = new Ferro (200,200,50,60)
    rubber = new Rubber (500,200,30);
    pedra = new Pedra (800,100,20);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    pedra.display();
    ferro.display();
    rubber.display();
 
}