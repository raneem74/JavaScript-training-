function getVideo(i)
{
    return document.getElementsByTagName("video")[i];
}
var vid = getVideo(0);

document.getElementById("playBtn").onclick=function(){
    vid.play();
}

document.getElementById("stopBtn").onclick=function(){
    vid.pause();
    clearInterval(timer);
}

document.getElementById("fastBackBtn").onclick=function(){
    // var backSpeed=10;
    // vid.currentTime-=backSpeed;
    vid.currentTime=0;
    updateTime();
    updateTimeRange();
}

document.getElementById("BackBtn").onclick=function(){

    var backSpeed=2;
    vid.currentTime-=backSpeed;
    updateTime();
    updateTimeRange();
}

document.getElementById("forwardBtn").onclick=function(){
    var forwardSpeed=2;
    vid.currentTime+=forwardSpeed;
    updateTime();
    updateTimeRange();
}

document.getElementById("fastForwardBtn").onclick=function(){
    // var forwardSpeed=10;
    // vid.currentTime+=forwardSpeed;
    vid.currentTime=vid.duration;
    updateTime();
    updateTimeRange();
}

document.getElementById("voiceRange").oninput=function(){
    vid.volume=this.value/100;
}

document.getElementById("muteBtn").onclick=function(){
    vid.muted=!vid.muted;
}

document.getElementById("speedRange").oninput=function(){
    vid.playbackRate=this.value;
}

document.getElementById("fullBtn").onclick=function(){
    vid.requestFullscreen();
}

vid.onloadeddata=function(){
    document.getElementById("timeRange").min=0;
    document.getElementById("timeRange").max=this.duration;
}

document.getElementById("timeRange").oninput=function(){
    console.log(vid.duration);
    vid.currentTime =this.value;
    updateTime();
}

function updateTime()
{
    var currentTime=parseInt(vid.currentTime/60)+":"+ parseInt(vid.currentTime%60);
    var duration= parseInt(vid.duration/60)+":"+parseInt(vid.duration%60);
    document.getElementById("time").innerText=currentTime+"/"+duration;
}

function updateTimeRange(){
    document.getElementById("timeRange").value=vid.currentTime;
}

var timer;
vid.onplay = function (){
    timer = setInterval(function(){
        updateTime();
        updateTimeRange();
        // if (vid.paused)
        //     clearInterval(timer);
    },100)
    
}

vid.onended=function(){
    clearInterval(timer);
}

