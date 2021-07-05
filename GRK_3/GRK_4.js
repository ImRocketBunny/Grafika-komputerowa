<style> body { background-color:#ccc; } </style>
<script src="//cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.7/p5.js"></script>

function setup() {
    createCanvas(512,512);
    background(255);
}
var x0=-1;
var y0=-1;
var x1=-1;
var y1=-1;
function mousePressed() {
    x0=mouseX;
    y0=mouseY;
}
function mouseDragged() {  
    x1=mouseX;
    y1=mouseY;  
    background(255);
    noStroke();
    fill('red');
    ellipse(x0-3,y0-3,6);
    fill('green');  
    ellipse(x1-3,y1-3,6);
}
function mouseReleased() {
  background(255);
  loadPixels();
  draw_line();
  updatePixels();
}

function set_pixel(x,y,c) {
    idx=(y*512+x)*4;
    pixels[idx]=-c;
    pixels[idx+1]=c;
    pixels[idx+2]=0;
    pixels[idx+3]=255;
}
function draw_line() {

 var dx=x1-x0;
  var dy=y1-y0;
  var a=Math.round((dy/dx));
  var b=y0-a*x0;
  var x = x0;
  var ile = Math.abs(dx);
  var Dp = 2*dy-dx
  var D = Dp
  var y = y0
  for( var x=x0;x<=x1;x++){
    //for(var y=y0;y<canvas.height;y++) { 
    set_pixel(x,y,0);
      var dx=x1-x0;
  		var dy=y1-y0;
      var Dp = 2*dy-dx
      var Deq = 2*dy
      var Dinc = 2*dy-2*dx
      var dxy = a*x-y+b
      var dxy2 = dxy*2*dx
      var dxy23 = 2*dy-dx
      var midpoint = a-(1/2);
      if(D<0){
      	D= D+Dinc
      }else{
      	D= D+Dinc
        y=y+1
      	/*set_pixel(x0+1,y0+1,0);*/
      }
     
      
  }
  
  
}
