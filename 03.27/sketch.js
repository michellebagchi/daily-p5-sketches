let xoff = 0;
let angle =0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0, 150);
    angleMode(DEGREES);
    
}

function draw() {

   push();
   noStroke();
   fill(255, 10);
   rotate(radians(-2650,));
   rect(263, 823, 50, 150);
   pop();


   translate(730, 300);
   rotate(angle);

   push();
   stroke(255);
   fill(190, 50);
   rotate(radians(2640));
   rect(90, -5, 90, 20);
   
   pop();

   push();
   translate(width / 8, height / 8);
    rotate(frameCount * 0.5);
    scale(5);

    xoff = xoff + 10;

   let n = noise(xoff) * width;
//    stroke(255);
   fill(0, 50);
   
   circle(50, 50, 100, 150);

   angle = angle + 50;
    
pop();
   
}
  
function mousePressed() {
    background(random(255), random(255), random(255));
}




// push();

// translate(width / 2, height / 2);
// rotate(frameCount * 0.10);
// scale(0.9);

// xoff = xoff + 0.05;

// let n = noise(xoff) * width;


// translate(0.5, 0.5);
// rotate(angle);

// noStroke();
// fill(0, 50);
// rotate(radians(-20,));
// rect(50, 200, 50, 150);

// angle = angle + 0.05;

// noStroke();
// fill(255, 50);

// ellipse(100, 50, 30, 250);



// pop();