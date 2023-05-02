
let currentText = 0;
let totalTexts = 3;
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

nextButton = createButton('Next');
nextButton.addClass('hiddenI');
nextButton.position(0, 0);
nextButton.size(200,50);
nextButton.style('color', 'white');
nextButton.style('background-color', 'transparent');
nextButton.style('border', 'none');
nextButton.style('font-size', '24px');
nextButton.style('font-family', 'Novecento Normal');
nextButton.style('position', 'absolute');
nextButton.style('left', '90%');
nextButton.style('top', '90%');
nextButton.style('transform', 'translate(-50%, -50%)');
// nextButton.mouseOver(hovered);
// nextButton.mouseOut(unHovered);
nextButton.mousePressed(() => { 
    if (currentText < totalTexts -1){
    currentText++;
        }else{ 
        nextButton.style.display = "none";
        fadeOutScreen(() => {
        currentScreen = "gameplay";
        fadeInScreen();
        currentText = -3; 
     });
   console.log(currentText);
}
}); 

}
      

// function mousePressed() {
// if (currentText < totalTexts -1){
//  currentText++;
  
// }else{ fadeOutScreen(() => {
//     currentScreen = "gameplay";
//     fadeInScreen();
//     currentText = -3;
//   });
// console.log(currentText);
// }


