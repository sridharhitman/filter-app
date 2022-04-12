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
         console.log(r);
         console.log("x = " + r[0].pose.nose.x);
         console.log("y = " + r[0].pose.nose.y)
     }
}
function draw(){
    image(video, 0, 0,300,300);
}