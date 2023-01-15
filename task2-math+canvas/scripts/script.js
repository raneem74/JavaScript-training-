//get canvas and context to draw on 
var context=document.getElementById("canvas1").getContext("2d");

//draw triangle
context.beginPath();
context.fillStyle="red";
context.moveTo(20, 80);
context.lineTo(90, 80);
context.lineTo(90, 0);
context.closePath();
context.stroke();
context.fill();
context.closePath();

context.fillStyle = "black"
context.font="10pt Georgia";
context.lineWidth=2
context.fillText("a",50,95);
context.fillText("b",95,50);
context.fillText("c",20,50);




