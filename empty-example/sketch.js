var circle1 = 20; 
goback = 1; 
var r, g, b; 
function setup(){
createCanvas(600, 400);
r = random(255);
g = random (255);
b = random (255);
}

function draw(){
frameRate(15);
    
var x = random(0, 600);
var y = random(0, 400);

    
if(circle1 < 10 || circle1 > 20){
  goback = goback * -1;   
}

if(circle1 < 15){
    fill(0);
}else{
    fill(255);
}
stroke(0);
    
ellipse(x, y, circle1, circle1);
    circle1 = circle1 + goback; 

if(circle1 < 11){
stroke(r, g, b);
}

if(circle1 < 14){
stroke(r, g, b);
}
    
if(circle1 < 13){   
line(x, y, 300, 200);
}
    
    
}

//85, 75