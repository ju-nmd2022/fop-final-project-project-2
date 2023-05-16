let isGameActive = true;
let img;
let gameState = "start";
let state = "start";

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(56);
}

function preload() {
  img = loadImage("./Spacebak.png");
}

function StartGame() {
  image(img, -100, -100, width, height);
  fill(254, 227, 132);
  textSize(90);
  textFont("times new roman");
  text("Are YOU Ready For A New Adventure?",230,950);
  
  
}
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

function draw() {
  if (state === "start") {
    StartGame();
  } else if (state === "game") {
    gamePlay();
  } else if (state === "win") {
    WinWin();
  } else if (state === "lose") {
    LoseLose();
  }
}
