let img;
let img2;
let state = "start";
let button;
let button2;
let mover;
let characterSpeed = 5;
let playAgainButton;

// function preload() {
//   img = loadImage("./Spacebak.png");
//   img2 = loadImage("./space.jpg");
//   img3 = loadImage("./gsmeover.jpg")
//   img4 = loadImage("./won.jpg")
// }

function setup() {
  createCanvas(1000, 650);
  frameRate(30);
  mover = new Mover(200, 500);

  img = loadImage("./Spacebak.png");
  img2 = loadImage("./space.jpg");
  img3 = loadImage("./gsmeover.jpg");
  img4 = loadImage("./won.jpg");
}

let windowX = 100;
let windowY = 100;
let windowW = 100;
let windowH = 100;
let moveToLeft = 7;
let moveToLeft2 = 10;
let gap = 30;

/*let boxX = 321;
let boxY = 312;
let boxW = 40;
let boxH = 40;*/

let fuelX = 321;
let fuelY = 312;

let fuels = [];
let fuelCounter = 0;

let boxX = 100;
let boxY = 200;
let boxW = 100;
let boxH = 100;
let boxes = [];

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
  rect(boxX + 76, boxY + 276, boxW + 15, boxH - 10, 5);
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
  line(boxX + 76, boxY + 346, boxX + 100, boxY + 346);
  line(boxX + 76, boxY + 326, boxX + 414, boxY + 326);
  line(boxX + 76, boxY + 306, boxX + 414, boxY + 306);
  line(boxX + 76, boxY + 286, boxX + 414, boxY + 286);
}

// function to generate a random box type (either blue or wood)
function generateRandomBoxType() {
  // Generate a random whole number (0 or 1) to determine the box type
  return floor(random(2));
}

// function to generate new boxes in random orders
function generateNewBox() {
  let newBoxType = generateRandomBoxType();
  let newBoxX = width + gap; // initial X position of the new box
  let newBoxY = boxY; // always same Y position

  // stores the new box in array to later display boxes on canvas, loops, store info
  boxes.push({
    type: newBoxType,
    x: newBoxX,
    y: newBoxY,
  });
}

// function to display new boxes on the canvas
// the following 3 lines of code have been adapted from https://www.w3docs.com/snippets/javascript/how-to-loop-through-array-and-remove-items-without-breaking-the-for-loop.html
function drawBoxes() {
  // iterate over each box object
  for (let i = boxes.length - 1; i >= 0; i--) {
    let currentBox = boxes[i]; // and assign currentbox variable for readability and rendering

    if (currentBox.type === 0) {
      blueBox(currentBox.x, currentBox.y, boxW, boxH);
    } else {
      woodenBox(currentBox.x, currentBox.y, boxW, boxH);
    }

    currentBox.x -= moveToLeft2;

    /*if (currentBox.x + boxW + gap < -320) {
      boxes.splice(i, 1); // Remove the box from the array if it's out of the screen
    }*/
  }
}

function draw() {
  if (state === "start") {
    drawStart();
  } else if (state === "secondStart") {
    drawStartTwo();
  } else if (state === "gameScreen") {
    if (fuelCounter < 10) {
      gameScreen1();
    } else {
      Win();
    }
    // prova lägg collision här??
  } else if (state === "gameOver") {
    gameOver();
  }
}

// background and floor
function scenery() {
  background(110, 127, 128);
  fill(192, 192, 192);
  noStroke();
  rect(0, 530, width, 400);
}

