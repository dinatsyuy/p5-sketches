let angle = 0;

function setup() {

	createCanvas(1000,1000);
}

function draw() {
	background(0);

	push();
	translate(width/2, height/2);
	rotate(angle);
	fill(255);
	noStroke();
	//rectMode(CENTER);
	//rect(0,0,100);
	pop();

	for (let a=0; a<radians(360); a+=radians(30)) {
		push();
		translate(width/2, height/2);
		rotate(a);
		translate(0,200);
		rotate(-angle);
		noStroke();
		rectMode(RADIUS);
		rect(0,0,50);
		pop();
	}


	angle += radians(2);

	noStroke();
	fill(255);
	rect(680,0,110,750);
}




function mousePressed() {
	saveCanvas("sketch-", "png")
}

//Reference: https://www.youtube.com/watch?v=-YhzDuF_kLs