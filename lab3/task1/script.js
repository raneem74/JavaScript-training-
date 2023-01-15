var canvas=document.getElementById("cv");
var context = canvas.getContext("2d");

var grd1 = context.createLinearGradient(500, 0, 500, 500);
grd1.addColorStop(0, "blue");
grd1.addColorStop(0.5, "white");
grd1.addColorStop(0.5, "green");
grd1.addColorStop(1, "white");

context.fillStyle = grd1;
context.strokeStyle = grd1;
context.beginPath();
context.fillRect(50, 50, 400, 400);

var grad3 = context.createLinearGradient(500, 0, 500, 500);
grad3.addColorStop("0", "black");
grad3.addColorStop("0.5" ,"transparent");


// Fill with gradient
context.strokeStyle = grad3;
context.strokeRect(125, 100, 250, 300);



