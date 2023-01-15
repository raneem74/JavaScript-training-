function init(){
document.getElementById("text").style.fontSize="50px";

var redVal=document.getElementById("red").value;
var greenVal=document.getElementById("green").value;
var blueVal=document.getElementById("blue").value;

document.getElementById("red").oninput=function(){
    redVal=this.value;
    document.getElementById("text").style.color="rgb("+redVal+","+greenVal+","+blueVal+")";
};

document.getElementById("green").oninput=function(){
    greenVal=this.value;
    document.getElementById("text").style.color="rgb("+redVal+","+greenVal+","+blueVal+")";
};

document.getElementById("blue").oninput=function(){
    blueVal=this.value;
    document.getElementById("text").style.color="rgb("+redVal+","+greenVal+","+blueVal+")";
};

};