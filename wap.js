var main = document.querySelector("#main");
var oLis = document.querySelectorAll("#list>li");
var winW = document.documentElement.clientWidth;
var winH = document.documentElement.clientHeight;
var mus=document.querySelector('#mus');
var mu1=document.querySelector('#mus1');
var desW = 640;
var desH = 960;
if (winW / winH <= desW / desH) {
    main.style.webkitTransform = "scale(" + winH / desH + ")";
} else {
    main.style.webkitTransform = "scale(" + winW / desW + ")";
}
[].forEach.call(oLis, function () {
    var oLi = arguments[0];
    oLi.index = arguments[1];
    oLi.addEventListener("touchstart", start, false);
    oLi.addEventListener("touchmove", move, false);
    oLi.addEventListener("touchend", end, false);

})
function start(e) {
    this.startTouch = e.changedTouches[0].pageY;
}
function move(e) {
    console.log(e);
    this.flag = true;
    var moveTouch = e.changedTouches[0].pageY;
    var pos = moveTouch - this.startTouch;
    var index = this.index;
    [].forEach.call(oLis,function(){
        if(arguments[1]!=index){
            arguments[0].style.display = "none";
        }
        arguments[0].className = "";
        arguments[0].firstElementChild.id="";

    })
    if (pos > 0) {
        this.prevSIndex = (index == 0 ? oLis.length - 1 : index - 1);
        var duration = -winH+pos;

    } else if (pos<0) {
        this.prevSIndex = (index == oLis.length-1 ? 0 : index + 1);
        var duration = winH+pos;
    }
    oLis[this.prevSIndex].style.display = "block";
    oLis[this.prevSIndex].style.webkitTransform = "translate(0,"+duration+"px)";
    oLis[this.prevSIndex].className="zIndex";
    oLis[index].style.webkitTransform = "scale("+(1-Math.abs(pos)/winH*1/2)+") translate(0,"+pos+"px)";
}
function end(e) {
    if(this.flag){
        oLis[this.prevSIndex].style.webkitTransform = "translate(0,0)";
        oLis[this.prevSIndex].style.webkitTransition = "0.7s";
        oLis[this.prevSIndex].addEventListener("webkitTransitionEnd", function () {
            this.style.webkitTransition = "";
            this.firstElementChild.id="a"+this.index;

        }, false)
    }
}
mus.onclick=function(){
    if(mu1.paused){
        mu1.play();
    }else{
        mu1.pause();
    }
}
document.addEventListener("touchmove",function(){

});
function show1(){
    oLis[0].firstElementChild.id='a0';
}
window.onload=function(){
    setTimeout(show1,500);
}