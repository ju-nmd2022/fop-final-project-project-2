//https://editor.p5js.org/pajay.l/sketches/QNkv9FjXp following code adapted from this website
var backPackX;
var goggleX;
var shineX;
var shadowX;
var goggleY = 25;
var Rlegy = 45;
var Llegy = 45;
var Rinvy = 41;
var Linvy = 41;
var bodyY = 65;

function startBlinking() {
  setInterval(function () {
    blink();
  }, 7000);
}
function blink() {
  goggleY = goggleY - 25;
  setTimeout(function () {
    if (goggleY > goggleY - 24) {
      goggleY = goggleY + 25;
    }
  }, 100);
}
startBlinking();
function RstartWalking() {
  setInterval(function () {
    walk();
  }, 1000);
}
function walk() {
  Rlegy = Rlegy - 5;
  Rinvy = Rinvy - 5;
  setTimeout(function () {
    if (Rlegy > Rlegy - 4) {
      Rlegy = Rlegy + 5;
      Rinvy = Rinvy + 5;
    }
  }, 500);
}
RstartWalking();
function LstartWalking() {
  setInterval(function () {
    Lwalk();
  }, 1000);
}
function Lwalk() {
  Llegy = Llegy - 5;
  Linvy = Linvy - 5;
  setTimeout(function () {
    if (Llegy > Llegy - 4) {
      Llegy = Llegy + 5;
      Linvy = Linvy + 5;
    }
  }, 500);
}
setTimeout(() => LstartWalking(), 500);
class Mover {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(3));
  }
  update() {
    let mouse = createVector(mouseX, mouseY);
    this.acc = p5.Vector.sub(mouse, this.pos);
    this.acc.setMag(9.1);
    this.vel.add(this.acc);
    this.vel.limit(2);
    this.pos.add(this.vel);
  }
  show() {
    if (dist(mouseX, mouseY, this.pos.x, this.pos.y) > 1) {
      if (mouseX > this.pos.x) {
        backPackX = this.pos.x - 26;
        goggleX = this.pos.x + 7;
      } else {
        backPackX = this.pos.x + 26;
        goggleX = this.pos.x - 7;
      }
    }
    if (dist(mouseX, mouseY, this.pos.x, this.pos.y) < 1) {
      if (mouseX > this.pos.x) {
        backPackX = this.pos.x - 26;
        goggleX = this.pos.x + 7;
      } else {
        backPackX = this.pos.x + 26;
        goggleX = this.pos.x - 7;
      }
    }
    fill(0);
    ellipse(this.pos.x, this.pos.y + 46, 60, 10);
    strokeWeight(3);
    fill(c1, c2, c3);
    ellipse(backPackX, this.pos.y + 10, 10, 35);
    stroke(0);
    rect(this.pos.x + 2, this.pos.y, 22, Rlegy);
    rect(this.pos.x - 26, this.pos.y, 22, Llegy);
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
var mover;
var ob1, ob2, ob3, ob4, ob5;

function setup() {
  createCanvas(440, 440);
  mover = new Mover(200, 200);
  var mouse = createVector(mouseX, mouseY);
  c1 = color((0, 255), (0, 255), random(0, 255));
  c2 = color((0, 255), random(0, 255), random(0, 255));
  c3 = color(random(0, 255), random(0, 255), (0, 255));
}

function draw() {
  background(125);
  mover.update();
  mover.update();
  mover.show();

  // drawSprites();
}
