var bolaX = 0
var bolaY = 0
var isRight = true
var isUp = true



function setup() {
  createCanvas(720, 400);
  noStroke();
}

function draw() {
  background(255, 204, 0);
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
  ////////////////////////////
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
  
  circle(bolaX, bolaY, 50);
}
