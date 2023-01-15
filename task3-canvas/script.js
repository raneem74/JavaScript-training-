var canvas=document.getElementById("cv");
var context=canvas.getContext("2d");
var direction=false;
var timer,counter=0;

timer=setInterval(function(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(150, 150, 100, 0, Math.PI, direction);
    direction=!direction;
    context.fillStyle = "yellow";
    counter++;
    if(counter==10)
    {
        clearInterval(timer);
        context.arc(150, 150, 100, 0, Math.PI, direction);
    }
    context.stroke();
    context.fill();    
},500)
