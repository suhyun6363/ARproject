var img01;
var img02;
var s = 0;
var counter = 0;
var timer = 0;


function preload() {
  img01 = loadImage("pocketmon.jpg");
  img02 = loadImage("ball.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (s = s - 30) {
    image(img01, 0, 0, width, height);
      image(img02, 0, height * 0.3, width * 0.35, height * 0.35);
    image(img02, (width * 1) / 3, height * 0.3, width * 0.35, height * 0.35);
    image(img02, (width * 2) / 3, height * 0.3, width * 0.35, height * 0.35);
    fill(200, 200, 200);
    textSize(0.05 * width);
    text("함께 할 포켓몬을 선택해보자!", width * 0.19, height * 0.7);
    rect(0, s, width, height);
 
   if(counter === 1){
    timer = timer + 1;
    console.log(timer);
  if(timer > 800){
    window.location.href = "ar.html";
      			}
   		}
	}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
  counter = 1;
window.location.href = "ar.html";
}

