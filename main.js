status = ""

function preload(){
    video = createVideo("video.mp4")
}

function setup(){
    canvas = createCanvas(480,350)
    canvas.position(450,180);
    video.hide();
}

function start(){
objectdetector = ml5.objectDetector("cocossd",modalloaded)
document.getElementById("status").innerHTML = "Detecting objects";
}

function modalloaded(){
    console.log("modal has been loaded");
    status = true;
video.loop();
video.speed(1);
video.volume(0);
}

function gotresults(error,results){
    if(error){
        console.log(error)
    }
    if(results){
        console.log(results)
        objects = results
    }
}

function draw(){
    image(video,0,0,480,350);
    if(status != ""){
        objectdetector.detect(video,gotresults)
    for(i = 0 ; i<objects.length; i++){
       document.getElementById("status").innerHTML = "status = object detected";
       name = object[i].label;
       percent = floor(objects[i].confidence * 100)
       
       fill(red);
       Text(name + percent + " %", objects[i].x,objects[i].y)
       noFill();
       stroke(white)
        rect(objects[i].x ,objects[i].y , objects[i].w , objects[i].h)
       
                
    }
}
}

