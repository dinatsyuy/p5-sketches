//var song;
let bigD;

function preload() {
	//song = loagSound('lazy_cheel.mp3')
	bigD = loadImage('assets/bigD.png');
}

function setup() {
	noStroke();
	createCanvas(1000, 1000); //width and height in pixels
	//song.play();
	
	//(x,y,w,h)
	background(255);
	//image(bigD,0,0);
	createLoop({duration:3, gif:true});


}

function draw() {

	background(255);
	unitSize = 20;
	for (i=1; i<height; i=i+20) {
		for(j=1; j<width; j=j+20) {
			pixelColor = bigD.get(j,i);

			fill(pixelColor);
			randomSize = random(5,42);
			rect(j,i,25,randomSize);
		}
	}
}




function mousePressed() {
	saveCanvas("sketch-", "png")
}

//Reference: Graphic Design 2: March 16, Instructor: Ali Qadeer.

//Music: Cheel, Lazy Walk, https://studio.youtube.com/channel/UCqGHV0Rn0DXsdheH2hHlOQQ/music