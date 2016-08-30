$(function(){

    //点击其他方式登录
    $('.otherwise-login').click(function(){
        $('.grayDiv').addClass('gray-show');
        $('.popDiv').addClass('show');
    });
   
    $(document).on('click',function(){
        $('.grayDiv').removeClass('gray-show');
        $('.popDiv').removeClass('show');
    });
    
    $('.grayDiv').on('click',function(){
        $(this).removeClass('gray-show');
        $('.popDiv').removeClass('show');
    });
    $(".popDiv,.otherwise-login").click(function(event){
        event.stopPropagation();
    });

    // 注册时的  一键删除手机号码
    $('.rc-input .delete').on('click',function(){
        // alert(1);
        $('.ipt-phone').val('');
    });

})


