function playButton(){
  
    playButton1 = createButton('Start');
    playButton1.addClass('hidden1');
    playButton1.position(0, 0);
    playButton1.size(200,50);
    playButton1.style('color', 'black');
    playButton1.style('background-color', 'transparent');
    playButton1.style('border', 'none');
    playButton1.style('font-size', '64px');
    playButton1.style('font-family', 'Novecento Bold');
    playButton1.style('position', 'absolute');
    playButton1.style('left', '20%');
    playButton1.style('top', '80%');
    playButton1.style('transform', 'translate(-50%, -50%)');
    playButton1.mouseOver(hovered);
    playButton1.mouseOut(unHovered);
    playButton1.mousePressed(() => {
      playButton1.hide();
      fadeOutScreen(() => {
      currentScreen = "intro";
      fadeInScreen();
    });
  });

    
    // if (currentScreen = 'menu') {
    //   playButton1.removeClass('hidden');
    // } else {
    //   playButton1.addClass('hidden');
    // }
  };

  function hovered(){
    playButton1.style('color', 'white');
  };

  function unHovered(){
    playButton1.style('color', 'black');
  };
  