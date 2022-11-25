function preload() {
}
    
function setup() {
canvas=createCanvas(600, 600);
canvas.position(70, 200);
video= createCapture(VIDEO);
video.hide();

tint_color="";
}

function draw() {
image(video, 150 , 150, 300, 300);
fill("green");
stroke(168,10,10);
rect( 100, 100, 400, 30 );
rect( 100, 500, 400, 30 );
rect( 100, 100, 30, 400 );
rect( 500, 100, 30, 400 );
fill("red");
stroke(168,10,10);
circle(100, 100, 100);
circle(500, 100, 100);
circle(100, 500, 100);
circle(500, 500, 100);
}

function take_snapshot() {
save('student_name.png');
}

