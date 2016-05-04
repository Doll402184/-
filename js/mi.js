
/*过界加载*/
~function(){
    var $staImg=$('#staImg').offset().top;
   var $hard=$('#hard').offset().top;
    var $hot=$('#hot').offset().top;
    var $hot1=$('#hot').offset().top;
    var $hot2=$('#hot').offset().top;
    var html=null;
    var W= (document.documentElement.clientHeight || document.body.clientHeight) + (document.documentElement.scrollTop || document.body.scrollTop);
  if(W-$staImg<=0){
      html =template('test', star);
      document.getElementById('staImg').innerHTML = html;
  }
    if(W-$hard<=0){
        html = template('testH', hard);
        document.getElementById('hard').innerHTML = html;
    }
    if(W-$hot<=0){
        html = template('testh2', hot);
        document.getElementById('hot').innerHTML = html;
    }
    if(W-$hot1<=0){
        html = template('testh2', hot);
        document.getElementById('hot1').innerHTML = html;
    }
    if(W-$hot2<=0){
        html = template('testh2', hot);
        document.getElementById('hot2').innerHTML = html;
    }
}()
/*导航*/
~(function(){
    var $nav = $(".nav ul");
    var $menu = $(".menu");
    var _timer = null;
    $nav.on("mouseenter","li.has-child",function(){
        var me = $(this);
        //if( me.hasClass("no-child") ) return;
        clearTimeout(_timer);
        $menu.slideDown(300);
    }).on("mouseleave","li.has-child",function(){
        clearTimeout(_timer);
        _timer = setTimeout(function(){
            $menu.slideUp(300);
        },100)
    })
    $menu.mouseenter(function(){
        clearTimeout(_timer);
    }).mouseleave(function(){
        clearTimeout(_timer);
        _timer = setTimeout(function(){
            $menu.slideUp(300);
        },100)
    })
})()
/*tip*/
~function(){
    var $li=$(".tabL .tip") ;
    var $ul=$('.tip a ul');
    var timer=null;
    $li.each(function(){
        $(this).on('mouseenter',function(e){
            var this_= $(this);
            timer=setTimeout(function(){
                this_.find('ul').fadeIn([300]);
            },200);
        })
        $(this).on('mouseleave',function(){
            clearTimeout(timer);
            var this_=$(this);
            timer=setTimeout(function(){
                this_.find('ul').fadeOut([300]);
            },200);
        })
    })
}()
/*轮播图*/
~function(){
    var  $banner=$('.banner');
    var $inner=$('.inner');
    var $lis=$('.inner li');
    var $tip=$(".tip2 li");
    var $btl=$('.btnL');
    var $btr=$('.btnR');
    var step=0;
    var timer=null;
    timer=setInterval(function () {
        gogo();
    },2000)
    function gogo(){
            step++;
            if(step>=5){
                step=0;
            }
            $lis.each(function(){
                $(this).hide();
            })
            $lis.eq(step).fadeIn('200');
            $tip.each(function(){
                $(this).removeClass('go');
            })
            $tip.eq(step).addClass('go');
    };
    $inner.on('mouseenter',function(){
        clearInterval(timer);
    })
    $inner.on('mouseleave',function(){
        gogo();
    })
    function tip(){
        $tip.each(function(){
            $(this).on('click',function(){
                $tip.each(function(){
                    $(this).removeClass('go');
                })
                $(this).addClass('go');
                $lis.each(function(){
                    $(this).hide();
                })
                $lis.eq($(this).index()).fadeIn('300');
            })
        })
    }
    tip();
    $btr.on('click',function(){
        gogo();
    })
    $btl.on('click',function(){
       step--;
        if(step<=0){
            step=5;
        }
        $lis.each(function(){
            $(this).hide();
        })
        $lis.eq(step).fadeIn('300');
        $tip.each(function(){
            $(this).removeClass('go');
        })
        $tip.eq(step).addClass('go');
    })
}()
/*搜索框*/
!function(){
    var $inpt=$('.sechI');
    var $showdown=$('.showdown');
    var $sechA=$('.serchA');
    var $sub=$('.sub');
    $inpt.on('focus',function(){
        $inpt.addClass('sechI1');
        $showdown.show();
        $sechA.hide();
        $sub.addClass('subf');
    })
    $inpt.on('blur',function(){
        $inpt.removeClass('sechI1');
        $showdown.hide();
        $sechA.show();
        $sub.removeClass('subf');
    })
}();
/*鼠标经过动态改变模版数据*/
!function(){
    var bind = template('menuM', menu0);
    document.getElementById('menu').innerHTML = bind;
    var $tab=$('.has-child');
    var $menu=$('.menu');
    $tab.each(function(){
        $(this).on('mouseover',function(){
            var tep='menu'+$(this).index();
            tep=eval(tep);
            html = template('menuM',tep);
            document.getElementById('menu').innerHTML = html;
        })
    })

}()
/*明星单品点击切换效果*/
!function () {
    var $staImg=$('#staImg');
    var $stl=$('#stl');
    var $str=$('#str');
    $str.on('click',function(){
        $staImg.animate({left:-1226},1000);
    })
    $stl.on('click',function(){
        $staImg.animate({left:-0},1000);
    })

}()