/*******************************************************/
// P5.play: t03_gravity
// Sprite falls due to gravity
// Written by ???
/*******************************************************/
let square1;
let square2;
let ground;
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
//canvas
	new Canvas(1250,650);
	world.gravity.y = 10;
	
  Square1 = new Sprite(300,300,200,200,'10');
  Square1.color = 'Black';
  Square1.rotationSpeed = 2;
  Square1.vel.x = 2;
  //
  Square2 = new Sprite(200,200,150,150,'10');
  Square2.color = 'Green';
  Square2.rotationSpeed = 2;
  Square2.vel.x = 2;
}
//
 ground = new Sprite(625, 630, 1250, 40, "static");
  ground.color = "white";
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('navy');
}

/*******************************************************/
//  END OF APP
/*******************************************************/