let currentScreen = "menu";
let isPlayerTurn;
let cecilia;
let AtkButton, SkillButton, SpButton;
let ue;
let ueHp;
let novecentoBold, novecentoNormal, novecentoLight;
let actionDelay;
let screenDelay;
let buttonCreated = false;


function preload() {
  
  menuTitle = loadFont('Assets/Fonts/Novecento Bold.otf');
  novecentoBold = loadFont('Assets/Fonts/Novecento Bold.otf');
  novecentoNormal = loadFont('Assets/Fonts/Novecento Normal.otf');
  novecentoLight = loadFont('Assets/Fonts/Novecento Light.otf');
  ceciliaStory = loadGif('Assets/Characters/ceciliaIdle_1.gif');
  // ceciliaStandby = loadGif('Assets/Characters/ceciliaStandBy_1.gif');
  ceciliaStandby = loadImage('Assets/Characters/Cecilia-Stance1.png');
  ceciliaAttack = loadImage('Assets/Characters/ceciliaAtk_1.png');
  ceciliaAssault = loadImage('Assets/Characters/Cecilia-Assault.png');
  ceciliaOverDrive = loadImage('Assets/Characters/Cecilia-OverDrive.png');
  // ceciliaSkill = loadGif('Assets/Characters/ceciliaSkillTest.gif')
  ceciliaSkill = loadImage('Assets/Characters/Cecilia-Stance2.png');
  mainmenuBg = loadImage('Assets/Background/mainmenu.png')
  stageBg = loadImage('Assets/Background/Stage-Bg.png');
  uE = loadImage('Assets/Enemy/Unknown_Entity_NO8.png');
  ceciliaProtrait = loadImage('Assets/Image/Cecilia.png');
  ceciliaProtraitOverDrive = loadImage('Assets/Image/Cecilia-Portrait-OverDrive.png');

}

function setup() {
  
  createCanvas(1280, 720);
  cecilia = new Cecilia();
  ue = new UE();
  isPlayerTurn = true;
  
}

function draw() {
  
  clear();

  if (currentScreen === "menu") {
    drawMenuScreen();
    if (!buttonCreated){
  playButton();
  buttonCreated = true;
    }
  }
  
  if (currentScreen === "intro") {
    drawIntroScreen();
    if (buttonCreated){
      buttonCreated = false;
        }
  }
  
  if (currentScreen === "gameplay") {
    drawGamePlayScreen();
    
  }
  
  if (currentScreen === "ending_1") {
    drawEnding1();
    if (buttonCreated){
      buttonCreated = false;
        }

  }

  if (currentScreen === "ending_2") {
    drawEnding2();
    if (buttonCreated){
      buttonCreated = false;
        }
    
  }

  if (currentScreen === "ending_3") {
    drawEnding3();
    if (buttonCreated){
      buttonCreated = false;
        }
    
  }
  
  if (currentScreen === "game_over") {
    gameOver();
    if (buttonCreated){
      buttonCreated = false;
        }
  }
  


  
}

function drawMenuScreen() {
  background(30);
  title();
  // if (!buttonCreated)
  // playButton();
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

  var elements = document.getElementsByClassName("hiddenI");

  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }
  
  stageBg.resize(1403,992)
  image(stageBg,-123,-450)
  cecilia.show();
  ue.show();
  
  noStroke();
  rectMode(CENTER);
  fill(0);
  rect(width/2,650,windowWidth,230)
 
  if (!cecilia.isOverDrive){
  ceciliaDefaultPortrait();
  }

  if (cecilia.isOverDrive){
    ceciliaOverDrivePortrait();
    }
  
  //Call Status
  statusSpAttackGauge()
  statusHp();
  statusMp();
  statusSp();
  ceciliaName();

  if(!buttonCreated) {
    skillButton();
    spButton();
    attackButton();
    spAttackButton();
    buttonCreated = true;
  }

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
      cecilia.startOver();
      ue.hp = ue.maxhp;

  }
  
    if (isPlayerTurn) {

    actionDelay = 0;

    textAlign(CENTER);
    text("Your Turn", width/2, 100)
    
    
    // Attack Command
    
    AtkButton.removeAttribute('disabled');
    AtkButton.mousePressed(() => { ue = cecilia.attack1(ue); isPlayerTurn = false; cecilia.overDriveCheckReset();});
    cecilia.update();

    // Switch Command
    
    
    SkillButton.mousePressed(() => {cecilia.isAssaultMode = !cecilia.isAssaultMode; cecilia.assaultMode();});
    cecilia.update();
    
    if (cecilia.isAssaultMode && cecilia.mp < cecilia.assaultModeAttackMpCost) {
      cecilia.isAssaultMode = false;
    }

    if (cecilia.isAssaultMode && cecilia.mp < cecilia.assaultModeAttackMpCost || cecilia.assaultActiveTurn > cecilia.assaultModeMaximumTurn) {
      cecilia.isAssaultMode = false;
    }

    if (cecilia.isAssaultMode || cecilia.isOverDrive || cecilia.mp < cecilia.assaultModeActivateMpCost || cecilia.assaultActiveTurn > cecilia.assaultModeMaximumTurn) {
      SkillButton.attribute('disabled', 'true');
      SkillButton.style('color', 'grey');
    } else {
      SkillButton.removeAttribute('disabled');
      SkillButton.style('color', 'white');
  }

    //Overdrive Command
    

    // SpButton.mousePressed(() => {cecilia.isOverDrive = !cecilia.isOverDrive; cecilia.overDrive();});
    if (!cecilia.isOverDrive) {
      SpButton.mousePressed(() => {cecilia.isOverDrive = true; cecilia.overDrive(); cecilia.overDriveCheckActivate(); cecilia.isAssaultMode = false;});
      cecilia.update();
    }
    
    if (cecilia.isOverDrive) {
      SpButton.mousePressed(() => {cecilia.isOverDrive = false; cecilia.overDriveCheckActivate();});
      cecilia.update();
    }

    if (cecilia.isOverDrive && cecilia.sp < cecilia.overDriveActivateCost) {
      cecilia.isOverDrive = false;
      cecilia.overLoaded();
    }

    if (cecilia.isAssaultMode || cecilia.sp < cecilia.overDriveActivateCost || cecilia.isChangedToOverDrive === true || cecilia.isOverLoaded) {
      SpButton.attribute('disabled', 'true');
      SpButton.style('color', 'grey');
    } else {
      SpButton.removeAttribute('disabled');
      SpButton.style('color', 'white');
    }

    SpAttackButton.mousePressed(() => { ue = cecilia.attack2(ue); isPlayerTurn = false; if(cecilia.isOverDrive) {cecilia.overDriveCheckReset();};});
    cecilia.update();

    
    if(cecilia.isOverLoaded || cecilia.gauge !== cecilia.maxgauge){
      SpAttackButton.attribute('disabled', 'true');
      SpAttackButton.style('color', 'grey');
    }else{
      SpAttackButton.removeAttribute('disabled');
      SpAttackButton.style('color', 'white');
    }
    // if (cecilia.isChangedToOverDrive === false) {
    //   SpButton.removeAttribute('disabled');
    // }
    
    console.log(cecilia.isOverLoaded);
    console.log(cecilia.overLoadedStartTurn);
    console.log(SpButton);

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
    fadeOut();
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