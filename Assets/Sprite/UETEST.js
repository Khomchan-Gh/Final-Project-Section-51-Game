class UE {
  
    constructor(){
      
      this.x = width-600
      this.y = 0
      this.hp = 1500
      this.mp = 250
      this.UE = uE
      
    }
    
      show(){
      
      image(this.UE,this.x,this.y)
      uE.resize(546, 584);
      textAlign(CENTER);
      text(this.hp,width-240,40);
    
    }
    
  }