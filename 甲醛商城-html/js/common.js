// 禁止图片拖拽
document.ondragstart = function(){return false;}

$(function(){
	//字体
	function response(){
        rem = $(window).width() < 640 ?  $(window).width() / 320:2;
        //rem = $(window).width() / 320;
        $('html').css('font-size',(rem * 12 )+'px');
        }
        response();
        $(window).resize(function(){
            response();
    }); 

    //当浏览器窗口改变的时候，刷新页面
    // $(window).resize(function(){
    //     location.reload();
    // })
    

    $('input').on('click',function(){
        $(this).focus();
    })

    // 如果有弹窗出现，页面禁止滑动
    // document.addEventListener("touchmove", function (event) {
    //     if ($('.grayDiv').hasClass('gray-show')) { event.preventDefault(); } 
    // },false);
   
})

