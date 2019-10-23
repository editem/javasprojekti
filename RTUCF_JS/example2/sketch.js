let r = 1;
let img;
let box1;
let size = 20;

function setup(){


  createCanvas(windowWidth, windowHeight, WEBGL)

  img = loadImage ("https://www.latvia.travel/sites/default/files/styles/lightbox/public/city/cesis-latvia-travel_4.jpg?itok=2wjEr8CP")
  box1 = new Cube(size);
}
function draw(){
background (182, 252, 213);
box1.display
}

class Cube{
constructor(size){
  this.size = size;

}
  display(){
    translate(-200, 0, 0);
    push();


  rotateY(r);
  texture(img);
  box(40);
  pop();
  r += 0.05;
  }
}
