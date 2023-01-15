var canvas=document.getElementById("cv");
var context = canvas.getContext("2d");

var grd1 = context.createRadialGradient(270, 250, 200, 290, 150, 0);
grd1.addColorStop(0, "blue");
grd1.addColorStop(1, "white");    

context.fillStyle = grd1;
context.beginPath();
context.arc(250, 250, 200, 0, 2 * Math.PI);
context.fill();


var grad2 = context.createRadialGradient(270, 250, 150, 370, 470, 0);
grad2.addColorStop(0, "blue")
grad2.addColorStop(1, "white")
context.fillStyle = grad2;
context.beginPath();
context.arc(250, 250, 130, 0, 2 * Math.PI);
context.fill();

context.fillStyle = "white";
context.font = "200px Arial";
context.fillText("N", 200, 300);





