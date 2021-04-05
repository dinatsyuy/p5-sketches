function setup() {
	

	var c = createCanvas(1000, 1000); //width and height in pixels
	background(255); //255=white;0=black
	
	//(x,y,w,h)


	fill(0);
	ellipse(500,500,800,800);
	rect(100,100,400,800);

	fill(255);
	ellipse(500,500,700,700);

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