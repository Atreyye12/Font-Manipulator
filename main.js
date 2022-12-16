function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('poses', gotPoses)
}

function modelLoaded(){
    console.log('Posenet Is Initialized!')
}

function draw() {
    background('#969A97');
    
      document.getElementById("square_side").innerHTML = "Width And Height of a Square will be = " + difference +"px";
      Text("respect is for those who deseve it not for those who demand it")
      fill('#F90093');
      stroke('#F90093');
      square(noseX, noseY, difference);
    }
    function gotPoses(results)
    {
      if(results.length > 0)
      {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +" noseY = " + noseY);
    
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    
        console.log("leftWristX  = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference);
      }
    }    

