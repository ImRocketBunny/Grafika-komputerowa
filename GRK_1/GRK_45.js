<script src="//cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.7/p5.js"></script>
function setup() {
  createCanvas(800, 600);
}

function draw() {
  //background(220);
  //noprotect
  background(0,0,0);
  for(y=0; y<height; y++)
   for(x=0; x<width; x++) {
    
     set(x, y, color(0,0,255));
     //updatePixels();
  }
  updatePixels();
  for(y=height*2/3; y<height; y++)
   for(x=0; x<width; x++) {
      
     set(x, y, color(0,255,0));
     
  }
  updatePixels();
  var liczba = 1000
  while(liczba>0){
    var randX = floor(random(0,width))
    var randY = floor(random(2/3*height,width))
    set(randX,randY,color(floor(random(0,255)),floor(random(0,255)),floor(random(0,255))))
    liczba=liczba-1
  }
  updatePixels();
  for(y=1/3*height; y<height-1/3*height; y++)
   for(x=1/4*width; x<width-1/4*width; x++) {
    
     set(x, y, color(150,75,0));
     
  }
  updatePixels();
   for(var y=50,w=0; y<200; y++,w+=2){
    for(x=1/2*width-w;x<1/2*width+w;x++){
      set(x,y,color(255,0,0))
      
    }
   }
  updatePixels();
  
}