<script src="//cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.7/p5.js"></script>
function preload() {
img = loadImage("https://raw.githubusercontent.com/scikit-image/scikit-image/master/skimage/data/astronaut.png");
img_r=createImage(256,256);
img_g=createImage(256,256);
img_b=createImage(256,256);
img_sum=createImage(256,256);
}

function setup() {

  createCanvas(512,512);
  img.resize(256,256)
  img.loadPixels();
  img_r.loadPixels();
  img_g.loadPixels();
  img_b.loadPixels();
  for(x=0;x<img.width;x++)
    for(y=0;y<img.height;y++) {      
      pos=4*(y*img.width+x);
      img_r.pixels[pos]=img.pixels[pos]/2
      img_r.pixels[pos+1]=img.pixels[pos+1]/5
      img_r.pixels[pos+2]=img.pixels[pos+2]/5
      img_r.pixels[pos+3]=255
      img_g.pixels[pos]=img.pixels[pos]/5
      img_g.pixels[pos+1]=img.pixels[pos+1]/2
      img_g.pixels[pos+2]=img.pixels[pos+2]/5
      img_g.pixels[pos+3]=255
      img_b.pixels[pos]=img.pixels[pos]/5
      img_b.pixels[pos+1]=img.pixels[pos+1]/5
      img_b.pixels[pos+2]=img.pixels[pos+2]/2
  		img_b.pixels[pos+3]=255
  }
  img_r.updatePixels();
  img_g.updatePixels();
  img_b.updatePixels();
  image(img_r,0,0)
  image(img_g,256,0)
  image(img_b,0,256)
  img_sum.blend(img_r,0,0,256,256,0,0,256,256,ADD);
  img_sum.blend(img_g,0,0,256,256,0,0,256,256,ADD);
  img_sum.blend(img_b,0,0,256,256,0,0,256,256,ADD);
  image(img_sum,256,256)
  
  
}
