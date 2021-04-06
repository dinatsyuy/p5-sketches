let r = 1;
let g = 1;
let b = 1;

let vp = 1;
let hp = 1;

function setup() {
	createCanvas(1000, 1000);//width and height in pixels
	background(255);
	//255=white;0=black
	frameRate(20);
	noStroke();
	rectMode(CENTER);
	createLoop({duration:3, gif:true});
	
	//(x,y,w,h)


	

	fill(0);
	ellipse (400,500,1000,1000);
	fill(255);
	rect(0,0,800,2000);
	

}
	
function draw() {


	//r = random(0,255);
	//g = random(0,255);
	//b = random(0,255);
	fill(0);
	rect(50 * hp,50 * vp,100,100);

	r = random(255);
	//g = random(0,255);
	//b = random(0,255);
	fill(r);
	ellipse(50 * hp,50 * vp,70);

	hp = hp + 2;
	if (hp > 8){
		vp = vp + 2;
		hp = 1;}


}

//Reference: https://www.youtube.com/watch?v=y4h9GSYUcmE&ab_channel=ShaunWegscheid


	


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