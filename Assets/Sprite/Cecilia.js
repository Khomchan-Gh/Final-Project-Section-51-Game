class Cecilia {
  
  constructor(){
    
    this.x = this.x
    this.y = this.y
    this.maxhp = 500
    this.hp = 500
    this.minhp = 0
    this.maxmp = 300
    this.mp = 300
    this.minmp = 0
    this.maxsp = 100
    this.sp = 100
    this.minsp = 0
    this.maxgauge = 100
    this.gauge = 0
    this.mingauge =0
    
    this.CeciliaStandBy = ceciliaStandby
    this.CeciliaAtk = ceciliaAttack
    this.CeciliaSkill = ceciliaSkill
    this.CeciliaAssault = ceciliaAssault
    this.CeciliaOverDrive = ceciliaOverDrive
    
    //Assault mode cost

    this.assaultModeActivateMpCost = 30;
    this.assaultModeAttackMpCost = 15;

    //Assault state check

    this.assaultStartTurn = 1;
    this.assaultActiveTurn = 1;
    this.assaultModeMaximumTurn = 5;

    //Overdrive cost
    this.overDriveActivateCost = 10;
    this.overDriveAttackCost = 1;

    //Overdrive state check
    this.isChangedToOverDrive = false;

    //Overload state
    this.overLoadedStartTurn = 5;
    this.overLoadedActiveTurn = 1;
    this.overLoadedEnd = 0;

    this.isAttacking = false;
    this.isSwitching = false;
    this.isAssaultMode = false;
    this.isOverDrive = false;
    this.isOverLoaded = false;

    // this.attackStartTime = 0;
    // this.attackDuration = 750;
    // this.castStartTime = 0;
    // this.castDuration = 750;
    
  }
  
    show(){
    
    if (this.isAttacking === false && this.isSwitching === false && this.isAssaultMode === false && this.isOverDrive === false){
    image(this.CeciliaStandBy,150,75, width*0.25, height*0.6)
    };
  
  }

  attack1(ue){
    
    let attackPower = Math.floor(Math.random() * (62 - 47 + 1)) + 47;
    let critChance = Math.random(); // generate a random number between 0 and 1
    let critMultiplier = 1; // default multiplier is 1
        
    // Check if the attack is a critical hit
    if (critChance <= 0.2 && attackPower >= 70 && attackPower <= 93) {
      critMultiplier = 1.5;
    }

    if (!this.isAssaultMode) {
      if (this.assaultActiveTurn >= 6) {
          this.assaultActiveTurn ++;
      }
      if (this.assaultActiveTurn >= 10) {
        this.assaultActiveTurn = this.assaultStartTurn;
      }
      
      this.mp += 10
      if (this.mp > this.maxmp) {
        this.mp = this.maxmp;
      }
      this.sp += 5
      if (this.sp > this.maxsp) {
        this.sp = this.maxsp;
      }
     
    }
    
    if (this.isAssaultMode) {
      attackPower = Math.floor(Math.random() * (93 - 70 + 1)) + 70;
      this.mp -= this.assaultModeAttackMpCost;
      cecilia.assaultModeTurnCount();

      // Set the crit chance and multiplier for assault mode
      critChance = Math.random(); // generate a random number between 0 and 1
      if (critChance <= 0.5 && attackPower >= 70 && attackPower <= 93) {
        critMultiplier = 2.5;
      }

      this.hp += 25
      if (this.hp > this.maxhp) {
        this.hp = this.maxhp;
      }
      this.sp += 10
      if (this.sp > this.maxsp) {
        this.sp = this.maxsp;
      }
      this.gauge += 10
      if (this.gauge > this.maxgauge) {
        this.gauge = this.maxgauge;
      }
    }
    
    if (this.isOverDrive) {
      attackPower = Math.floor(Math.random() * (186 - 140 + 1)) + 140;
      this.sp -= this.overDriveAttackCost;
      this.overDriveAttackCost += 5;
      if (this.sp < this.minsp){
        this.sp < this.minsp;
      }
      
      // Set the crit chance and multiplier for overdrive mode
      critChance = 1; // guaranteed critical hit
      critMultiplier = 5;

      this.mp += 25
      if (this.mp > this.maxmp) {
        this.mp = this.maxmp;
      }

      this.gauge += 20
      if (this.gauge > this.maxgauge) {
        this.gauge = this.maxgauge;
      }

      this.isChangedToOverDrive = false;
      console.log("Overdrive damage dealt: " + attackPower * critMultiplier);
    }

    if (this.isOverLoaded) {
      attackPower = Math.floor(Math.random() * (31 - 24 + 1)) + 24;
      this.overLoadedStartTurn --;
    
      if (this.overLoadedStartTurn <= this.overLoadedEnd) {
        this.isOverLoaded = false;
      }
    }

    let damage = Math.floor(attackPower * critMultiplier); // calculate the damage
    ue.hp -= damage; // subtract damage from enemy's HP
    return ue; // return the updated enemy object
    
}

attack2(ue){
  
  //default charge attack
  let attackPower = Math.floor(Math.random() * (310 - 235 + 1)) + 235;
  let critChance = Math.random(); // generate a random number between 0 and 1
  let critMultiplier = 1; // default multiplier is 1
    
  if (critChance <= 0.2 && attackPower >= 235 && attackPower <= 310) {
      critMultiplier = 1.5;
    }

    if (!this.isAssaultMode) {
      if (this.assaultActiveTurn >= 6) {
          this.assaultActiveTurn ++;
      }
      if (this.assaultActiveTurn >= 10) {
        this.assaultActiveTurn = this.assaultStartTurn;
      }
      
      this.mp += 60
      if (this.mp > this.maxmp) {
        this.mp = this.maxmp;
      }
      // this.sp += 5
      // if (this.sp > this.maxsp) {
      //   this.sp = this.maxsp;
      // }
      this.hp += 150
      if (this.hp > this.maxhp) {
        this.hp = this.maxhp;
      }

      this.sp += 30
      if (this.sp > this.maxsp) {
        this.sp = this.maxsp;
      }

      this.gauge = this.mingauge;
    }
    
    //assault charge attack
    if (this.isAssaultMode) {
      attackPower = Math.floor(Math.random() * (651 - 490 + 1)) + 490;
      this.mp -= this.assaultModeAttackMpCost;
      cecilia.assaultModeTurnCount();

      // Set the crit chance and multiplier for assault mode
      critChance = Math.random(); // generate a random number between 0 and 1
      if (critChance <= 0.5 && attackPower >= 490 && attackPower <= 651) {
        critMultiplier = 2.5;
      }

      this.hp += 50
      if (this.hp > this.maxhp) {
        this.hp = this.maxhp;
      }
      this.sp += 100
      if (this.sp > this.maxsp) {
        this.sp = this.maxsp;
      }

      this.gauge = this.mingauge;

    }

    //overdrive charge attack
    if (this.isOverDrive) {
      attackPower = Math.floor(Math.random() * (1860 - 1400 + 1)) + 1400;
      this.sp -= this.overDriveAttackCost;
      this.overDriveAttackCost += 5;
      
      // Set the crit chance and multiplier for overdrive mode
      critChance = 1; // guaranteed critical hit
      critMultiplier = 5;

      this.mp += 200
      if (this.mp > this.maxmp) {
        this.mp = this.maxmp;
      }
      this.hp += 100
      if (this.hp > this.maxhp) {
        this.hp = this.maxhp;
      }
      this.gauge += 30
      if (this.gauge > this.maxgaugep) {
        this.gauge = this.maxgauge;
      }

      this.isChangedToOverDrive = false;
      // console.log("Overdrive damage dealt: " + attackPower * critMultiplier);
    }

  
    let damage = Math.floor(attackPower * critMultiplier);
  ue.hp -= damage;
  return ue;
}
  // attackAnimation(){
  //   this.isAttacking = true;
  //   this.attackStartTime = millis();

  // }

  assaultMode(){
      this.isAssaultMode = true;
      this.mp -= this.assaultModeActivateMpCost;
  }

  assaultModeTurnCount(){
    this.assaultActiveTurn ++;
  }
  
  overDrive(){
    this.isOverDrive = true;
    this.sp -= this.overDriveActivateCost;
}

  overDriveCheckReset(){
    this.isChangedToOverDrive = false;
  }

  overDriveCheckActivate(){
    this.isChangedToOverDrive = true;
  }

  update() {
    if (this.isAssaultMode) {
      image(this.CeciliaAssault, 150, 75, width*0.25, height*0.6);
    } 
    
    if (this.isOverDrive) {
      image(this.CeciliaOverDrive, 150, 75, width*0.25, height*0.6);
    }

  }

  startOver(){
    this.hp = this.maxhp
    this.mp = this.maxmp
    this.sp = this.maxsp
    this.isAttacking = false;
    this.isSwitching = false;
    this.isAssaultMode = false;
    this.isOverDrive = false;
  }

  overLoaded(){
    this.isOverLoaded = true;
    this.hp -= 100;
  }

}
