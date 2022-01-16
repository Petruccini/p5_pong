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
 
  background(33);

  circle(width/2, height/2, 50, 50);
  
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