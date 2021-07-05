<script src="//cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.7/p5.js"></script>
var ax=50
var ay=250
var bx=250
var by=250
var cx=150
var cy=50
function setup() {
  createCanvas(400, 300);
  noLoop()
}

function draw() {
  background(0,0,0);
  stroke(255,255,255)
  point(ax,ay)
  point(bx,by)
  point(cx,cy)
  var currX=ax
  var currY=ay
  for(i=0;i<30000;i++){
    
    var liczba = random(0,3)
    var liczba2=floor(liczba)
    switch(liczba2){
      case 0:
        currX=(currX+ax)/2
        currY=(currY+ay)/2
        point(currX,currY)
        break
      case 1:
        currX=(currX+bx)/2
        currY=(currY+by)/2
        point(currX,currY)
        break
      default:
        currX=(currX+cx)/2
        currY=(currY+cy)/2
        point(currX,currY)
        
    }
  }
  updatePixels();
}
