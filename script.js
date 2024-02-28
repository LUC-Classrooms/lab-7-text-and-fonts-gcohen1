/**
 * Lab 7 - Text
 */

function setup() {
  createCanvas(400, 480);
  textFont("TimesNewRoman");
}


function draw() {
  background(56,0,0);
  textSize(16);
  fill(255); 
  text("Gracie is so ...", 20, 60);
  textSize(32);
  text("awesome.", 20, 160);
}

if(mouseIsPressed){ // true or false?
  // if true, change the fill color here
  fill (56,0,0)
    textSize(16);
    text("Gracie is so ...", 20, 60);
}