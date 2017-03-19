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

    
if(circle1 < 10 || circle1 > 20){ //rule 1 - makes the circles a different size
  goback = goback * -1;   
}

if(circle1 < 15){ //rule 2 - changes the colours of the circles between black and white. 
    fill(0);
}else{
    fill(255);
}
stroke(0);
    
ellipse(x, y, circle1, circle1);
    circle1 = circle1 + goback; 


stroke(r, g, b); //changes the color of the lines to a different color everytime you run the program. 

    
if(circle1 < 13){ //rule 3 - connects a line to a cricle that is smaller than 13. 
line(x, y, 300, 200);
}
    
    
}

