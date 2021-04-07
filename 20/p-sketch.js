let angle = 0;

function setup() {
	createCanvas(1000,1000);
	createLoop({duration:3, gif:true});
	
}

function draw() {
 	background(0,10);

 	fill(255);
	ellipse(500,500,800,800);
	rect(100,100,400,800);

 	translate(500,500);
 	noStroke();
 	fill(0);
 	let r = sin(angle) * 350;
 	circle(0,0,r*2);

 


 	angle += 0.04;
}



function mousePressed() {
	saveCanvas("sketch-", "png")
}

//Reference: https://www.youtube.com/watch?v=oJoPkndMsls