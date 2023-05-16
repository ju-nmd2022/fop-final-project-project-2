function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  mover = new Mover(200, 200);
}

let windowX = 100;
let windowY = 100;
let windowW = 100;
let windowH = 100;
let moveToLeft = 5;
let moveToLeft2 = 10;
let gap = 30;

let boxX = 100;
let boxY = 200;
let boxW = 100;
let boxH = 100;

let fuelX = 321;
let fuelY = 312;

// function for windows
function windows(windowX, windowY, windowW, windowH) {
  fill(0, 0, 0);
  rect(windowX + 30, windowY + 40, windowW + 15, windowH - 25, 20);

  if (windowX < 122 && windowX > 10) {
    //pluto
    fill(200, 200, 200);
    ellipse(157, 169, 25, 25);
    fill(150, 150, 150);
    ellipse(157, 163, 7, 7);
    ellipse(152, 172, 6, 6);
    ellipse(161, 176, 6, 6);
    ellipse(160, 170, 4, 4);
  }
}

// function for background
function scenery() {
  background(110, 127, 128);
  fill(192, 192, 192);
  // floor
  noStroke();
  rect(0, 530, width, 400);
}

// function for blue box
function blueBox(boxX, boxY, boxW, boxH) {
  //blue box
  fill(84, 196, 198);
  strokeWeight(4);
  stroke(99, 148, 147);
  rect(boxX + 76, boxY + 276, boxW + 15, boxH - 10, 5);
  stroke(150, 150, 150);
  strokeWeight(2.5);
  line(boxX + 80, boxY + 308, boxX + 99, boxY + 308);
  line(boxX + 99, boxY + 308, boxX + 116, boxY + 322);
  line(boxX + 116, boxY + 322, boxX + 150, boxY + 322);
  line(boxX + 150, boxY + 322, boxX + 166, boxY + 308);
  line(boxX + 166, boxY + 308, boxX + 187, boxY + 308);
}

// function for wooden box
function woodenBox(boxX, boxY, boxW, boxH) {
  //wooden box
  fill(202, 164, 114);
  strokeWeight(4);
  stroke(141, 114, 79);
  rect(boxX + 300, boxY + 276, boxW + 15, boxH - 10, 5);
  fill(110, 110, 110);
  // nails
  noStroke();
  ellipse(boxX + 307, boxY + 295, boxW - 92, boxH - 92);
  ellipse(boxX + 407, boxY + 295, boxW - 92, boxH - 92);
  ellipse(boxX + 307, boxY + 315, boxW - 92, boxH - 92);
  ellipse(boxX + 407, boxY + 315, boxW - 92, boxH - 92);
  ellipse(boxX + 307, boxY + 335, boxW - 92, boxH - 92);
  ellipse(boxX + 407, boxY + 335, boxW - 92, boxH - 92);
  ellipse(boxX + 307, boxY + 355, boxW - 92, boxH - 92);
  ellipse(boxX + 407, boxY + 355, boxW - 92, boxH - 92);
  // wood lines
  stroke(106, 81, 50);
  strokeWeight(2.5);
  line(boxX + 301, boxY + 346, boxX + 414, boxY + 346);
  line(boxX + 301, boxY + 326, boxX + 414, boxY + 326);
  line(boxX + 301, boxY + 306, boxX + 414, boxY + 306);
  line(boxX + 301, boxY + 286, boxX + 414, boxY + 286);
}

// function to generate a random box type (either blue or wood)
function generateRandomBoxType() {
  // Generate a random number (0 or 1) to determine the box type
  return floor(random(2));
}

// function to generate new boxes in random orders
let boxes = [];
function generateNewBox() {
  let newBoxType = generateRandomBoxType();
  let newBoxX = width + gap; // Initial X position of the new box
  let newBoxY = boxY; // Same Y position as the existing boxes

  boxes.push({
    type: newBoxType,
    x: newBoxX,
    y: newBoxY,
  });
}

