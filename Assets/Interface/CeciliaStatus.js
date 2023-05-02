function ceciliaName(){
  
  textAlign(LEFT)
  textSize(32);
  fill(255);
  text('Cecilia',150,700);
  
}

function statusHp(){
  
  textAlign(LEFT)
  textSize(24);
  fill(255);
  text('HP: '+cecilia.hp,330,620);
    
}

function statusMp(){
  
  textAlign(LEFT)
  textSize(24);
  fill(255);
  text('Energy: '+cecilia.mp, 330, 660);
    
}

function statusSp(){
  
  textAlign(LEFT)
  textSize(24);
  fill(255);
  text('Overdrive Gauge: '+cecilia.sp, 330, 700);
    
}

function statusSpAttackGauge(){
  textAlign(LEFT)
  textSize(24);
  fill(255);
  text('C.A. : '+cecilia.gauge, 150, 400);
}