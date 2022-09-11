let image0;
let image1;
let image2;
let image3;
let image4;
let image5;

let r = 1;
let g = 1;
let b = 1;


let p0, p1, p2, p3, p4, p5;

addEventListener("load", function(e) {
    const send = document.getElementById("sendButton");
    const randomSend = document.getElementById("sendButton2");
    const presetSend = document.getElementById("sendButton3");

    send.addEventListener('click', (e) => {
        e.preventDefault();
        DrawByAction();
    });
    
    randomSend.addEventListener('click', (e) => {
        e.preventDefault();
        RandomDraw();
    });
    
    presetSend.addEventListener('click', (e) => {
        e.preventDefault();
        DefaultDraw();
    });

})

function preload()
{
    image0 = loadImage('images/l0.png');
    image1 = loadImage('images/l1.png');
    image2 = loadImage('images/l2.png');
    image3 = loadImage('images/l3.png');
    image4 = loadImage('images/l4.png');
    image5 = loadImage('images/l5.png');
}

function setup() {
    p0 = document.getElementById("palette-0");
    p1 = document.getElementById("palette-1");
    p2 = document.getElementById("palette-2");
    p3 = document.getElementById("palette-3");
    p4 = document.getElementById("palette-4");
    p5 = document.getElementById("palette-5");
    var myCanvas = createCanvas(595, 877);
    myCanvas.parent("mainC");
}



/*function draw() {
    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);
    
    
    background(220);
    
    colors = [color(p0.value), color(p1.value), color(p2.value), color(p3.value), color(p4.value), color(p5.value)];

    randomColor = random(colors);
    
}*/

function DrawByAction()
{

  tint(color(p0.value));
  image(image0, 0, 0,);
  noTint();

  tint(color(p1.value));
  image(image1, 0, 0,);
  noTint();

  tint(color(p2.value));
  image(image2, 0, 0,);
  noTint();
  
  
  tint(color(p3.value));
  image(image3, 0, 0,);
  noTint();
  
  tint(color(p4.value));
  image(image4, 0, 0,);
  noTint();

  tint(color(p5.value));
  image(image5, 0, 0,);
}

function RandomDraw()
{
    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);

  tint(r, g, b);
  image(image0, 0, 0,);
  noTint();

  tint(r, g);
  image(image1, 0, 0,);
  noTint();

  tint(r);
  image(image2, 0, 0,);
  noTint();
  
  
  tint(b);
  image(image3, 0, 0,);
  noTint();
  
  tint(g);
  image(image4, 0, 0,);
  noTint();

  tint(g, b);
  image(image5, 0, 0,);
}

function DefaultDraw()
{
    const defaultTemplate0 = [color('#787878'), color('#3d54a5'), color('#e6c821'), color('#ed1c24'), color('#000000'), color('#7bc143')];

    tint(defaultTemplate0[0]);
    image(image0, 0, 0,);
    noTint();

  tint(defaultTemplate0[1]);
  image(image1, 0, 0,);
  noTint();

  tint(defaultTemplate0[2]);
  image(image2, 0, 0,);
  noTint();
  
  tint(defaultTemplate0[3]);
  image(image3, 0, 0,);
  noTint();
  
  tint(defaultTemplate0[4]);
  image(image4, 0, 0,);
  noTint();
  
  tint(defaultTemplate0[5]);
  image(image5, 0, 0,);
}