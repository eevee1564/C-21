var canvas;
var music;
var b1;
var b2;
var b3;
var b4;
var ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    b1=createSprite(0,580,360,30);
    b1.shapeColor="red";

    b2=createSprite(295,580,200,30);
    b2.shapeColor="blue";

    b3=createSprite(515,580,200,30);
    b3.shapeColor="green";

    b4=createSprite(740,580,220,30);
    b4.shapeColor="yellow";

    ball=createSprite(random(20,750),100,40,40)
    ball.shapeColor="black"
    ball.velocityX=4;
    ball.velocityY=9;

    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background("white");
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    if(b1.isTouching(ball)&&ball.bounceOff(b1)){
        ball.shapeColor="pink";
        music.play;

    }
    if(b2.isTouching(ball)){
        ball.shapeColor="magenta";
        ball.velocityX=0;
        ball.velocityY=0;
        music.stop;
    }
    if(b3.isTouching(ball)&&ball.bounceOff(b3)){
        ball.shapeColor="orange";
    }
    if(b4.isTouching(ball)&&ball.bounceOff(b4)){
        ball.shapeColor="purple";
    }
    drawSprites();
    //create edgeSprite

    //add condition to check if box touching surface and make it box
}
