let centerSize = 40;
let petalSize = 40;
let petalNum = 6;

function setup() {
	createCanvas(1000,1000);
	angleMode(DEGREES);
}

function draw() {
	background(255);
	//flower('pink','red', width/2, height/2);

	for (let i=0; i<15; i++) {
		flower('pink','red', 700, 110*i);
	}

	for (let i=0; i<15; i++) {
		flower('red','pink', 780, 110*i);
	}

	for (let i=0; i<15; i++) {
		flower('red','pink', 860, 110*i);
	}

	noStroke();
	fill('red');
	ellipse (500,800,550,550);

}

function flower(c1,c2,xPos,yPos) {
	//flower
	push();
	translate(xPos,yPos);
	noStroke();
	fill(c1);
	//fill(251,174,66);
	circle(0,0,centerSize);

	//flower petals
	for(let i=0; i<petalNum; i++) {
		angle = 60;
		rotate(angle);
		noStroke();
		fill(c2);
		//fill(196,15,61);
		circle(40,0,petalSize);
	}

	pop();
}




function mousePressed() {
	saveCanvas("sketch-", "png")
}

//Reference: https://www.youtube.com/watch?v=oJoPkndMsls