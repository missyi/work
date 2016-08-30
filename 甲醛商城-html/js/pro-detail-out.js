$(function(){
    // 详情中商品介绍和参数效果
    $('.b_con').eq(0).show();
    $('.pd-top ul li').click(function(e) {

        $(this).addClass('on').siblings().removeClass('on');
        $('.b_con').eq($(this).index()).show().siblings().hide();
    }); 
    var h = $('.pd-top').offset().top;
    $(window).scroll(function(){
        if($(window).scrollTop()>h){
            // alert(1);
            $('.pd-top').addClass('current');
        }else{
            $('.pd-top').removeClass('current');
        }   
    })



})