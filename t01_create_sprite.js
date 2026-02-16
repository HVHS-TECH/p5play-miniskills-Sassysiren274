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

red = new   Sprite(50,50,100,100);
red.color = 'red';

green = new Sprite(450,45,100,100);
green.color = 'green';

blue = new Sprite(450,450,100,100);
blue.color = 'blue';

yellow = new Sprite(40,450,100,100);
yellow.color = 'yellow';

purple = new Sprite(250,250,100,100);
purple.color = 'purple';
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