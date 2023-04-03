let currentText = -1;
const totalTexts = 3;
let texts = ["Hello, my name is Cecilia and this is a prototype of the game ", "This   should be a tutorial in the future of this work", "Let's get to the gameplay for now"];

function intro() {

image(ceciliaStory, 0, 20, 619, 877);

noStroke();
rectMode(CENTER);
fill(120,120,120,95);
rect(width/2,550,1200,250);

textAlign(LEFT);
textSize(24);
textLeading(40);
fill(255);
text(texts[currentText], 60, 470);

}

function mousePressed() {

if (currentText < totalTexts -1){
 currentText++;
  
}else{ currentScreen = "gameplay";

}

}



