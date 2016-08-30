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

    // 详情中点击优惠券效果
    $('.coupon').click(function(){
        $('.grayDiv').addClass('gray-show');
        $('.coupon-div').addClass('show');
        $('body').addClass('body-over-h');
    })

    $('.coupon-div .cd-close').click(function(){
        $('.grayDiv').removeClass('gray-show');
        $('.coupon-div').removeClass('show');
        $('body').removeClass('body-over-h');
    });

    $(".coupon-div,.coupon").click(function(event){
        event.stopPropagation();
    });

    // 详情中点击包邮效果
    $('.pinkage').click(function(){
        $('.grayDiv').addClass('gray-show');
        $('.privilege-div').addClass('show');
        $('body').addClass('body-over-h');
    })

        // 共用的弹窗js
        $(document).click(function(){
            $('.grayDiv').removeClass('gray-show');
            $('.popup').removeClass('show');
            $('body').removeClass('body-over-h');
        });

    $('.privilege-div .close,.grayDiv').click(function(){
        $('.grayDiv').removeClass('gray-show');
        $('.privilege-div').removeClass('show');
        $('body').removeClass('body-over-h');
    });

    $(".privilege-div,.pinkage").click(function(event){
        event.stopPropagation();
    });

    // 详情中点击分享效果
    $('.share').click(function(){
        $('.grayDiv').addClass('gray-show');
        $('.share-div').addClass('show');
        $('body').addClass('body-over-h');
    })

    $('.share-div .cancel').click(function(){
        $('.grayDiv').removeClass('gray-show');
        $('.share-div').removeClass('show');
        $('body').removeClass('body-over-h');
    });

    $(".share-div,.share").click(function(event){
        event.stopPropagation();
    });

    // 颜色弹窗
    function color_pop_show(){
        $('.grayDiv').addClass('gray-show');
        $('.color-num-div').addClass('show');
        $('body').addClass('body-over-h');
    }

    function color_pop_hide(){
        $('.grayDiv').removeClass('gray-show');
        $('.color-num-div').removeClass('show');
        $('body').removeClass('body-over-h');
    }


    // 详情中点击选择颜色分类效果
    $('.sort').click(function(){
        color_pop_show();
    })
    
    $('.cnd-close').click(function(){
        color_pop_hide();
    });

    $(".color-num-div,.sort").click(function(event){
        event.stopPropagation();
    });
        // 选择颜色
        $('.cnd-sort ul li').click(function(){
            $(this).addClass('on').siblings().removeClass('on');
            color_sort();
        })

        // 选择递送方式
        $('.cnd-delivery ul li').click(function(){
            $(this).addClass('on').siblings().removeClass('on');
            color_sort();
        })

        // 颜色分类
        function color_sort(){
            var _txt;
            var _txt1;
            if($('.cnd-sort ul li').hasClass('on')){
                _txt = $('.cnd-sort ul li.on').html();
            }else{
                _txt = '请选择颜色分类';
            }

            if($('.cnd-delivery ul li').hasClass('on')){
                _txt1 = $('.cnd-delivery ul li.on').html();
            }else{
                _txt1 = '';
            }
            if(_txt == '请选择颜色分类') {
                $('.select-sort').text(_txt);
                $('.selected').text(_txt);
            }else{
                $('.select-sort').text('已选：' + _txt +','+ _txt1);  
                $('.selected').text('已选：' + _txt +','+ _txt1);  
            }
        }
        color_sort();
        
        $('.color-num-div .sure').on('click',function(){
            color_pop_hide();
            color_sort();
        
        })

    // 添加购物车
    $('.join-car').on('click',function(){
        if($('.selected').html() == '请选择颜色分类'){
            color_pop_show();
        }else{
            color_pop_hide();
            var _n_num = $('.n-num').html();
            var _n_num_1 = parseInt(_n_num) + 1;
            $('.n-num').text(_n_num_1);
        }
    })

    // 商品数量的加减
    $(".quantity-increase").on("click",function(){
        // $(this).siblings(".quantity-decrease").removeClass("disabled");
        var _text = $(this).siblings(".quantity");
        var _number = parseInt(_text.val());
        if(isNaN(_number))
            _number = 1;
        _text.val(++_number);
    });

    $(".quantity-decrease").on("click",function(){
        var _text = $(this).siblings(".quantity");
        var _number = parseInt(_text.val());
        if(isNaN(_number))
            _number = 1;
        if(_number <= 1)
            return;
        _text.val(--_number);
        // if(_number<=1)
        //     $(this).addClass("disabled");
    });



    




})