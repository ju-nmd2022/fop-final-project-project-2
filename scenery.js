let windowX = 100;
let windowY = 100;
let windowW = 100;
let windowH = 100;
let moveToLeft = 5;
let gap = 30;

function windows(windowX, windowY, windowW, windowH) {
  fill(0, 0, 0);
  rect(windowX + 30, windowY + 40, windowW + 15, windowH - 25, 20);
  rect(windowX + 330, windowY + 40, windowW + 15, windowH - 25, 20);

  if ((windowX < 130 && windowX > 10) || (windowX < 10 && windowX > 50)) {
    //pluto
    fill(200, 200, 200);
    ellipse(157, 169, 25, 25);
    fill(150, 150, 150);
    ellipse(157, 163, 7, 7);
    ellipse(152, 172, 6, 6);
    ellipse(161, 176, 6, 6);
    ellipse(160, 170, 4, 4);
  }
}

function scenery() {
  background(110, 127, 128);
  fill(192, 192, 192);
  // floor
  noStroke();
  rect(0, 430, width, 200);
}

function blueBox(windowW, windowH) {
  //blue box
  fill(84, 196, 198);
  strokeWeight(4);
  stroke(99, 148, 147);
  rect(176, 376, windowW + 15, windowH - 10, 5);
  stroke(150, 150, 150);
  strokeWeight(2.5);
  line(180, 408, 199, 408);
  line(199, 408, 216, 422);
  line(216, 422, 250, 422);
  line(250, 422, 266, 408);
  line(266, 408, 287, 408);
}

function woodenBox(windowW, windowH) {
  //wooden box
  fill(202, 164, 114);
  strokeWeight(4);
  stroke(141, 114, 79);
  rect(400, 376, windowW + 15, windowH - 10, 5);
  fill(110, 110, 110);
  // nails
  noStroke();
  ellipse(407, 395, 8, 8);
  ellipse(507, 395, 8, 8);
  ellipse(407, 415, 8, 8);
  ellipse(507, 415, 8, 8);
  ellipse(407, 435, 8, 8);
  ellipse(507, 435, 8, 8);
  ellipse(407, 455, 8, 8);
  ellipse(507, 455, 8, 8);
  // wood lines
  stroke(106, 81, 50);
  strokeWeight(2.5);
  line(401, 446, 514, 446);
  line(401, 426, 514, 426);
  line(401, 406, 514, 406);
  line(401, 386, 514, 386);
}

function draw() {
  scenery();
  windows(windowX, windowY, windowW, windowH);
  //move windows to left
  windowX = windowX - moveToLeft;
  // if windows are out of the screen
  if (windowX + windowW + gap < -320) {
    // generate new windows from the right
    windowX = width + gap;
  }
  blueBox(windowW, windowH);
  woodenBox(windowW, windowH);
}
