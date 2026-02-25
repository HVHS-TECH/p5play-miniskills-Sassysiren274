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
  // Create your sprite
  Square = new Sprite(300,300,200,200,);
  Square.color = 'Black';
  //Square.rotationSpeed = 2;
  //Square.vel.x = 2;
}
/*******************************************************/
// draw()
/*******************************************************/
function draw() {

  background('lightgrey');

  if (kb.pressing('left')) {
Square.vel.x = -5;
}

else if (kb.pressing ('right')) {
Square.vel.x = 5;
};

if (kb.released('left')) {
  Square.vel.x = 0;
}

if (kb.released('right')) {
  Square.vel.x = -0;
}
}
/*******************************************************/
//  END OF APP
/*******************************************************/	
