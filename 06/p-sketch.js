function setup() {
	

	var c = createCanvas(1000, 1000); //width and height in pixels
	background(255); //255=white;0=black
	
	//(x,y,w,h)
	
	var i = 0;
	stroke(0);
	strokeWeight(5);
	noFill();

	while(i<300) {
		rect(570,20*i,10,10);
		i=i+1;
	}

	var i = 0;
	stroke(0);
	strokeWeight(5);
	noFill();

	while(i<300) {
		rect(590,20*i,10,10);
		i=i+1;
	}

	var i = 0;
	stroke(0);
	strokeWeight(5);
	noFill();

	while(i<300) {
		rect(610,20*i,10,10);
		i=i+1;
	}

	var i = 0;
	stroke(0);
	strokeWeight(5);
	noFill();

	while(i<300) {
		rect(630,20*i,10,10);
		i=i+1;
	}

	var i = 0;
	stroke(0);
	strokeWeight(5);
	noFill();

	while(i<300) {
		rect(650,20*i,10,10);
		i=i+1;
	}

	var i = 0;
	stroke(0);
	strokeWeight(5);
	noFill();

	while(i<300) {
		rect(670,20*i,10,10);
		i=i+1;
	}

	var i = 0;
	stroke(0);
	strokeWeight(5);
	noFill();

	while(i<300) {
		rect(690,20*i,10,10);
		i=i+1;
	}


	stroke(0);
	strokeWeight(6);

	for (i=0;i<16;i++) {
		var ellipseSize = 20+(i*30);
		ellipse(400,770,ellipseSize,ellipseSize)
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