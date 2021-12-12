function preload(){
}

function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide()
    
}


function draw(){
    image(video,155,160,200,200);
    circle(30, 30, 50);
    circle(470, 30, 50);
    circle(30, 470, 50);
    circle(470, 470, 50);
    rect(450, 55, 40, 390);
    rect(55, 450, 390, 40);
    rect(10, 55, 40, 390);
    rect(55, 10, 390, 40);
  
}

function take_snapshot(){
    save("selfie.png");
}