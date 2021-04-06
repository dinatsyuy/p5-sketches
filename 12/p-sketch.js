let x=0

function setup() {
	
	var c = createCanvas(1000, 1000); //width and height in pixels
	background(255); //255=white;0=black
	createLoop({duration:3, gif:true});
	
	//(x,y,w,h)
}

function draw() {
	background(255);

	

	for(let i=0;i<800;i+=10){
	noFill();
	stroke(192,24,35);
	strokeWeight(4);
	ellipse(500,500,i,i);
	
	

	noFill();
	stroke(192,24,35);
	strokeWeight(5);
	rect(100,105,400,790);


	stroke('blue');
	strokeWeight(3);
	ellipse(x,500,600-i,600,-i);

	}
	x=x+3
}

//Reference: https://www.youtube.com/watch?v=62SbexSgQIw&ab_channel=ByteSizeCoding
	




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