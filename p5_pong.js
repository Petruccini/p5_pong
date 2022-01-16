var bolaX = 0
var bolaY = 0
var isRight = true
var isUp = true
var playerY;
var cpuY;

var playerHeight=70;


function setup() {
  createCanvas(720, 400);
  noStroke();
  playerY=height/2;
  cpuY=height/2;
}

function draw() {
  background(255, 204, 0);
  moveBall();
  circle(bolaX, bolaY, 50);
  
  rect(650,30,40,70);

  player();

  


  
}

if (keyCode === UP_ARROW) {
  fillVal = 255;
} else if (keyCode === DOWN_ARROW) {
  fillVal = 0;
}


function player(){ 

  if(keyIsPressed)
  {
    if (keyCode === UP_ARROW && playerY>0) {
      playerY=playerY-10;
    } else if (keyCode === DOWN_ARROW && playerY<height-playerHeight) {
      playerY=playerY+10;
    }
    
  }

  rect(30, playerY,40,playerHeight);

}

function moveBall(){
  if(bolaX <= 695 && isRight) 
{
  bolaX+=5;
}
else if(bolaX >=25)
{
  isRight = false
  bolaX-=5
}
else
{
  isRight=true
}
if(bolaY <= 375 && isUp) 
{
  bolaY+=5;
}
else if(bolaY >=25)
{
  isUp = false
  bolaY-=5
}
else
{
  isUp=true
}
}
function hitBall(){
  if(bolaY === playerY && bolaX === playerHeight){
    bolaX-=5
  }
}
