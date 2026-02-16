/*******************************************************/
// P5.play: t04_collision
// Sprite falls due to gravity & collides with the floor
// Written by ???
/*******************************************************/
let sprite;
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
//canvas
	new Canvas(1250,650);
	world.gravity.y = 10;
	
  Square = new Sprite(300,300,200,200,);
  Square.color = 'Black';
  Square.rotationSpeed = 2;
  Square.vel.x = 2;
  platform_1 = new Sprite(250,250,200,200, '10');
}
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('navy');
}

/*******************************************************/
//  END OF APP
/*******************************************************/