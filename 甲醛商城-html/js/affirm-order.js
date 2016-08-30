$(function(){


    // 优惠券效果
    $('.privilege').click(function(){
        $('.grayDiv').addClass('gray-show');
        $('.privilege-div').addClass('show');
        $('body').addClass('body-over-h');
    })

    $(document).click(function(){
        $('.grayDiv').removeClass('gray-show');
        $('.popup').removeClass('show');
        $('body').removeClass('body-over-h');
    });

    $('.grayDiv').on('click',function(){
        $(this).removeClass('gray-show');
        $('.popDiv').removeClass('show');
    });

    $('.cd-condition .cd-get').click(function(){
        $('.grayDiv').removeClass('gray-show');
        $('.privilege-div').removeClass('show');
        $('body').removeClass('body-over-h');
        var _pri_txt = $(this).parent('.cd-condition').find('.cc-txt').html();
        $('.pri-txt').text(_pri_txt);

    })

    $('.privilege-div .cd-close').click(function(){
        $('.grayDiv').removeClass('gray-show');
        $('.privilege-div').removeClass('show');
        $('body').removeClass('body-over-h');
    });

    $(".privilege-div,.privilege").click(function(event){
        event.stopPropagation();
    });    

    // 发票效果
    $('.invoice').click(function(){
        $('.grayDiv').addClass('gray-show');
        $('.invoice-div').addClass('show');
        $('body').addClass('body-over-h');
    })

    $('.invoice-div .cd-close').click(function(){
        $('.grayDiv').removeClass('gray-show');
        $('.invoice-div').removeClass('show');
        $('body').removeClass('body-over-h');
    });

    $(".invoice-div,.invoice").click(function(event){
        event.stopPropagation();
    });

    $('.invoice-div ul li').not('.gray-1').click(function(){
        $(this).addClass('red').siblings().removeClass('red');
        $(this).children('.select').addClass('selected').end().siblings().children('.select').removeClass('selected');
        var _inv_txt = $(this).children('.ip-txt').html();
        $('.inv-txt').text(_inv_txt);
        fp();
    })
    // 不开发票时效果
    function fp(){
        var j_inv_txt = $('.inv-txt').html();
        if( j_inv_txt == "不开发票"){
            $('.invoice-tt').hide();
        }else{
            $('.invoice-tt').show();

        }    
    }
    fp();
    
    



})


