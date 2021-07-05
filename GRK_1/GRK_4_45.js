<script src="//cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.7/p5.js"></script>
function setup() {
  createCanvas(800 ,800);
  noLoop();
  frameRate(25);
}

function draw() {
  //noprotect
  background(0,0,0);
  //var kolor = 0;
  for(y=0; y<height; y++)
   for(x=0; x<width; x++) {
     var roznicaX = x-width/2
     var roznicaY = y-width/2
     var d = sqrt(roznicaX*roznicaX+roznicaY*roznicaY)
     set(x, y, color(255-d,d,(x+y)*(256/(width+height))));
     //set(x,y,color(255,0,255))
     //updatePixels();
  }
  updatePixels();
}