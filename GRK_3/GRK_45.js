<style> body { background-color:#ccc; } </style>
<script src="//cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.7/p5.js"></script>

function setup() {
    createCanvas(512,512);
    background(255);
}
var last_x=-1;
var last_y=-1;
function mouseDragged() {  
  if(mouseButton != LEFT) return;
  if(last_x>0) {
    line(last_x,last_y,mouseX,mouseY);
  }
  last_x=mouseX;
  last_y=mouseY;
}
function mouseReleased() {
  last_x=last_y=-1;
  if(mouseButton == RIGHT) {
    loadPixels();
    flood_fill(mouseX,mouseY);
    updatePixels();
  }
}
function set_pixel(x,y,c) {
    idx=(y*512+x)*4;
    pixels[idx]=c;
    pixels[idx+1]=c;
    pixels[idx+2]=c;
    pixels[idx+3]=255;
}
function get_pixel(x,y) {
 idx=(y*512+x)*4;
 return pixels[idx];
}
  var stos = []
//wlasciwa funkcja do wypelniania
function flood_fill(x,y) {
  stos.push([x,y]);
  var cnt = 10000;
  while(stos.length>0 && cnt>0){
  	console.log(cnt);
  	[x,y]=stos.pop();
    if(x>canvas.width&&y>canvas.height){
    	continue;
    }
    
  var color = get_pixel(x,y);
  console.log(color);
  if(color!=255){
  		continue;
    }
  set_pixel(x,y,200);
  stos.push([x,y-1]);
  stos.push([x,y+1]);
  stos.push([x-1,y]);
  stos.push([x+1,y]);
  console.log(cnt)
    
  	cnt--;
  }
}
