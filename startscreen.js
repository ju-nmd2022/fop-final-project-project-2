let isGameActive = true;
let img;
let state = "start";
let button;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(56);

  img = loadImage("./Spacebak.png");

  // Create a button element
  button = createButton('Start!');
  // Set the position of the button
  button.position(100, 200);
  // Add a callback function to handle button click event
  button.mousePressed(handleClick);

  // Add a CSS class to the button
  button.addClass('custom-button');
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
  image(img, 10, 10, width, height);
  fill(254, 227, 132);
  textSize(90);
  textFont("times new roman");
  text("Are YOU Ready For A New Adventure?", 230, 950);
  console.log("start");
}

function drawStartTwo() {
  background(0);
  fill(254, 227, 132);
  textSize(90);
  textFont("times new roman");
  text("A", 230, 950);
  button.hide(); // Hide the button when in the secondStart state
  // console.log("secondStart");
}

// Function to handle button click event
function handleClick() {
  if (state === "start") {
    state = "secondStart";
  }
}

//   

// //win, The following code was conducted from here: https://p5js.org/examples/image-load-and-display-image.html
// function WinWin() {
//   background(245, 250, 250);
//   textSize(20);
//   textFont("times new roman");
//   text("YOU MADE IT!, You Saved the Groke!", 50, 50);
//   console.log("win");
//   state = "win";
//   image(img, 40, 65);
// }

// // lost, The following code was conducted from here: https://p5js.org/examples/image-load-and-display-image.html
// function LoseLose() {
//   background(250, 50, 0, 30);
//   textSize(25);
//   textFont("times new roman");
//   fill(255, 255, 255);
//   text("That was not the plan! TRY AGAIN", 100, 100);
//   console.log("lose");
//   state = "lose";
//   image(img1, 250, 165);
// }

