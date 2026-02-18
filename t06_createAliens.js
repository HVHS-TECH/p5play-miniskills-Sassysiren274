/*******************************************************/
// P5.play: t06_createAliens
// Create aliens on mouse click
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
  //
  for (i = 0; i < 10; i++) {
    alien = new Sprite(100 + i*100, 100, 30, 'd');
    alien.colour = "Purple";
    alien.vel.x = 2;
    alien.vel.y = 2;
    alien.bounciness = 1;
    alien.friction = 0;
}
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