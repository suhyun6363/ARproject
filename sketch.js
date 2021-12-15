var a;
var button;
var img01;
var img02;
var video;
var button;

var s;
var ss;

function preload() {
  img01 = loadImage("pocketmon.jpg");
  img02 = loadImage("ball.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
   
   button = createButton("START");
  button.position(50, 30);
  button.mousePressed(click);


  s = 0;
  ss = 0;
  a = 0;
  camera=createCapture(VIDEO);
  video = createCapture(VIDEO);
  video.hide();
  
}

function draw() {
  console.log(mouseX / width);
  background(0, 0, 0);
  image(img01, 0, 0, width, height);

  rect(0, s, width, height);
  if (ss === 1) {
    s = s - 50;
    a = a + 50;
    button.position(-500, 30);
    //image(video,500,500,100,50);

  }

  if (a > 2800) {

    image(img02, 0, height * 0.3, width * 0.35, height * 0.35);
    image(img02, (width * 1) / 3, height * 0.3, width * 0.35, height * 0.35);
    image(img02, (width * 2) / 3, height * 0.3, width * 0.35, height * 0.35);
    fill(200, 200, 200);
    textSize(0.05 * width);
    text("함께 할 포켓몬을 선택해보자!", width * 0.19, height * 0.7);
  }
}

function click() {
  ss = 1;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
