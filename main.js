status2="";
object_name="input";

function preload()
{
    
}

function setup()
{
    canvas = createCanvas(480,380);
    canvas.center();
    video = createVideo();
    video.size(480,380);
    video.hide();
}

function draw()
{
    image(video,0,0,480,380);
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects";
}

function modelLoaded()
{
    console.log("Model Loaded!")
    status=true;
}