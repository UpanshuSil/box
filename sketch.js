var canvas;
var music1;
var rect1,rect2,rect3,rect4;
var square;
var edges;

function preload(){
    music1 = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1100,600);

    rect1=createSprite(1000,590,260,20);
    rect1.shapeColor=("red");
    rect2=createSprite(700,590,260,20);
    rect2.shapeColor=("blue");
    rect3=createSprite(400,590,260,20);
    rect3.shapeColor=("green");
    rect4=createSprite(100,590,260,20);
    rect4.shapeColor=("purple");
    
    square=createSprite(random(80,550));
   
    square.shapeColor=("white");
square.velocityY=4;
square.velocityX=3;



}

function draw() {
    background("orange");
    
    edges=createEdgeSprites(); 
   
    square.bounceOff(edges);
    
    
    
          
      

   if(rect1.isTouching(square) && square.bounceOff(rect1)){
       square.shapeColor=("red"); 
       
   }
   
   if(square.isTouching(rect2)){
    square.shapeColor=("blue")
    music1.stop();
    square.velocityX=0;
      square.velocityY=0;}
   


if(rect3.isTouching(square) && square.bounceOff(rect3)){
    square.shapeColor=("green");
    music1.play();
    
}
if(rect4.isTouching(square) && square.bounceOff(rect4)){
    square.shapeColor=("purple");
   
}



 



drawSprites();



}
