function setup() {
	canvas = createCanvas(640, 480);
	canvas.position(530, 310);
	video = createCapture(VIDEO);
	video.hide();

	tint_color = "";
}
function preload() {
	frame1=loadImage("frame1.jpg");
	frame2=loadImage("frame2.png")
	frame3=loadImage("frame3.jpg")
	frame4=loadImage("frame4.jpg")
	frame5=loadImage("frame5.png")
	frame6=loadImage("frame6.jpg")
}
i=0;
function f1() {
	i=Number(0);
}
function f2() {
	i=Number(1);
}
function f3() {
	i=Number(2);
}
function f4() {
	i=Number(3);
}
function f5() {
	i=Number(4);
}
function f6() {
	i=Number(5);
}
function draw() {
	x=[frame1,frame2,frame3,frame4,frame5,frame6];
	tint(tint_color);
	image(x[i], 0, 0, 640, 480);
	image(video, 155, 130, 340, 220);

}
function take_snapshot() {
	save("student_name.png");
}

function filter_tint() {
	tint_color = document.getElementById("color_name").value;
}
