let angle = 0;
let angleV = 0.1;

function setup() {
	createCanvas(1000,1000);
	createLoop({duration:3, gif:true});
	
}

function draw() {
 	background(0);
 	translate(700,0);
 	fill(255);

 	let y = map(sin(angle), -1, 1, 0, 1000);
 	stroke(255);
 	line(0,0,200,y);
 	circle(0,y,400);


 	angle += 0.08;
}



function mousePressed() {
	saveCanvas("sketch-", "png")
}

//Reference: https://www.youtube.com/watch?v=oJoPkndMsls