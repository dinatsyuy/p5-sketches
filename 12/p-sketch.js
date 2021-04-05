function setup() {
	

	var c = createCanvas(1000, 1000); //width and height in pixels
	background(255); //255=white;0=black
	
	//(x,y,w,h)
	
	stroke(0);
	noFill();
	strokeWeight(4);

	for (i=0;i<40;i++) {
		var ellipseSize = 1000+(i*60);
		ellipse(400,500,ellipseSize,ellipseSize)
	}

	noStroke();
	fill(255);
	rect (0,0,420,1000);

	stroke(0);
	noFill();
	strokeWeight(4);

	for (i=0;i<300;i++) {
		var rectSize = 10+(i*15)
		rect (-10,-10,rectSize,1100)
	}

	stroke(0);
	noFill();
	strokeWeight(4);

	for (i=0;i<300;i++) {
		var rectSize = 10+(i*15)
		rect (-680,-10,1100,rectSize)
	}


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