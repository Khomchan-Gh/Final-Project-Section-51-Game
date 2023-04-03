let currentScreen = "menu";
let cecilia;
let ue;
let ueHp;

function preload() {
  
  menuTitle = loadFont('Assets/Fonts/Novecento Bold.otf');
  ceciliaStory = loadGif('Assets/Characters/ceciliaIdle_1.gif');
  ceciliaStandby = loadGif('Assets/Characters/ceciliaStandBy_1.gif');
  ceciliaAttack = loadImage('Assets/Characters/ceciliaAtk_1.png');
  ceciliaSkill = loadGif('Assets/Characters/ceciliaSkillTest.gif')
  stageBg = loadImage('Assets/Background/testbg.jpg');
  uE = loadImage('Assets/Enemy/UE_test.png');
  ceciliaProtrait = loadImage('Assets/Image/Cecilia_2.png');
  
}

function setup() {
  
  createCanvas(1280, 720);
  playButton();
  cecilia = new Cecilia();
  ue = new UE();
  
}

function draw() {
  
  if (currentScreen === "menu") {
    drawMenuScreen();
  
  }
  
  if (currentScreen === "intro") {
    drawIntroScreen();
    
  }
  
  if (currentScreen === "gameplay") {
    drawGamePlayScreen();
    
  }
  
}

function drawMenuScreen() {
  background(30);
  title();
  
}

function drawIntroScreen() {
  
  background(10);
  intro();
  
}

function drawGamePlayScreen() {
  
  background(0);
  
  stageBg.resize(1280,550)
  image(stageBg,0,0)
  cecilia.show();
  ue.show();
  attackButton();
  skillButton();
  spButton();
  chrProtrait();
  statusHp();
  statusMp();
  statusSp();
  ceciliaName();
  
  AtkButton.mousePressed(() => { ue = cecilia.attack1(ue); cecilia.attackAnimation();});
  cecilia.update();
 
  SkillButton.mousePressed(() => {ue = cecilia.skill1(ue); cecilia.skillAnimation();});
  cecilia.update();
  
  // stage1();
  
}
