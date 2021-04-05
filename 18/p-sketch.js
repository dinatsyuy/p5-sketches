function setup() {
	

	var c = createCanvas(1000, 1000); //width and height in pixels
	background(255); //255=white;0=black
	
	//(x,y,w,h)


	

	strokeWeight(10);
	
	noFill();
	arc(500, 500, 480, 480, 250, HALF_PI);
	arc(500, 500, 520, 520, 300, HALF_PI);
	arc(500, 500, 560, 560, 100, HALF_PI);
	arc(500, 500, 600, 600, 300, HALF_PI);
	arc(500, 500, 640, 640, 250, HALF_PI);
	arc(500, 500, 680, 680, 300, HALF_PI);
	arc(500, 500, 720, 720, 200, HALF_PI);
	arc(500, 500, 760, 760, 300, HALF_PI);
	arc(500, 500, 800, 800, 250, HALF_PI);
	//p5js.org,Reference, arc()

	for (i=20;i<200;i++) {
		line(200+i, 100, 200+i, 900);}

	stroke(255);
	strokeWeight(9);
	line(270,150,270,850);

	line(350,150,350,850);


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