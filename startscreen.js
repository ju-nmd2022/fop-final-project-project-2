let isGameActive = true;
let img;
let state = "start";
let button;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(56);

  img = loadImage("./Spacebak.png");
  img2 = loadImage("./space.jpg");

  // Create a button element
  button = createButton("Start!");
  // Set the position of the button
  button.position(650, 650);
  // Add a callback function to handle button click event
  button.mousePressed(handleClick);

  // Add a CSS class to the button
  button.addClass("custom-button");
}

function draw() {
  if (state === "start") {
    drawStart();
  } else if (state === "secondStart") {
    drawStartTwo();
  }
}

function drawStart() {
  background(0);
  image(img2, 10, 10, width, height);
  fill(254, 227, 132);
  textSize(80);
  textFont("Darumadrop One");
  textAlign(CENTER, CENTER); // Center align the text
  text("Are YOU Ready For A New Adventure?", 750, 160);
  console.log("start");
}

function drawStartTwo() {
  background(0);
  image(img, 10, 10, width, height);
  fill(210, 43, 43);
  textSize(150);
  textFont("Darumadrop One");
  text("URGENT!", 450, 190);
  textSize(27);
  textFont("Darumadrop One");
  stroke(0, 0, 0);
  fill(255, 255, 255);
  strokeWeight(4);
  text("NMD is stuck on the wrong spaceship full of impostors.", 435, 470);
  text(
    "Help NMD escape by collecting fuel and fly away in the JTH spaceship!",
    530,
    540
  );
  text(
    "But be careful, the impostors are chasing you, and if you touch the boxes, they'll catch you!",
    650,
    590
  );
  button.hide();
}

// Function to handle button click event
function handleClick() {
  if (state === "start") {
    state = "secondStart";
  }
}
