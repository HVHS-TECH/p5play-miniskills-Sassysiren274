/*******************************************************/
// P5.play: t21_head2Mouse
// Move sprite towards the mouse' position
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
}
/*******************************************************/
//  END OF APP
/*******************************************************/	
