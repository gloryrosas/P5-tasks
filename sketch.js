let image0;
let image1;
let image2;
let image3;
let image4;
let image5;

let white;
let r = 1;
let g = 1;
let b = 1;
let colors = ['#f6d18b', '#41b6d7', '#e28743'];;

function preload()
{
    image0 = loadImage('images/l1.png');
    image1 = loadImage('images/l2.png');
    image2 = loadImage('images/l3.png');
    image3 = loadImage('images/l4.png');
    image4 = loadImage('images/l5.png');
    image5 = loadImage('images/l6.png');

    randomColor = random(colors.length);
    var finalColor = floor(randomColor);
    randomColor = color(finalColor);

}

function setup() {
    createCanvas(1315, 1857);
    frameRate(3);
}

function draw() {
    
 r = random(0, 255);
 g = random(0, 255);
 b = random(0, 255);

  background(220);

  
  tint(r, g, b);
  image(image0, 0, 0,);
  noTint();

  tint(r, b);
  image(image1, 0, 0,);
  noTint();

  tint(r, g);
  image(image2, 0, 0,);
  noTint();
  
  tint(g);
  image(image5, 0, 0,);
  noTint();
  
  image(image3, 0, 0,);
  image(image4, 0, 0,);


  
}