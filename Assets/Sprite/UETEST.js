class UE {
  
    constructor(){
      
      this.x = width-550
      this.y = -100
      this.maxhp = 500
      this.hp = 500
      this.UE = uE
      
    }
    
      show(){
      
      image(this.UE,this.x,this.y)
      uE.resize(708, 1002);
      textAlign(CENTER);
      text(this.hp,width/2,40);
    
    }

    attack1(cecilia){
      
      //แก้เลขทีหลัง
      cecilia.hp = cecilia.hp - 400;
    
      return cecilia;
      
    }
    
  }