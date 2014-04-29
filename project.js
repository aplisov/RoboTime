
title('RoboTime');

// define variables
var mainx = 50;
var mainy = 326;
var tankx = 375;
var tired_workery = 470;
var tired_workerx = 150;
var bulletX = mainx;
var bulletY = mainy;
var bulletFired = false;
var enemyKilled = false;
var playerKilled = false;

var mouseClicked = function() {

    bulletFired = true;
    bulletX = 1;

};

// this code is executed once when the program is started
var setup = function() {

    // set up the size of the canvas (you probably don't want to change this!)
    size(800, 600);

    killed = loadImage("killed.png");
    backgroundImage = loadImage("Background2.png");
    backgroundImage.resize(800, 600);
    tired_worker = loadImage("enemy.png");
    spike = loadImage("spike.png");
    deadchar = loadImage("dead.png");
    //var pistol = loadImage("Gun.png");
    //var assault_rifle = loadImage("Assault_Rifle.png");
    //var jet = loadImage("Jet.png");
    //var key_hole = loadImage("Key_Hole.png");
    //var crate_with_button = loadImage("Crate_With_Button.png");
    //var health_bar = loadImage("Health_Bar.png");
    tank = loadImage("Tank.png");

 loadImage("Ammo_Box.png");
     main_character = loadImage("main_character.png");

};

var keyPressed = function() {
}

// override draw function, by default it will be called 60 times per second
var draw = function() {

    // clear the screen
    background(255, 255, 255);

    // Left Number = Side to Side Right Number = Up and down
    image(backgroundImage, 0, 0);
    //image(jet, 250, 75);
    //image(key_hole, 300, 315);
    //textSize(15)
    //text("", 115, 50);
    //image(crate_with_button, 300, 325);
    //image(health_bar, 440, -3);
    //image(ammo_box, 0, 300);
    image(spike, 315, 480);
    image(main_character, mainx, 470);
    image(tank, tankx, 375);
    image(tired_worker, tired_workerx, tired_workery);

    if (bulletX > tired_workerx) {
	enemyKilled = true;
	bulletFired = false;
	bulletX = 0;


    }

    if (enemyKilled) {
	//Uncomment this line when worker BUG is fixed! 
	image(killed, tired_workerx, tired_workery);
    }

	//Character Movement Start
    if (keyIsPressed && keyCode === RIGHT) {
	mainx += 2;

    } else if (keyIsPressed && keyCode === LEFT) {
	mainx -= 2;
    }
	//Character Movement End



	//Tank Movement Start
      if (keyIsPressed && keyCode === UP) {
	tankx += 2;

    } else if (keyIsPressed && keyCode === DOWN) {
	tankx -= 2;
    }
	//Tank Movement End



    if (mainx > 600) {
	mainx = 0;
    }
	//Bullet Starts Here
    if (bulletFired) {
	fill(166, 255, 0);
	ellipse(bulletX, bulletY, 4, 4);
	bulletX = bulletX + 5;
    }
	//Bullet Ends Here
};
