// Health Bar

let maxBarWidth = 200;
let barHeight = 20;
let currentBarWidth = map(ue.hp, 0, ue.maxhp, 0, maxBarWidth);

noStroke();
fill(255, 0, 0);
rect(this.x - maxBarWidth/2, this.y + 60, currentBarWidth, barHeight);
stroke(0);