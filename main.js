nosex=0;
nosey=0;
lwrist=0;
rwrist=0;
diff=0;

function preload(){

}
function setup(){
    canvas = createCanvas(400, 400);
    canvas.position(800, 250);
    video=createCapture(VIDEO);
    video.position(100, 250);
    poseNet=ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function draw(){
    background('white');
    image(canvas, 0, 0, canvas.width, canvas.height)
    document.getElementById('wh').innerHTML=diff + " px";
    fill('orange');
    stroke('red');
    square(nosex, nosey, diff);
    
}

function modelLoaded(){
    console.log('The model has been loaded');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log('The nose x position is ' + nosex + ' and the y position of the nose is '+ nosey)
        lwrist=results[0].pose.leftWrist.x;
        rwrist=results[0].pose.rightWrist.x;
        diff=floor(lwrist-rwrist);
    }
}