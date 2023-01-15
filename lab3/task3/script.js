var canvas=document.getElementById("cv");
var context = canvas.getContext("2d");

var img = new Image();
img.src = "WhatsApp Image 2023-01-01 at 3.11.48 PM.jpeg";
img.onload = function() {

context.drawImage(img, 0, 0,700,500);
context.font = "30px Arial";
context.shadowOffsetX = 3;
context.shadowOffsetY = 3;
context.shadowColor = "rgba(255,255,255,0.8)";
context.shadowBlur = 1;
context.fillText("Me looking at my bank account after a \"treat yourself \" spree", 0, 450);
}




