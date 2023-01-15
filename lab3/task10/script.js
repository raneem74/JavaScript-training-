const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

var startAngle = 0.25,endAngle=1.75,direction=1;
context.fillStyle = "red";
setInterval(function(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
  context.arc(100, 100, 80, startAngle *  Math.PI, endAngle * Math.PI);
  context.lineTo(100, 100);
  context.fill();
  startAngle-=0.02*direction;
  endAngle+=0.02*direction; 
  if(endAngle>2||endAngle<1.75)
    direction*=-1;
} ,100)
