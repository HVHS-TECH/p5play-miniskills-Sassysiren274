/*******************************************************/
// P5.play: t22_keyboard
// Move sprite via keyboard
// Written by ???
/*******************************************************/
let sprite;
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
//canvas
	cnv = new Canvas(1250,650);
	//world.gravity.y = 10;
	
  Square = new Sprite(300,300,200,200,);
  Square.color = 'Black';
  Square.rotationSpeed = 2;
  //Square.vel.x = 2;
 wallLH  = new Sprite(0, height/2, 8, height, 'k');
  wallLH.color = 'black';
  wallRH  = new Sprite(width, height/2, 8, height, 'k');
  wallRH.color = 'black';
  wallTop = new Sprite(width/2, 0, width, 8, 'k');
  wallTop.color = 'black';
  wallBot = new Sprite(width/2, height, width, 8, 'k');
  wallBot.color = 'black';
}
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('navy');
if (!mouse.presses()) {
    Square.moveTowards(mouseX, mouseY, 1); // smooth movement
  }

  // If mouse is pressed, move to a fixed position at speed 5
  if (mouse.presses()) {
    Square.moveTo(200, 150, 50);
  }
  if (kb.pressing('left')) {
  // Set sprite's velocity to the left
}
else if (kb.pressing ('right')) {
};
if (kb.released('left')) {
// Set sprite's velocity to zero
}
}
/*******************************************************/
//  END OF APP
/*******************************************************/	