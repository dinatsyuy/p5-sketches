var circles = [];

function setup() {

	var c = createCanvas(1000, 1000); //width and height in pixels
	background(255);
	//(x,y,w,h)

	var overlapping = false;

	for (var i = 0; i < 25; i++) {
		var circle = {
			x: random(width),
			y: random(height),
			r: 36
		};

		var overlapping = false;

		for (var j = 0; j < circles.length; i++) {
			var other = circles[j];
			var d = dist(circle.x, circle.y, other.x, other.y);
			if (d < circle.r + other.r) {
				overlapping = true;
			}
		}

		if (!overlapping) {
			circles.push(circle);
		}

		for (var i = 0; i < circles.length; i++) {
		fill(192,24,35);
		noStroke();
		ellipse(circles[i].x, circles[i].y, circles[i].r*2, circles[i].r*2);
		}

	}
	
	
}




function draw() {

}




function mousePressed() {
	saveCanvas("sketch-", "png")
}

//Reference: https://www.youtube.com/watch?v=XATr_jdh-44&t=899s&ab_channel=TheCodingTrain