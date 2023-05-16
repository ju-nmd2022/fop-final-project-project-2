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

//placeholder for boxes variables

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

//placeholder for bluebox and woodenbox functions

//placeholder for generating new boxes functions

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

//placeholder for among us character code

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
