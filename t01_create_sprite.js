/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
/// Written by ???
/*******************************************************/
let sprite;
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
  console.log("setup");
  new Canvas(1250,650);
  sprite = new Sprite();
  sprite.width = 300;
  sprite.height = 600;
  sprite.color = 'white';
  ///
  cnv = new Canvas(500, 500);

//create a line of 10 sprites across the top of the screen
for (var i = 0; i < 1; i++) {
  var block = new Sprite(i*70 + 40, 50, 50, 50);
  block.color = color(255, 0, 0); // Red color
}

for (var i = 1; i < 2; i++) {
  var block = new Sprite(i*70 + 40, 100, 50, 50);
  block.color = color(255, 0, 0); // Red color
}

for (var i = 2; i < 3; i++) {
  var block = new Sprite(i*70 + 40, 200, 50, 50);
  block.color = color(255, 0, 0); // Red color
}

for (var i = 3; i < 4; i++) {
  var block = new Sprite(i*70 + 40, 300, 50, 50);
  block.color = color(255, 0, 0); // Red color
}

for (var i = 4; i < 5; i++) {
  var block = new Sprite(i*70 + 40, 400, 50, 50);
  block.color = color(255, 0, 0); // Red color
}
}
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
  background('navy');
  sprite.x += 5;
}

/*******************************************************/
//  END OF APP
/*******************************************************/