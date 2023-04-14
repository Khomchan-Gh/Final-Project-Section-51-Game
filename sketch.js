let currentScreen = "menu";
let isPlayerTurn;
let cecilia;
let AtkButton, SkillButton, SpButton;
let ue;
let ueHp;
let actionDelay;
let screenDelay;

function preload() {
  
  menuTitle = loadFont('Assets/Fonts/Novecento Bold.otf');
  ceciliaStory = loadGif('Assets/Characters/ceciliaIdle_1.gif');
  // ceciliaStandby = loadGif('Assets/Characters/ceciliaStandBy_1.gif');
  ceciliaStandby = loadImage('Assets/Characters/Cecilia-Stance1.png');
  ceciliaAttack = loadImage('Assets/Characters/ceciliaAtk_1.png');
  // ceciliaSkill = loadGif('Assets/Characters/ceciliaSkillTest.gif')
  ceciliaSkill = loadImage('Assets/Characters/Cecilia-Stance2.png');
  stageBg = loadImage('Assets/Background/testbg.jpg');
  uE = loadImage('Assets/Enemy/Unknown_Entity_NO8.png');
  ceciliaProtrait = loadImage('Assets/Image/Cecilia_2.png');

}

function setup() {
  
  createCanvas(1280, 720);
  cecilia = new Cecilia();
  ue = new UE();
  isPlayerTurn = true;
  
}

function draw() {
  
  clear();
  console.log(currentScreen);

  if (currentScreen === "menu") {
    drawMenuScreen();
  
  }
  
  if (currentScreen === "intro") {
    drawIntroScreen();
    
  }
  
  if (currentScreen === "gameplay") {
    drawGamePlayScreen();
    
  }
  
  if (currentScreen === "ending_1") {
    drawEnding1();

  }

  if (currentScreen === "ending_2") {
    drawEnding2();
    
  }

  if (currentScreen === "ending_3") {
    drawEnding3();
    
  }
  
  if (currentScreen === "game_over") {
    gameOver();
    
  }
  


  
}

function drawMenuScreen() {
  background(30);
  title();
  playButton();
  var elements = document.getElementsByClassName("hidden3");

  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }
}

function drawIntroScreen() {
  
  background(10);
  intro();
  var elements = document.getElementsByClassName("hidden1");

  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }
  
}

function drawGamePlayScreen() {
  
  background(0);
  
  stageBg.resize(1280,550)
  image(stageBg,0,0)
  cecilia.show();
  ue.show();
  
  noStroke();
  rectMode(CENTER);
  fill(0);
  rect(width/2,650,windowWidth,230)
  skillButton();
  spButton();
  attackButton();
  chrProtrait();
  statusHp();
  statusMp();
  statusSp();
  ceciliaName();

  var elements = document.getElementsByClassName("hidden3");

  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }

  if (cecilia.hp <= 0 || ue.hp <= 0) {

      if (cecilia.hp <= 0) {
        currentScreen = "game_over";
      } else {
        currentScreen = "ending_1";
      }

      isPlayerTurn = true;
      cecilia.hp = cecilia.maxhp;
      cecilia.mp = cecilia.maxmp;
      cecilia.sp = cecilia.maxsp;
      ue.hp = ue.maxhp;

    }

  if (isPlayerTurn) {

    actionDelay = 0;

    textAlign(CENTER);
    text("Your Turn", width/2, 100)
    AtkButton.removeAttribute('disabled');
    AtkButton.mousePressed(() => { ue = cecilia.attack1(ue); isPlayerTurn = false;});
    cecilia.update();

    SkillButton.removeAttribute('disabled');
    SkillButton.mousePressed(() => {ue = cecilia.skill1(ue); isPlayerTurn = false;});
    cecilia.update();
    
    if (cecilia.mp >= 50) {
      SkillButton.removeAttribute('disabled');
    } else {
      SkillButton.attribute('disabled', 'true');
    }
    
  }
  

  if (!isPlayerTurn) {

    actionDelay ++;

    textAlign(CENTER);
    text("Enemy's Turn", width/2, 100)
    AtkButton.attribute("disabled", true);
    SkillButton.attribute("disabled", true);

    if (actionDelay == 50) {
      ue.attack1(cecilia);}
  
      if (actionDelay == 100) {
        isPlayerTurn = true;}
      }
        
}

function drawEnding1() {
  
  background(10);
  textAlign(CENTER);
  text("Ending#1",width/2,height/2)
  var elements = document.getElementsByClassName("hidden2");

  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }

  returnToTitle();
  
}

function drawEnding2() {
  
  background(10);
  
}

function drawEnding3() {
  
  background(10);
  
}

function gameOver() {
  
  background(10)
  textAlign(CENTER);
  text("GAME OVER",width/2,height/2);
  returnToTitle();
  retry();

  var elements = document.getElementsByClassName("hidden2");

  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }

}

function returnToTitle () {
  
  returnButton = createButton('Back To Title');
  returnButton.addClass ('hidden3');
  returnButton.position(0, 0);
  returnButton.size(200,50);
  returnButton.style('background-color', 'transparent');
  returnButton.style('border', 'none');
  returnButton.style('font-size', '24px');
  returnButton.style('color', 'white');
  returnButton.style('font-family', 'Novecento light');
  returnButton.style('position', 'absolute');
  returnButton.style('left', '50%');
  returnButton.style('top', '80%');
  returnButton.style('transform', 'translate(-50%, -50%)');
  
  returnButton.mousePressed(() => {
    currentScreen = "menu";
    // console.log(currentScreen);
  });
    
}

function retry () {
  
  retryButton = createButton('Retry');
  retryButton.addClass ('hidden3');
  retryButton.position(0, 0);
  retryButton.size(200,50);
  retryButton.style('background-color', 'transparent');
  retryButton.style('border', 'none');
  retryButton.style('font-size', '24px');
  retryButton.style('color', 'white');
  retryButton.style('font-family', 'Novecento light');
  retryButton.style('position', 'absolute');
  retryButton.style('left', '50%');
  retryButton.style('top', '70%');
  retryButton.style('transform', 'translate(-50%, -50%)');
  
  retryButton.mousePressed(() => {
    currentScreen = "gameplay";
    // console.log(currentScreen);
  });

}