// function to display new boxes on the canvas
function drawBoxes() {
  for (let i = boxes.length - 1; i >= 0; i--) {
    let currentBox = boxes[i];

    if (currentBox.type === 0) {
      blueBox(currentBox.x, currentBox.y, boxW, boxH);
    } else {
      woodenBox(currentBox.x, currentBox.y, boxW, boxH);
    }

    currentBox.x -= moveToLeft2;

    if (currentBox.x + boxW + gap < -320) {
      boxes.splice(i, 1); // Remove the box from the array if it's out of the screen
    }
  }
}

// function for fuel
function fuel(fuelX, fuelY) {
  fill(255, 0, 0);
  noStroke();
  rect(fuelX, fuelY, 40, 40);
  fill(110, 127, 128);
  triangle(
    fuelX + 20,
    fuelY + 9,
    fuelX + 34,
    fuelY + 9,
    fuelX + 34,
    fuelY + 20
  );
  stroke(255, 255, 0);
  strokeWeight(6);
  line(fuelX - 11, fuelY - 12, fuelX, fuelY);
  fill(0, 0, 0);
  noStroke();
  ellipse(fuelX + 2, fuelY + 2, 7, 5);
}

// function to generate new fuels at random y positions
let fuels = [];
function generateNewFuel() {
  let newFuelX = width + gap; // Initial X position of the new fuel
  let newFuelY = random(200, height - 200); // Random Y position within a desired range

  fuels.push({
    x: newFuelX,
    y: newFuelY,
  });
}

// function to display new fuels on the canvas
function drawFuels() {
  for (let i = fuels.length - 1; i >= 0; i--) {
    let currentFuel = fuels[i];

    fuel(currentFuel.x, currentFuel.y);

    currentFuel.x -= moveToLeft2;

    if (currentFuel.x + 40 + gap < -320) {
      fuels.splice(i, 1); // Remove the fuel from the array if it's out of the screen
    }
  }
}

// among us character
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

function RstartWalking() {
  setInterval(function () {
    walk("right");
  }, 1000);
}

function LstartWalking() {
  setInterval(function () {
    walk("left");
  }, 1000);
}

function walk(direction) {
  if (direction === "right") {
    Rightleg = Rightleg - 5;
    Rinvy = Rinvy - 5;
    setTimeout(function () {
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

setTimeout(() => LstartWalking(), 530);
setTimeout(() => RstartWalking(), 100);

class Mover {
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
    // Makes it stop at the bottom line
    if (this.pos.y + 300 < innerHeight) {
      this.pos.y = this.pos.y + this.vel;
      this.vel = this.vel + this.acc;
    }

    fill(0);
    strokeWeight(3);
    fill(137, 207, 200);
    ellipse(goggleX, this.pos.y - 5, 40, goggleY);
    strokeWeight(3);
    fill(2555, 255, 20);
    ellipse(backPackX, this.pos.y + 10, 10, 35);
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

function draw() {
  scenery();
  windows(windowX, windowY, windowW, windowH);
  windows(windowX + 300, windowY, windowW, windowH);

  // Move windows to the left
  windowX -= moveToLeft;
  if (windowX + windowW + gap < -320) {
    windowX = width + gap;
  }

  blueBox(boxX, boxY, boxW, boxH);
  woodenBox(boxX, boxY, boxW, boxH);

  // Move boxes to the left
  boxX -= moveToLeft2;
  if (boxX + boxW + gap < -320) {
    boxX = width + gap;
  }

  // frequency of new boxes
  if (frameCount % 100 === 0) {
    generateNewBox();
  }

  drawBoxes();

  fuel(fuelX, fuelY);

  // move fuels to the left
  fuelX -= moveToLeft2;
  if (fuelX + 40 + gap < -320) {
    fuelX = width + gap;
  }

  // frequency of new fuel
  if (frameCount % 200 === 0) {
    generateNewFuel();
  }

  drawFuels();

  // display among us character
  mover.Show();
}
