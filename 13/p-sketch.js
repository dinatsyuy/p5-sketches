let bigD;

function preload() {
	bigD = loadImage('assets/bigD.png');
}

function setup() {
	noStroke();
	createCanvas(1000, 1000); //width and height in pixels
	//(x,y,w,h)
	background(255);
	//image(bigD,0,0);
	createLoop({duration:3, gif:true});


	


}

function draw() {

	background(255);
	unitSize = 40;
	for (i=0; i<height; i=i+20) {
		for(j=0; j<width; j=j+20) {
			pixelColor = bigD.get(j,i);

			fill(pixelColor);
			randomSize = random(10,20);
			ellipse(j,i,randomSize,randomSize);
		}
	}
}




function mousePressed() {
	saveCanvas("sketch-", "png")
}

//Reference: Graphic Design 2: March 16, Instructor: Ali Qadeer.