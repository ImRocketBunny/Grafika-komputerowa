<script src="//cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.7/p5.js"></script>
console.log('Hello world!');
function setup() {
  createCanvas(800 ,600);
  noLoop();
  frameRate(25);
}
function draw() {
  //noprotect
  background(0,0,0);
  /*textFont("courier", 50);
  text("Hello world!",50,50);*/
  for(y=0; y<height; y++)
   for(x=0; x<width; x++) {
    
     set(x, y, color(255,0,255));
     //updatePixels();
  }
  updatePixels();
}