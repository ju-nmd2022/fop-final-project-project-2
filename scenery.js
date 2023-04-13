let windowX = 100;
let windowY = 100;
let windowW = 100;
let windowH = 100;

function windows(windowX, windowY, windowW, windowH) {
  rect(windowX + 30, windowY + 40, windowW + 15, windowH - 25, 20);
  rect(windowX + 330, windowY + 40, windowW + 15, windowH - 25, 20);
}

function scenery() {
  background(110, 127, 128);
  fill(192, 192, 192);
  // floor
  noStroke();
  rect(0, 430, width, 200);
  // windows
  fill(0, 0, 0);
}

function draw() {
  scenery();
  windows(90, 60, 115, 95);
}
