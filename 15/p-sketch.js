var angle = 1.8;
//lets you set the center of the circle
var offset = 600;
//lets you set how big the circle is
var scalar = 200;
//lets you set how fast the ellipses are drawn and how far apart they are
var speed = 0.02;

function setup() {
	

	var c = createCanvas(1000, 1000); //width and height in pixels
	background(255); //255=white;0=black


	var i = 0;
	
	stroke(0);
	strokeWeight(2);
	noFill();

	while(i<200) {
		ellipse(800,4*i,100,100);
		i=i+1;
	}

	}
	//(x,y,w,h)


	function draw() {
		var x = offset + cos(angle) * scalar;
	  	var y = offset + sin(angle) * scalar;
	  	ellipse(x, y, 100, 100);

	  	angle += speed;
  //changes the direction of the circular motion
  //angle -= speed:
	  }




	




	//var i = 0;

	//while(i<100) {
		//the "while" can be "for" as well: for(var i = 0;i<100; i++)
		//add code here
		//e.g. ellipse(10*i,10*i,250,250);
		//e.g. ellipse(random(1000),random(1000),250,250);
		//e.g. fill(random(255))
		//i=i+1;
	//}



function mousePressed() {
	saveCanvas("sketch-", "png")
}


//function draw() {
	//stroke(255)
	//fill(255)
	//nofill()
	//rRadius = random(50)+50
	//ellipse(mouseX,mouseY,50,50);
	//ellipse(mouseX,mouseY,rRadius,rRadius);}