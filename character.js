// among us character properties and positions
//https://editor.p5js.org/pajay.l/sketches/QNkv9FjXp following code adapted from this website
var backPackX;
var goggleX;
var shineX;
var goggleY = 25;
var Rightleg = 45;
var Leftleg = 45;
var Rinvy = 41;
var Linvy = 41;
var bodyY = 65;

// walking animation in right direction
function RstartWalking() {
  // interval exectutes the walk right function every second
  setInterval(function () {
    walk("right");
  }, 1000);
}

function LstartWalking() {
  setInterval(function () {
    walk("left");
  }, 1000);
}

// leg animation, right or left as argument
function walk(direction) {
  if (direction === "right") {
    Rightleg = Rightleg - 5;
    Rinvy = Rinvy - 5;
    // delay 500ms to create natural leg movement as it's reversed
    setTimeout(function () {
      // limit extent of leg movement and reverse
      if (Rightleg > Rightleg - 4) {
        Rightleg = Rightleg + 5;
        Rinvy = Rinvy + 5;
      }
    }, 500);
  } else if (direction === "left") {
    Leftleg = Leftleg - 5;
    Linvy = Linvy - 5;
    setTimeout(function () {
      if (Leftleg > Leftleg - 4) {
        Leftleg = Leftleg + 5;
        Linvy = Linvy + 5;
      }
    }, 500);
  }
}

/*setTimeout(() => LstartWalking(), 530);
setTimeout(() => RstartWalking(), 100);*/

LstartWalking();
// delay right leg to imitate walking
setTimeout(() => RstartWalking(), 100);

// mover class to create instances of character
class Mover {
  // create and initialize object instance
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = 2;
    this.acc = 1;
  }

  Show() {
    if (keyIsPressed && key === "ArrowRight") {
      this.pos.x -= -5;
      backPackX = this.pos.x - 26;
      goggleX = this.pos.x + 7;
    } else if (keyIsPressed && key === "ArrowLeft") {
      this.pos.x -= 5;
      backPackX = this.pos.x + 26;
      goggleX = this.pos.x - 7;
    }

    // Uses spacebar to jump
    if (keyIsDown(32)) {
      this.vel = -10;
      this.pos.y = this.pos.y + this.vel;
      // this.pos.y = this.pos.y + this.vel;
    }

    // makes the character stop at the floor
    if (this.pos.y > 550) {
      this.pos.y = 550;
      this.vel = 0;
    } else {
      this.pos.y = this.pos.y + this.vel;
      this.vel = this.vel + this.acc;
    }

    /*    // Makes it stop at the bottom line
    if (this.pos.y + 300 < innerHeight) {
      this.pos.y = this.pos.y + this.vel;
      this.vel = this.vel + this.acc;
    }*/

    fill(0);
    strokeWeight(3);
    fill(137, 207, 200);
    ellipse(goggleX, this.pos.y - 5, 40, goggleY);
    fill(255, 255, 20);
    stroke(0);
    ellipse(backPackX, this.pos.y + 10, 10, 35);
    strokeWeight(3);
    stroke(0);
    rect(this.pos.x + 2, this.pos.y, 22, Rightleg);
    rect(this.pos.x - 26, this.pos.y, 22, Leftleg);
    strokeWeight(3);
    ellipse(this.pos.x, this.pos.y, 50, bodyY);
    strokeWeight(0);
    rect(this.pos.x + 6, this.pos.y, 17, Rinvy);
    rect(this.pos.x - 24, this.pos.y, 18, Linvy);
    stroke(0);

    fill(137, 207, 200);
    strokeWeight(3);
    ellipse(goggleX, this.pos.y - 5, 40, goggleY);
  }
}
// end of among us character
