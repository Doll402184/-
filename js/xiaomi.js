~function(){
   var oul= document.getElementById('tabL');
    var olis=oul.getElementsByTagName('li');
    var tabR=document.getElementById('tabR');
    for(var i=0;i<olis.length;i++){
        var oli=olis[i];
        oli.onmouseenter=function(){
            for(var i=0;i<olis.length;i++){
                olis[i].clsaaName='';
            }
            this.className='selectL';
            tabR.style.display='block';
        }
        oli.onmouseleave=function(){
            this.className='';
            tabR.style.display='none';
        }
    }
}()
~function(){
    var step = 0, autoTimer = null, interval = 2000;
    var banner = document.getElementById("banner"), inner = document.getElementById("banImg"), tip = document.getElementById("tip"), tipList = tip.getElementsByTagName("li"), btnLeft = document.getElementById("tipL"), btnRight = document.getElementById("tipR");
    function changeTip() {
        var tempStep = step;
        tempStep >= tipList.length ? tempStep = 0 : null;
        for (var i = 0; i < tipList.length; i++) {
            tipList[i].className = i === tempStep ? "bg" : null;
        }
    }

    autoTimer = window.setInterval(autoMove, interval);
    function autoMove() {
        step++;
        if (step > 5) {
            step = 1;
            inner.style.left = 0;
        }
        animate(inner, {left: -step * 1226}, 500);
        changeTip();
    }

    banner.onmouseenter = function () {
        window.clearInterval(autoTimer);
        btnLeft.style.display = btnRight.style.display = "block";
    };

    banner.onmouseleave = function () {
        autoTimer = window.setInterval(autoMove, interval);
        btnLeft.style.display = btnRight.style.display = "none";
    };

    tipMove();
    function tipMove() {
        for (var i = 0; i < tipList.length; i++) {
            var cur = tipList[i];
            cur.index = i;
            cur.onclick = function () {
                step = this.index;
                animate(inner, {left: -step * 1226}, 500, 3);
                changeTip();
            }
        }
    }
    btnLeft.onclick = function () {
        step--;
        if (step < 0) {
            step = 4;
            inner.style.left = -1226 + "px";
        }
        animate(inner, {left: -step * 1226}, 500);
        changeTip();
    };

    btnRight.onclick = autoMove;
}()
~function(){
    var step = 0, autoTimer = null, interval = 3000;
    var banner = document.getElementById("starbtt"), inner = document.getElementById("strlist"), btnLeft = document.getElementById("a3L"), btnRight = document.getElementById("a3R");
    autoTimer = window.setInterval(autoMove, interval);
    function autoMove() {
        step++;
        if (step > 2) {
            step = 1;
            inner.style.left = 0;
        }
        animate(inner, {left: -step * 1240}, 1000);
    }
    banner.onmouseenter = function () {
        window.clearInterval(autoTimer);
    };

    banner.onmouseleave = function () {
        autoTimer = window.setInterval(autoMove, interval);
    };
    btnLeft.onclick = function () {
        window.clearInterval(autoTimer);
        step--;
        if (step < 0) {
            step = 2;
            inner.style.left = -1226 + "px";
        }
        animate(inner, {left: -step * 1240}, 1000);
        autoTimer = window.setInterval(autoMove, interval);
    };

    btnRight.onclick = autoMove;
}()
~function(){
    var step = 0;
    var banner = document.getElementById("cont"), inner = document.getElementById("book"), tip = document.getElementById("tip1"), tipList = tip.getElementsByTagName("li"), btnLeft = document.getElementById("conL"), btnRight = document.getElementById("conR");
    function changeTip() {
        var tempStep = step;
        tempStep >= tipList.length ? tempStep = 0 : null;
        for (var i = 0; i < tipList.length; i++) {
            tipList[i].className = i === tempStep ? "tipsel" : null;
        }
    }

    function autoMove() {
        step++;
        if (step > 4) {
            step = 1;
            inner.style.left = 0;
        }
        animate(inner, {left: -step * 297}, 500);
        changeTip();
    }

    tipMove();
    function tipMove() {
        for (var i = 0; i < tipList.length; i++) {
            var cur = tipList[i];
            cur.index = i;
            cur.onclick = function () {
                step = this.index;
                animate(inner, {left: -step * 297}, 500, 3);
                changeTip();
            }
        }
    }
    btnLeft.onclick = function () {
        step--;
        if (step < 0) {
            step = 3;
            inner.style.left = -297 + "px";
        }
        animate(inner, {left: -step * 297}, 500);
        changeTip();
    };

    btnRight.onclick = autoMove;
}()
~function(){
    var step = 0;
    var banner = document.getElementById("cont1"), inner = document.getElementById("book1"), tip = document.getElementById("tip11"), tipList = tip.getElementsByTagName("li"), btnLeft = document.getElementById("conL1"), btnRight = document.getElementById("conR1");
    function changeTip() {
        var tempStep = step;
        tempStep >= tipList.length ? tempStep = 0 : null;
        for (var i = 0; i < tipList.length; i++) {
            tipList[i].className = i === tempStep ? "tipsel" : null;
        }
    }

    function autoMove() {
        step++;
        if (step > 4) {
            step = 1;
            inner.style.left = 0;
        }
        animate(inner, {left: -step * 297}, 500);
        changeTip();
    }

    tipMove();
    function tipMove() {
        for (var i = 0; i < tipList.length; i++) {
            var cur = tipList[i];
            cur.index = i;
            cur.onclick = function () {
                step = this.index;
                animate(inner, {left: -step * 297}, 500, 3);
                changeTip();
            }
        }
    }
    btnLeft.onclick = function () {
        step--;
        if (step < 0) {
            step = 3;
            inner.style.left = -297 + "px";
        }
        animate(inner, {left: -step * 297}, 500);
        changeTip();
    };

    btnRight.onclick = autoMove;
}()
~function(){
    var step = 0;
    var banner = document.getElementById("cont2"), inner = document.getElementById("book2"), tip = document.getElementById("tip12"), tipList = tip.getElementsByTagName("li"), btnLeft = document.getElementById("conL2"), btnRight = document.getElementById("conR2");
    function changeTip() {
        var tempStep = step;
        tempStep >= tipList.length ? tempStep = 0 : null;
        for (var i = 0; i < tipList.length; i++) {
            tipList[i].className = i === tempStep ? "tipsel" : null;
        }
    }

    function autoMove() {
        step++;
        if (step > 4) {
            step = 1;
            inner.style.left = 0;
        }
        animate(inner, {left: -step * 297}, 500);
        changeTip();
    }

    tipMove();
    function tipMove() {
        for (var i = 0; i < tipList.length; i++) {
            var cur = tipList[i];
            cur.index = i;
            cur.onclick = function () {
                step = this.index;
                animate(inner, {left: -step * 297}, 500, 3);
                changeTip();
            }
        }
    }
    btnLeft.onclick = function () {
        step--;
        if (step < 0) {
            step = 3;
            inner.style.left = -297 + "px";
        }
        animate(inner, {left: -step * 297}, 500);
        changeTip();
    };

    btnRight.onclick = autoMove;
}()
~function(){
    var step = 0;
    var banner = document.getElementById("cont3"), inner = document.getElementById("book3"), tip = document.getElementById("tip13"), tipList = tip.getElementsByTagName("li"), btnLeft = document.getElementById("conL3"), btnRight = document.getElementById("conR3");
    function changeTip() {
        var tempStep = step;
        tempStep >= tipList.length ? tempStep = 0 : null;
        for (var i = 0; i < tipList.length; i++) {
            tipList[i].className = i === tempStep ? "tipsel" : null;
        }
    }

    function autoMove() {
        step++;
        if (step > 4) {
            step = 1;
            inner.style.left = 0;
        }
        animate(inner, {left: -step * 297}, 500);
        changeTip();
    }

    tipMove();
    function tipMove() {
        for (var i = 0; i < tipList.length; i++) {
            var cur = tipList[i];
            cur.index = i;
            cur.onclick = function () {
                step = this.index;
                animate(inner, {left: -step * 297}, 500, 3);
                changeTip();
            }
        }
    }
    btnLeft.onclick = function () {
        step--;
        if (step < 0) {
            step = 3;
            inner.style.left = -297 + "px";
        }
        animate(inner, {left: -step * 297}, 500);
        changeTip();
    };

    btnRight.onclick = autoMove;
}()
~function(){
    var imgs=document.getElementsByTagName('img');

    function init(){
        for(var i=0;i<imgs.length;i++){
            var cur=imgs[i];
            !function(cur){
                if(!cur.loaded){
                    var curtop=cur.offsetTop;
                    var winBottm=(document.documentElement.clientHeight||document.body.clientHeight)+(document.documentElement.scrollTop||document.body.scrollTop);
                    if(curtop<winBottm){
                        var boxImg=new Image;
                        boxImg.src=cur.getAttribute('trueSrc');
                        boxImg.onload=function(){
                            cur.src=boxImg.src;
                            cur.loaded=true;
                        }
                    }
                }
                var boxImg=new Image;
                boxImg.src=cur.getAttribute('trueSrc');
                boxImg.onload=function(){
                    cur.src=boxImg.src;
                    cur.loaded=true;
                }(cur);

            }
        }
        init();
        window.setTimeout(init,500)
        window.onscroll=init;
    }
}()