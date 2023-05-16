let boxX = 100;
let boxY = 200;
let boxW = 100;
let boxH = 100;

// function for blue box
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

// function for wooden box
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

// function to generate a random box type (either blue or wood)
function generateRandomBoxType() {
  // Generate a random number (0 or 1) to determine the box type
  return floor(random(2));
}

// function to generate new boxes in random orders
let boxes = [];
function generateNewBox() {
  let newBoxType = generateRandomBoxType();
  let newBoxX = width + gap; // Initial X position of the new box
  let newBoxY = boxY; // Same Y position as the existing boxes

  boxes.push({
    type: newBoxType,
    x: newBoxX,
    y: newBoxY,
  });
}

// function to display new boxes on the canvas
function drawBoxes() {
  for (let i = boxes.length - 1; i >= 0; i--) {
    let currentBox = boxes[i];

    if (currentBox.type === 0) {
      blueBox(currentBox.x, currentBox.y, boxW, boxH);
    } else {
      woodenBox(currentBox.x, currentBox.y, boxW, boxH);
    }

    currentBox.x -= moveToLeft2;

    if (currentBox.x + boxW + gap < -320) {
      boxes.splice(i, 1); // Remove the box from the array if it's out of the screen
    }
  }
}
