let image0;
let image1;
let image2;
let image3;
let image4;
let image5;

//let color0, color1, color2, color3, color4, color5;

let white, r, g, b;

function preload()
{
    image0 = loadImage('images/full-moon/full moon -L1.png');
    image1 = loadImage('images/full-moon/full moon - L2.png');
    image2 = loadImage('images/full-moon/full moon - L3.png');
    image3 = loadImage('images/full-moon/full moon - L4.png');
    image4 = loadImage('images/full-moon/full moon - L5.png');
    image5 = loadImage('images/full-moon/full moon - L6.png');

    white = color('#fff');
    color0 = color('#000');
    color1 = color('#af282b');
    color2 = color('#be543d');
    color3 = color('#36505d');
    color4 = color('#36505d');
    color5 = color('#36505d');
}

function setup() {
  createCanvas(1315, 1857);
}

function draw() {

  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);

  var mixColors = r + g + b;

  background(220);
  

  tint(r);
  image(image0, 0, 0,);

  tint(g);
  image(image1, 0, 0,);


  tint(b);
  image(image2, 0, 0,);

  tint(r);
  image(image3, 0, 0,);

  image(image4, 0, 0,);
  image(image5, 0, 0,);


  
}