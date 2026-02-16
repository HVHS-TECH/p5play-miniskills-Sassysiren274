/*******************************************************/
// P5.play: t05_createWalls
// Create walls around the canvas
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
  //
  wallLH  = new Sprite(0, height/2, 8, height, 'k');
  wallLH.color = 'black';
  wallRH  = new Sprite(width, height/2, 8, height, 'k');
  wallRH.color = 'black';
  wallTop = new Sprite(width/2, 0, width, 8, 'k');
  wallTop.color = 'black';
  wallBot = new Sprite(width/2, height, width, 8, 'k');
  wallBot.color = 'black';
  //
  ball_1 = new Sprite(width/2, height/2, 50, 'd');
  ball_1.color = 'cyan';
  ball_1.vel.x = 2;
  ball_1.bounciness = 1;
  ball_1.friction = 0;
  ball_1.drag = 0;
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