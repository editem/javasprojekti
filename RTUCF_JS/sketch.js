let canvas;

function setup(){
canvas = createCanvas(windowWidth,windowHeight);
canvas.position(0,0);
canvas.style('z-index', '-1');


background(182, 252, 213);
}

function draw(){


point(mouseX, mouseY);

for(let i = 0; i<windowWidth; i+=5){

strokeWeight(0.5);
stroke(153);
line(0, i, 500, i);

}
}
