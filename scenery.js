let windowX = 100;
let windowY = 100;
let windowW = 100;
let windowH = 100;
let moveToLeft = 5;
let moveToLeft2 = 10;
let gap = 30;

let boxX = 100;
let boxY = 100;
let boxW = 100;
let boxH = 100;

let fuelX = 321;
let fuelY = 312;

function windows(windowX, windowY, windowW, windowH) {
  fill(0, 0, 0);
  rect(windowX + 30, windowY + 40, windowW + 15, windowH - 25, 20);

  if (windowX < 122 && windowX > 10) {
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

function woodenBox(boxX, boxY, boxW, boxH) {
  //wooden box
  fill(202, 164, 114);
  strokeWeight(4);
  stroke(141, 114, 79);
  rect(boxX + 300, boxY + 276, boxW + 15, boxH - 10, 5);
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
  line(boxX + 301, boxY + 346, boxX + 414, boxY + 346);
  line(boxX + 301, boxY + 326, boxX + 414, boxY + 326);
  line(boxX + 301, boxY + 306, boxX + 414, boxY + 306);
  line(boxX + 301, boxY + 286, boxX + 414, boxY + 286);
}

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

function draw() {
  scenery();
  windows(windowX, windowY, windowW, windowH);
  windows(windowX + 300, windowY, windowW, windowH);

  // move windows to the left
  windowX = windowX - moveToLeft;
  // if the window is out of the screen
  if (windowX + windowW + gap < -320) {
    // generate new windows from the right
    for (let i = 0; i < 1; i++) {
      windowX = width + gap * (i + 1);
    }
  }

  blueBox(boxX, boxY, boxW, boxH);
  woodenBox(boxX, boxY, boxW, boxH);

  // move boxes to left
  boxX = boxX - moveToLeft2;
  // if the window is out of the screen
  if (boxX + boxW + gap < -320) {
    // generate new windows from the right
    for (let i = 0; i < 1; i++) {
      boxX = width + gap * (i + 1);
    }
  }

  fuel(fuelX, fuelY);
}

// moving windows to left code without for loop
/*   move windows to left
  windowX = windowX - moveToLeft;
  // if windows are out of the screen
  if (windowX + windowW + gap < -320) {
    // generate new windows from the right
    windowX = width + gap;
  } */

// moving boxes to left code without loop
/*  // move boxes to left
  boxX = boxX - moveToLeft;
  // if boxes are out of the screen
  if (boxX + boxW + gap < -320) {
    // generate new boxes from the right
    boxX = width + gap;
  }*/
