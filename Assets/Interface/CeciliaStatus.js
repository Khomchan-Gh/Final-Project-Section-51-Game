function ceciliaName(){
  
  textAlign(LEFT)
  textSize(32);
  fill(255);
  text('Cecilia',330,580);
  
}

function statusHp(){
  
  let ceciliaHp = new Cecilia();
  textAlign(LEFT)
  textSize(24);
  fill(255);
  text('HP: '+ceciliaHp.hp,330,620);
    
}

function statusMp(){
  
  let ceciliaMp = new Cecilia();
  textAlign(LEFT)
  textSize(24);
  fill(255);
  text('MP: '+ceciliaMp.mp, 330, 660);
    
}

function statusSp(){
  
  let ceciliaSp = new Cecilia();
  textAlign(LEFT)
  textSize(24);
  fill(255);
  text('SP: '+ceciliaSp.sp, 330, 700);
    
}