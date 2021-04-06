function setup() {
	

	var c = createCanvas(1000, 1000); //width and height in pixels
	background(0); //255=white;0=black
	
	//(x,y,w,h)
	
	fill(255);
	ellipse(300,500,1000,1000);
	

	fill(255);
	rect(0,0,10,1000);
	fill(0);
	rect(10,0,10,1000);
	fill(255)
	rect(20,0,10,1000);
	fill(0);
	rect(30,0,10,1000);
	fill(255)
	rect(40,0,10,1000);
	fill(0);
	rect(50,0,10,1000);
	fill(255)
	rect(60,0,10,1000);
	fill(0);
	rect(70,0,10,1000);
	fill(255)
	rect(80,0,10,1000);
	fill(0);
	rect(90,0,10,1000);
	fill(255)
	rect(100,0,10,1000);
	fill(0);
	rect(110,0,10,1000);
	fill(255)
	rect(120,0,10,1000);
	fill(0);
	rect(130,0,10,1000);
	fill(255)
	rect(140,0,10,1000);
	fill(0);
	rect(150,0,10,1000);
	fill(255)
	rect(160,0,10,1000);
	fill(0);
	rect(170,0,10,1000);
	fill(255)
	rect(180,0,10,1000);
	fill(0);
	rect(190,0,10,1000);
	fill(255)
	rect(200,0,10,1000);
	fill(0);
	rect(210,0,10,1000);
	fill(255)
	rect(220,0,10,1000);
	fill(0);
	rect(230,0,10,1000);
	fill(255)
	rect(240,0,10,1000);
	fill(0);
	rect(250,0,10,1000);
	fill(255)
	rect(260,0,10,1000);
	fill(0);
	rect(270,0,10,1000);
	fill(255)
	rect(280,0,10,1000);


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