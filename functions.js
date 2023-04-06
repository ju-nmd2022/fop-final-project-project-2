function setup() {
  createCanvas(windowWidth, windowHeight);
}

function scenery() {
  background(110, 127, 128);
  fill(192, 192, 192);
  // floor
  noStroke();
  rect(0, 430, width, 200);
  // windows
  fill(0, 0, 0);
  rect(130, 140, 115, 75, 20);
  rect(430, 140, 115, 75, 20);
}

function draw() {
  scenery();
}
