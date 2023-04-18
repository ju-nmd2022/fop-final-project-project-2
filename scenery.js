let windowX = 100;
let windowY = 100;
let windowW = 100;
let windowH = 100;

function windows(windowX, windowY, windowW, windowH) {
  fill(0, 0, 0);
  rect(windowX + 30, windowY + 40, windowW + 15, windowH - 25, 20);
  rect(windowX + 330, windowY + 40, windowW + 15, windowH - 25, 20);
  // pluto
  fill(200, 200, 200);
  ellipse(windowX + 57, windowY + 69, 25, 25);
  fill(150, 150, 150);
  ellipse(windowX + 57, windowY + 63, 7, 7);
  ellipse(windowX + 52, windowY + 72, 6, 6);
  ellipse(windowX + 61, windowY + 76, 6, 6);
  ellipse(windowX + 60, windowY + 70, 4, 4);
}

function scenery() {
  background(110, 127, 128);
  fill(192, 192, 192);
  // floor
  noStroke();
  rect(0, 430, width, 200);
}

//function draw() {
scenery();
windows(windowX, windowY, windowW, windowH);
//}

//blue box
fill(84, 196, 198);
rect(176, 376, windowW + 15, windowH - 10, 5);
stroke(150, 150, 150);
strokeWeight(2.5);
line(177, 408, 199, 408);
line(199, 408, 216, 422);
line(216, 422, 256, 422);
line(256, 422, 273, 408);
line(273, 408, 290, 408);

//wooden box
fill(202, 164, 114);
noStroke();
rect(400, 376, windowW + 15, windowH - 10, 5);
fill(110, 110, 110);
// nails
ellipse(406, 395, 8, 8);
ellipse(506, 395, 8, 8);
ellipse(406, 415, 8, 8);
ellipse(506, 415, 8, 8);
ellipse(406, 435, 8, 8);
ellipse(506, 435, 8, 8);
ellipse(406, 455, 8, 8);
ellipse(506, 455, 8, 8);
stroke(128, 70, 27);
strokeWeight(2.5);
line(401, 466, 514, 466);
line(401, 446, 514, 446);
line(401, 426, 514, 426);
line(401, 406, 514, 406);
line(401, 386, 514, 386);
