function setup() {
	

	var c = createCanvas(1000, 1000) //width and height in pixels
	background(0); //255=white;0=black
	ellipse(450,450,100,100); //(left,right,height,width)
	nostroke(25);
	rect(500,500,100,100);
	fill(0)
	rect(500,500,100,100);
	ellipse(450,450,100,100);
	fill(255,0,0)

	var i = 0;

	while(i<100) {
		//the "while" can be "for" as well: for(var i = 0;i<100; i++)
		//add code here
		//e.g. ellipse(10*i,10*i,250,250);
		//e.g. ellipse(random(1000),random(1000),250,250);
		//e.g. fill(random(255))
		i=i+1;
	}
}


function mousePressed() {
	saveCanvas("sketch-01", "png")


function draw() {
	stroke(0)
	fill(0)
	//nofill()
	//rRadius = random(50)+50
	ellipse(mouseX,mouseY,250,250);
	//ellipse(mouseX,mouseY,rRadius,rRadius);
}