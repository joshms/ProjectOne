
let diameter = 40;
let circleX = 0;
let circleY = 0; 
let r = 0;
let g = 0;
let b = 0;


let myImage;
function preload(){
  myImage = loadImage('Dragon-min.png');
}
function setup() {
  createCanvas(1000,1000);
  circleX = width/2;
  circleY = height/2;
}

function draw() {
  background(220);
  image(myImage,0,0);  
  
  fill(r,g,b);
  ellipse(width/2,height/2,diameter,60);

}

function mouseMoved(){
  if (dist(mouseX,mouseY,circleX,circleY)<diameter/2){
    r = random(225);
    g = random(225);
    b = random(225);
  }
}
