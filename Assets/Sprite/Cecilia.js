class Cecilia {
  
    constructor(){
      
      this.x = 50
      this.y = 0
      this.maxhp = 500
      this.hp = 500
      this.maxmp = 250
      this.mp = 250
      this.maxsp = 10
      this.sp = 10
      this.CeciliaStandBy = ceciliaStandby
      this.CeciliaAtk = ceciliaAttack
      this.CeciliaSkill = ceciliaSkill
      this.isAttacking = false;
      this.attackStartTime = 0;
      this.attackDuration = 750;
      this.castingSkill = false;
      this.castStartTime = 0;
      this.castDuration = 750;
      
    }
    
      show(){
      
      if (this.isAttacking === false && this.castingSkill === false){
      image(this.CeciliaStandBy,50,0, width*0.35, height*0.8)
      };
    
    }
    
    attack1(ue){
      
      ue.hp = ue.hp - 50;
    
      return ue;
      
    }

    attackAnimation(){
      this.isAttacking = true;
      this.attackStartTime = millis();

    }

    skill1(ue){
      ue.hp = ue.hp - 50;
      //แก้เลขทีหลัง 
      ue.hp = ue.hp - 200;
      this.skillCasted();
      return ue;
    }

    skillCasted(){
      this.mp = this.mp -50;
    }

    skillAnimation(){
      this.castingSkill = true;
      this.castStartTime = millis();

    }
    
    update() {
      if (this.isAttacking) {
        if (timeSinceAttackStarted < this.attackDuration) {
          this.CeciliaAtk.resize(546, 584);
          image(this.CeciliaAtk, 400, 0, width*0.35,height*0.8);
        } else {
          this.isAttacking = false;
        }
      }

      if (this.castingSkill) {
 
        let timeSinceSkillCasted = millis() - this.castStartTime;
        if (timeSinceSkillCasted < this.castDuration) {
          image(this.CeciliaAtk, 400, 0, width*0.35,height*0.8);
        } else {
          this.castingSkill = false;
        }
      }

    }

  }
  