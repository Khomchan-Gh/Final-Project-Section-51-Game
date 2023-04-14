

function attackButton(){
  
    let ueHp = new UE();
    ueHp.hp = 1500;
    
    AtkButton = createButton('Attack');
    AtkButton.addClass('hidden2');
    AtkButton.position(0, 0);
    AtkButton.size(200,50);
    AtkButton.style('background-color', 'transparent');
    AtkButton.style('border', 'none');
    AtkButton.style('font-size', '24px');
    AtkButton.style('color', 'white');
    AtkButton.style('font-family', 'Novecento light');
    AtkButton.style('position', 'absolute');
    AtkButton.style('left', '45%');
    AtkButton.style('top', '87%');
    AtkButton.style('transform', 'translate(-50%, -50%)');
    // AtkButton.addClass('Test-Class')

  }
  
  
  function skillButton(){
    
    SkillButton = createButton('Skill');
    SkillButton.addClass('hidden2');
    SkillButton.position(0, 0);
    SkillButton.size(200,50);
    SkillButton.style('background-color', 'transparent');
    SkillButton.style('border', 'none');
    SkillButton.style('font-size', '24px');
    SkillButton.style('color', 'white');
    SkillButton.style('font-family', 'Novecento light');
    SkillButton.style('position', 'absolute');
    SkillButton.style('left', '65%');
    SkillButton.style('top', '87%');
    SkillButton.style('transform', 'translate(-50%, -50%)');

  }
  
  function spButton(){
    
    SpButton = createButton('Special');
    SpButton.addClass('hidden2');
    SpButton.position(0, 0);
    SpButton.size(200,50);
    SpButton.style('background-color', 'transparent');
    SpButton.style('border', 'none');
    SpButton.style('font-size', '24px');
    SpButton.style('color', 'white');
    SpButton.style('font-family', 'Novecento light');
    SpButton.style('position', 'absolute');
    SpButton.style('left', '85%');
    SpButton.style('top', '87%');
    SpButton.style('transform', 'translate(-50%, -50%)');
    
  }