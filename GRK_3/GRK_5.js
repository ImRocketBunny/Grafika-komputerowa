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
	
  var dx=Math.abs(x1-x0);
  var dy=Math.abs(y1-y0);
  if(dy-dx<=0){
  	var dp = 2*dy-2;
    var deq = 2*dy;
    var dinc = 2*dy-2*dx
    var d=dp;
    var y=y0;
  var ix = (x0 < x1 ? 1 : -1);
  var iy = (y0 < y1 ? 1 : -1);
   for (x = x0; x != x1; x += ix) {
    set_pixel(x, y, 0);
    if (d < 0){
     d += deq;
     }
    else {
      d += dinc;
      y += iy;
    }
  }
  
  
      
  }
  
  
}