//function for window
function windows(windowX, windowY, windowW, windowH) {
  fill(0, 0, 0);
  rect(windowX + 30, windowY + 40, windowW + 15, windowH - 25, 20);

  // if window is between these x positions, draw pluto planet
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

/*function drawBoxes() {
  for (let i = boxes.length - 1; i >= 0; i--) {
    let currentBox = boxes[i];

    blueBox(currentBox.x, currentBox.y, boxW, boxH);

    currentBox.x -= moveToLeft2;

    /*if (currentBox.x + boxW + gap < 0) {
      boxes.splice(i, 1);
    }
  }
}*/

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
function generateNewFuel() {
  let newFuelX = width + gap; // initial X position of the new fuel
  let newFuelY = random(100, height - 150); // random Y position within floor level and roof ish

  // stores the new fuel in array to later display on canvas, loops, fuel counter
  fuels.push({
    x: newFuelX,
    y: newFuelY,
  });
}

// function to display new fuels on the canvas
function drawFuels() {
  // iterate over each fuel object
  for (let i = fuels.length - 1; i >= 0; i--) {
    let currentFuel = fuels[i]; // and assign currentfuel variable for readability and rendering

    fuel(currentFuel.x, currentFuel.y); // new x and y values for the fuel

    currentFuel.x -= moveToLeft2;

    /* if (currentFuel.x + 40 + gap < 0) {
      fuels.splice(i, 1); // Remove the fuel from the array if it's out of the screen
    } */
  }
}

//placeholder for among us character code

// function for the game screen itself
function gameScreen1() {
  scenery();
  windows(windowX, windowY, windowW, windowH);
  windows(windowX + 300, windowY, windowW, windowH);

  // move windows to the left
  windowX -= moveToLeft;
  // if right edge of window is in left of screen
  if (windowX + windowW + gap < -320) {
    // "reset" position to the right of screen
    windowX = width + gap;
  }

  // move initial box x position to the left
  boxX -= moveToLeft2;
  // if right edge of box is in left of screen
  if (boxX + boxW + gap < -320) {
    // "reset" position to the right of screen
    boxX = width + gap;
  }

  // frequency of new boxes
  if (frameCount % 100 === 0) {
    generateNewBox();
  }

  drawBoxes();

  // Check for collision with boxes
  for (let i = 0; i < boxes.length; i++) {
    let currentBox = boxes[i];
    // Box dimensions
    let boxLeft = currentBox.x + 76;
    let boxRight = currentBox.x + boxW + 15 + 76;
    let boxTop = currentBox.y + 275;
    let boxBottom = currentBox.y + boxH - 10 + 275;

    // Character dimensions
    let characterLeft = mover.pos.x - 20;
    let characterRight = mover.pos.x + 20;
    let characterTop = mover.pos.y - 50;
    let characterBottom = mover.pos.y + 50;

    console.log("charTop:", characterTop);
    console.log("boxBottom:", boxBottom);
    console.log("charBottom:", characterBottom);
    console.log("boxTop:", boxTop);
    // Check for collision with blue box
    if (characterLeft < boxRight && characterRight > boxLeft) {
      if (characterBottom > boxTop && characterTop < boxTop) {
        // Collision with wooden box, call gameOver()
        state = "gameOver";
        gameOver();
        return; // Exit the function to stop the game
      }
    }
  }

  /*for (let i = fuels.length - 1; i >= 0; i--) {
    let currentFuel = fuels[i];

    fuel(currentFuel.x, currentFuel.y);

    // currentFuel.x -= moveToLeft2;

    if (currentFuel.x + 40 + gap < 0) {
      fuels.splice(i, 1); // Remove the fuel from the array if it's out of the screen
    }
  }*/

  // frequency of new fuel
  if (frameCount % 80 === 0) {
    generateNewFuel();
  }

  drawFuels();

  // display among us character
  mover.Show();

  // code for collecting fuel
  // loop to iterate through each fuel
  for (let i = 0; i < fuels.length; i++) {
    let currentFuel = fuels[i];

    // character's dimensions
    let characterLeft = mover.pos.x - 25;
    let characterRight = mover.pos.x + 25;
    let characterTop = mover.pos.y - 75;
    let characterBottom = mover.pos.y + 75;

    // fuel's dimensions
    let fuelLeft = currentFuel.x;
    let fuelRight = currentFuel.x + 40;
    let fuelTop = currentFuel.y;
    let fuelBottom = currentFuel.y + 40;

    // check for collision
    if (
      characterLeft < fuelRight &&
      characterRight > fuelLeft &&
      characterTop < fuelBottom &&
      characterBottom > fuelTop
    ) {
      // if they collide, increase the counter and remove one fuel at that index
      fuelCounter++;
      fuels.splice(i, 1);
    }
  }

  fill(255);
  textSize(20);
  textAlign(RIGHT, TOP);
  text("Fuel Counter: " + fuelCounter, width - 10, 10);
}

function drawStart() {
  background(0);
  image(img2, 1, 1, 1000, 750);
  fill(254, 227, 132);
  textSize(50);
  textFont("Darumadrop One");
  textAlign(CENTER, CENTER);
  text("Are YOU Ready For A New Adventure?", 500, 120);

  if (button) {
    button.show();
  } else {
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
  text("URGENT!", 320, 190);
  textSize(23);
  textFont("Darumadrop One");
  stroke(0, 0, 0);
  fill(255, 255, 255);
  strokeWeight(4);
  text("NMD is stuck on the wrong spaceship full of impostors.", 390, 420);
  text(
    "Help NMD escape by collecting 15 fuels and fly away in the JTH spaceship!",
    450,
    453
  );
  text(
    "But be careful, the impostors are chasing you, and if you stumble on the boxes, they'll catch you!",
    500,
    485
  );

  if (button2) {
    button2.show();
  } else {
    button2 = createButton("GO");
    button2.position(1000, 600);
    button2.addClass("button2");
    button2.mousePressed(handleClickButton2);
  }

  if (button) {
    button.hide();
  }
}

// Function to handle button click event
function handleClick() {
  if (state === "start") {
    state = "secondStart";
  }
}

function handleClickButton2() {
  if (state === "secondStart") {
    state = "gameScreen";
    gameScreen1();
  }

  if (button2) {
    button2.hide();
  }
}
function gameOver() {
  background(0);
  image(img3, 0, 50, 1000, 575);
  fill(230, 230, 230);
  textSize(40);
  textFont("Darumadrop One");
  text("Try again!", 780, 600);
  textSize(23);
}
function Win() {
  background(0);
  image(img4, 0, 50, 1000, 575);
  fill(230, 230, 230);
  textSize(40);
  textFont("Darumadrop One");
  // text("Play again!", 780, 600);

  if (playAgainButton) {
    playAgainButton.show();
  } else {
    playAgainButton = createButton("Play again!");
    playAgainButton.position(350, 350);
    playAgainButton.addClass("play-again-button");
    playAgainButton.mousePressed(handleClickPlayAgain);
  }

  function handleClickPlayAgain() {
    // Reset any necessary variables or states
    state = "start"; // Reset the game state to the start
    fuelCounter = 0; // Reset the fuel counter to 0
    // Reset the position of the character, boxes, fuels, etc.
    mover.pos.x = 200;
    mover.pos.y = 550;
    backPackX = mover.pos.x - 26;
    goggleX = mover.pos.x + 7;
    goggleY = 25;
    Rightleg = 45;
    Leftleg = 45;
    Rinvy = 41;
    Linvy = 41;
    bodyY = 65;
    boxX = 100;
    boxes = [];
    fuels = [];

    // Hide the play again button
    playAgainButton.hide();

    // Show the initial start screen
    drawStart();
  }
}
