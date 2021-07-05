<style> body { background-color:#ccc; } </style>
<script src="//cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.7/p5.js"></script>

function setup() {
    createCanvas(512,512);
    background(255);  
    imgA = createImage(512,512);
    imgB = createImage(512,512);
    imgA.loadPixels();
    imgB.loadPixels();
    var d = pixelDensity();
    for(var i=0; i<512*512*4*d; i+=4) {
      imgA.pixels[i]=240;
      imgA.pixels[i+1]=250;
      imgA.pixels[i+2]=240;
      imgA.pixels[i+3]=255;
      imgB.pixels[i]=240;
      imgB.pixels[i+1]=240;
      imgB.pixels[i+2]=250;
      imgB.pixels[i+3]=255;
    }
    imgA.updatePixels();
    imgB.updatePixels();
}
function draw() {
    if (!keyIsDown(32)) {
      image(imgA,0,0);
      text('Image A',10,20);
    } else {
      image(imgB,0,0);
      text('Image B',10,20);
  }
}
function makeVector(x,y){
  return tab=[x,y,1];
}
function makeIdentity(){
  var tab=[[1,0,0],[0,1,0],[0,0,1]]
  return tab
}
function makePrzesuniecie(tx,ty){
  var tab=[[1,0,0],[0,1,0],[tx,ty,1]]
  return tab
}
function makeSkalowalna(sx,sy){
  var tab=[[sx,0,0],[0,sy,0],[0,0,1]]
  return tab
}
function makeObrotu(kat){
  var tab=[[Math.cos(kat),Math.sin(kat),0],[-Math.sin(kat),Math.cos(kat),0],[0,0,1]]
  return tab
}
function makePochylania(shx,shy){
  var tab=[[1,shy,0],[shx,1,0],[0,0,1]]
  return tab
}
function drawVector(img,vec){
  img.set(vec[0],vec[1],vec[2]);
  img.updatePixels();
}
function mouseDragged(){
  var tab=makeVector(mouseX,mouseY);
  drawVector(imgA,tab);
  //console.log(makeIdentity());

}
