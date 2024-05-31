




function setup()
{
    canvas=createCanvas(550,550);
    canvas.position(720,170);
    video=createCapture(VIDEO);
    video.size(550,500);

    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw()
{
    background("#969A97");
    textSize(50,80);
}

function modelLoaded()
{
    console.log("poseNet Is Initilized!!!");
}

function gotPoses(results)
{
    if(results.length>0)
        {
            console.log(results);
        }
}






























































