let img;
let state = "start";
let button;
let button2;

function setup() {
  createCanvas(1000, 650);
  frameRate(56);

  img = loadImage("./Spacebak.png");
  img2 = loadImage("./space.jpg");
  img3 = loadImage("./gsmeover.jpg");
  img4 = loadImage("./won.jpg");
}

state = "start";

function draw() {
  if (state === "start") {
    drawStart();
  } else if (state === "secondStart") {
    drawStartTwo();
  } else if (state === "gameScreen") {
  }
}

function drawStart() {
  background(0);
  image(img2, 1, 1, 1000, 750);
  fill(254, 227, 132);
  textSize(50);
  textFont("Darumadrop One");
  textAlign(CENTER, CENTER); // Center align the text
  text("Are YOU Ready For A New Adventure?", 500, 120);

  // Create a button element if it doesn't exist
  if (!button) {
    button = createButton("Start!");
    button.position(1000, 550);
    button.mousePressed(handleClick);
    button.addClass("custom-button");
  }

  // Hide button2 if it exists
  if (button2) {
    button2.hide();
  }
}

function drawStartTwo() {
  if (state === "gameScreen") {
    loadGameScreen();
    return; // Exit the function to prevent further drawing
  }
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

  // Create button2 if it doesn't exist
  if (!button2) {
    button2 = createButton("");
    button2.position(965, 575);
    button2.addClass("button2");

    // button2.mouseOver(changeButtonContent);
    // button2.mouseOut(resetButtonContent);
    button2.mousePressed(handleClickButton2); // Add the event handler
  }

  // Hide button1 if it exists
  if (button) {
    button.hide();
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
