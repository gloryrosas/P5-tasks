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


let p0, p1, p2, p3, p4, p5;
let rangeSlider;
let colors;
let randomColor;

function preload()
{
    image0 = loadImage('images/l1.png');
    image1 = loadImage('images/l2.png');
    image2 = loadImage('images/l3.png');
    image3 = loadImage('images/l4.png');
    image4 = loadImage('images/l5.png');
    image5 = loadImage('images/l6.png');
}

function setup() {
    p0 = document.getElementById("palette-0");
    p1 = document.getElementById("palette-1");
    p2 = document.getElementById("palette-2");
    p3 = document.getElementById("palette-3");
    p4 = document.getElementById("palette-4");
    p5 = document.getElementById("palette-5");
    createCanvas(1315, 1857);

    
    rangeSlider = document.getElementById("slide-fR");
    frameRate(rangeSlider.value);
}



function draw() {
    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);
    
    
    background(220);

    p0.value = '#2596be';
    p1.value = '#873e23';
    
    colors = [color(p0.value), color(p1.value), color(p2.value), color(p3.value), color(p4.value), color(p5.value)];

    randomColor = random(colors[0], colors[1]);
    //console.log(randomColor);
    
  tint(randomColor, randomColor, randomColor);
  image(image0, 0, 0,);
  noTint();

  tint(randomColor, randomColor, randomColor);
  image(image1, 0, 0,);
  noTint();

  tint(randomColor, randomColor, randomColor);
  image(image2, 0, 0,);
  noTint();
  
  tint(randomColor, randomColor, randomColor);
  image(image5, 0, 0,);
  noTint();
  
  tint(randomColor, randomColor, randomColor);
  image(image3, 0, 0,);
  noTint();

  image(image4, 0, 0,);


  
}