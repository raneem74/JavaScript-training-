var canvas=document.getElementById("cv");
var context=canvas.getContext("2d");
var position=1;
var timer;
timer=setInterval(function(){
    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(position++, position++);
    context.lineWidth=4;
    context.font="10pt Georgia";
    context.strokeStyle = "red";
    context.stroke();
    context.fill();
    context.closePath();
    if(position>canvas.width)
    {
        clearInterval(timer);
        window.alert("animation end")
    }
},10)