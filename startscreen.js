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
  textFont("times new roman");
  textAlign(CENTER, CENTER); // Center align the text
  text("Are YOU Ready For A New Adventure?", width / 2, 200);
  console.log("start");
}

function drawStartTwo() {
  background(0);
  image(img, 10, 10, width, height);
  fill(254, 227, 132);
  textSize(90);
  textFont("times new roman");
  button.hide(); // Hide the button when in the secondStart state
  // console.log("secondStart");
}

// Function to handle button click event
function handleClick() {
  if (state === "start") {
    state = "secondStart";
  }
}
