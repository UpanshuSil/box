var canvas;
var music;
var rect1,rect2,rect3,rect4;
var square;

function preload(){
    music = loadSound("music.mp3");
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
    
    square=createSprite(random(60,450));
    square.shapeColor=("white");
square.velocityY=2;
square.velocityX=2;

    

}

function draw() {
    background("orange");
    createEdgeSprites();
    
    square.bou
    
   //add condition to check if box touching surface and make it box

   if(rect1.isTouching(square) && square.bounceOff(rect1)){
       square.shapeColor=("red");
   }
   
   if(rect2.isTouching(square) && square.bounceOff(rect2)){
    square.shapeColor=("blue");
}
if(rect3.isTouching(square) && square.bounceOff(rect3)){
    square.shapeColor=("green");
}
if(rect4.isTouching(square) && square.bounceOff(rect4)){
    square.shapeColor=("purple");
}
 
    drawSprites();
    
}
