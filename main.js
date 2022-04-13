noseX = 0;
noseY = 0;
function preload() {
    mustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
    clownNose = loadImage('clown-nose.png');
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide(); 
    poseNet = ml5.poseNet(video, poseLoaded)
    poseNet.on('pose', gotPoses)
}   
function poseLoaded(){
    console.log("Posenet is Loaded but why are checking the console do your work");
}
function gotPoses(r){
     if(r.length > 0 ){
         noseX = r[0].pose.nose.x;
         noseY =  r[0].pose.nose.y;
         console.log(r);
         console.log("x = " + noseX );
         console.log("y = " + noseY)
     }
}
function draw(){
    image(video, 0, 0,300,300);
    image(mustache,noseX-20,noseY+7,50,15);
    image(clownNose,noseX-15,noseY-15,30,30);
    
}