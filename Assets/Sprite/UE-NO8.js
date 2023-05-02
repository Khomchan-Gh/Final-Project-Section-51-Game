class UE {
  
    constructor(){
    
      this.x = this.x
      this.y = this.y
      this.maxhp = 15000
      this.hp = 15000
      this.UE = uE

      //Hp bar value
      this.maxHpBarWidth = 400;
      this.maxHpBarHeight = 14;
      this.hpBarWidth = 390;
      this.hpBarHeight = 10;
      
    }
    
      show(){
      
      image(this.UE,width-525,-25, width*0.32, height*0.82)
      let currentHpBarWidth = map(this.hp, 0, this.maxhp, 0, this.hpBarWidth);
      let startColor = color(0, 0, 0); 
      let endColor = color(225, 0, 70);
      
      
      
      //max hp bar
      
      fill(60)
      rectMode(CENTER);
      rect(width / 2, 20, this.maxHpBarWidth, this.maxHpBarHeight);

      //current hp bar
      noStroke();
      rectMode(CORNER);
      let x = (width / 2) - (this.hpBarWidth / 2);
      let y = 20 - (this.hpBarHeight / 2);
      for (let n = 0; n < currentHpBarWidth; n++){
        let ratio = n / currentHpBarWidth;
        let barColor = lerpColor(endColor, startColor,ratio);
        fill(barColor);
        rect(x + n, y, 1, this.hpBarHeight);
      }
        
      
      // uE.resize(1116, 1578);
      // textAlign(CENTER);
      // text(this.hp,width/2,40);
    
    }

    attack1(cecilia){
      
      //แก้เลขทีหลัง
      cecilia.hp = cecilia.hp - 20;
    
      return cecilia;
      
    }
    
  }