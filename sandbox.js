/*******************************************************/
// P5.play: t02_move_sprite
// Move a sprite
// Written by ???
/*******************************************************/
let sprite;
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup");
//canvas
	new Canvas(1250,650);

  Square = new Sprite(300,300,200,200,'50');
  Square.color = 'Black';
  Square.rotationSpeed = 2;
  Square.vel.x = 2;
}
function draw() {

  // Example movement
  if (kb.pressing('right')) {
    player.vel.x = 2;
  } else {
    player.vel.x = 0;
  }

  // Change colour after x = 200
  if (player.x > 200) {
    player.color = 'red';
  } else {
    player.color = 'blue';
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