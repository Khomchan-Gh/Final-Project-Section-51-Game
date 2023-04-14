function playButton(){
  
    playButton1 = createButton('Start');
    playButton1.addClass('hidden1');
    playButton1.position(0, 0);
    playButton1.size(200,50);
    playButton1.style('background-color', 'transparent');
    playButton1.style('border', 'none');
    playButton1.style('font-size', '48px');
    playButton1.style('color', 'white');
    playButton1.style('font-family', 'Novecento normal');
    playButton1.style('position', 'absolute');
    playButton1.style('left', '50%');
    playButton1.style('top', '80%');
    playButton1.style('transform', 'translate(-50%, -50%)');

    // if (currentScreen = 'menu') {
    //   playButton1.removeClass('hidden');
    // } else {
    //   playButton1.addClass('hidden');
    // }
    
    playButton1.mousePressed(() => { 
      currentScreen = "intro";
      playButton1.hide();
      console.log("Hello");
    });
  }