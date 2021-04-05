function setup() {
	

	var c = createCanvas(1000, 1000); //width and height in pixels
	background(255); //255=white;0=black
	
	//(x,y,w,h)
	
	fill(0);
	rect(0,0,300,1000);
	rect(700,0,300,1000);
	rect(0,0,1000,50);
	rect(0,950,1000,50);
	rect(650,50,50,50);
	rect(650,900,50,50);

	fill(255);
	noStroke(255);
	rect(950,0,50,50)
	rect(950,950,50,50);
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