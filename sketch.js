const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(displayWidth-30,displayHeight-30);
    engine = Engine.create();
    world = engine.world;
    
    game= new Game()
    game.start()
    

    

    
}

function draw(){
    background(0);
    Engine.update(engine);

  
   
}
function loadBackgroundSprites(){
background_image_1=loadImage("bg2.jpg")  
background_image_2=loadImage("bg3.jpg") 
background_image_3=loadImage("bg4.jpg")
background_image=loadImage("introBg.jpg") 
}