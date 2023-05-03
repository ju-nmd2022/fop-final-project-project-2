let isGameActive = true;
let img;
let gameState = "start";
let state = "start";

function setup() {
  createCanvas(900, 550);
  frameRate(56);
}

function preload() {
  img = loadImage("./Spacebak.png");
}

function StartGame() {
  background(110, 127, 128);
  fill(255, 255, 255);
  textSize(20);
  textFont("times new roman");
  image(img, -1500, -2000);
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
