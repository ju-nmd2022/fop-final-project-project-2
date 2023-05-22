let img;
let img2;
let state = "start";
let button;
let button2;
let mover;

function preload() {
  img = loadImage("./Spacebak.png");
  img2 = loadImage("./space.jpg");
}

function setup() {
  createCanvas(1000, 650);
  frameRate(30);
  mover = new Mover(200, 200);
}

let windowX = 100;
let windowY = 100;
let windowW = 100;
let windowH = 100;
let moveToLeft = 7;
let moveToLeft2 = 10;
let gap = 30;

let boxX = 321;
let boxY = 312;
let boxW = 40;
let boxH = 40;

let fuelX = 321;
let fuelY = 312;

let fuelCounter = 0;

let fuels = [];

function scenery() {
  background(110, 127, 128);
  fill(192, 192, 192);
  noStroke();
  rect(0, 530, width, 400);
}

function windows(windowX, windowY, windowW, windowH) {
  fill(0, 0, 0);
  rect(windowX + 30, windowY + 40, windowW + 15, windowH - 25, 20);

  if (windowX < 122 && windowX > 10) {
    fill(200, 200, 200);
    ellipse(157, 169, 25, 25);
    fill(150, 150, 150);
    ellipse(157, 163, 7, 7);
    ellipse(152, 172, 6, 6);
    ellipse(161, 176, 6, 6);
    ellipse(160, 170, 4, 4);
  }
}

function blueBox(x, y, w, h) {
  fill(0, 0, 255);
  rect(x, y, w, h);
}

function woodenBox(x, y, w, h) {
  fill(139, 69, 19);
  rect(x + 50, y + 50, w, h);
}

function generateNewBox() {
  let newBoxX = width + gap;
  let newBoxY = random(200, height - 200);

  boxes.push({
    x: newBoxX,
    y: newBoxY,
  });
}

function drawBoxes() {
  for (let i = boxes.length - 1; i >= 0; i--) {
    let currentBox = boxes[i];

    blueBox(currentBox.x, currentBox.y, boxW, boxH);

    currentBox.x -= moveToLeft2;

    if (currentBox.x + boxW + gap < 0) {
      boxes.splice(i, 1);
    }
  }
}

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

state = "start";

// Function to handle button click event
function handleClick() {
  if (state === "start") {
    state = "secondStart";
  }
}

function handleClickButton2() {
  if (state === "secondStart") {
    state = "gameScreen";
  }
}

// Function to change button2 content on mouse over
function changeButtonContent() {
  button2.html('<i class="material-icons-outlined">rocket_launch</i>');
}

// Function to reset button2 content on mouse out
function resetButtonContent() {
  button2.html('<i class="material-icons-outlined">rocket</i>');
}

function draw() {
  if (state === "start") {
    drawStart();
  } else if (state === "secondStart") {
    drawStartTwo();
  } else if (state === "gameScreen") {
    scenery();
    windows(windowX, windowY, windowW, windowH);
    windows(windowX + 300, windowY, windowW, windowH);

    windowX -= moveToLeft;
    if (windowX + windowW + gap < -320) {
      windowX = width + gap;
    }

    blueBox(boxX, boxY, boxW, boxH);
    woodenBox(boxX, boxY, boxW, boxH);

    boxX -= moveToLeft2;
    if (boxX + boxW + gap < -320) {
      boxX = width + gap;
    }

    if (frameCount % 100 === 0) {
      generateNewBox();
    }

    drawBoxes();

    for (let i = fuels.length - 1; i >= 0; i--) {
      let currentFuel = fuels[i];

      fuel(currentFuel.x, currentFuel.y);

      if (currentFuel.x + 40 + gap < 0) {
        fuels.splice(i, 1);
      }
    }

    if (frameCount % 80 === 0) {
      generateNewFuel();
    }

    drawFuels();

    mover.Show();

    for (let i = 0; i < fuels.length; i++) {
      let currentFuel = fuels[i];

      let characterLeft = mover.pos.x - 25;
      let characterRight = mover.pos.x + 25;
      let characterTop = mover.pos.y - 75;
      let characterBottom = mover.pos.y + 75;

      let fuelLeft = currentFuel.x;
      let fuelRight = currentFuel.x + 40;
      let fuelTop = currentFuel.y;
      let fuelBottom = currentFuel.y + 40;

      if (
        characterLeft < fuelRight &&
        characterRight > fuelLeft &&
        characterTop < fuelBottom &&
        characterBottom > fuelTop
      ) {
        fuelCounter++;
        fuels.splice(i, 1);
      }
    }

    fill(255);
    textSize(20);
    textAlign(RIGHT, TOP);
    text("Fuel Counter: " + fuelCounter, width - 10, 10);
  }
}

function drawStart() {
  background(0);
  image(img2, 1, 1, 1000, 750);
  fill(254, 227, 132);
  textSize(50);
  textFont("Darumadrop One");
  textAlign(CENTER, CENTER);
  text("Are YOU Ready For A New Adventure?", 500, 120);

  if (!button) {
    button = createButton("Start!");
    button.position(1000, 550);
    button.mousePressed(handleClick);
    button.addClass("custom-button");
  }

  if (button2) {
    button2.hide();
  }
}

function drawStartTwo() {
  background(0);
  image(img, 0, 50, 1000, 575);
  fill(210, 43, 43);
  textSize(150);
  textFont("Darumadrop One");
  text("URGENT!", 380, 190);
  textSize(23);
  textFont("Darumadrop One");
  stroke(0, 0, 0);
  fill(255, 255, 255);
  strokeWeight(4);
  text("NMD is stuck on the wrong spaceship full of impostors.", 390, 420);
  text(
    "Help NMD escape by collecting fuel and fly away in the JTH spaceship!",
    450,
    450
  );
  text(
    "But be careful, the impostors are chasing you, and if you touch the boxes, they'll catch you!",
    520,
    475
  );
  text("GO!", 825, 540);

  if (!button2) {
    button2 = createButton("");
    button2.position(965, 575);
    button2.addClass("button2");

    button2.mouseOver(changeButtonContent);
    button2.mouseOut(resetButtonContent);
    button2.mousePressed(handleClickButton2);
  }

  if (button) {
    button.hide();
  }
}
