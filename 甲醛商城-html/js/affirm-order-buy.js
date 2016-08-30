$(function(){
    // 商品价格计算
    function Count(){
        var _totalPrice = 0;
        var buy_num = $('.quantity').val();
        $(".order-pro").each(function(){
            var _number = parseInt($(this).find(".op-quantity").html());
            // alert(_number);
            if(isNaN(_number) )
                _number = 0;
            var _price = parseFloat($(this).find(".one-price").text());
            // alert(_price);
            if(isNaN(_price))
                _price = 0;
            _totalPrice += _number * _price;

        });
        _totalPrice = _totalPrice * buy_num;
        // alert(_totalPrice);
        $(".o-sum").text(_totalPrice);
        $('.sum').text(_totalPrice);
        
    }
    Count();
    // 积分效果
    var o_integral = $('.integral').html();
    var img = '<img src=images/dui.png width="20"/>';
    $('.od-checkbox').click(function(){
        var o_sum1 = $('.o-sum').html();

        if($(this).html() == ''){
            // alert(1);
            $(this).append(img);
            
            // alert(o_sum1);
            $('.sum').text(o_sum1-o_integral);
        }else{
            $(this).empty();
            $('.sum').text(o_sum1);

        }
    })
    

    function jf(){
        if($('.od-checkbox').html() != ''){
            // alert(1);
            var _sum = $('.sum').html();
            // alert(_sum);
            var _quantity = $('.quantity').val();
            // alert(_quantity);
            var _jf = $('.integral').html();
            var _z_sum = _sum  -_jf;
            $('.sum').text(_z_sum);

        }
    }

    // 商品加减
    $(".quantity-increase").on("click",function(){
        // $(this).siblings(".quantity-decrease").removeClass("disabled");
        var _text = $(this).siblings(".quantity");
        var _number = parseInt(_text.val());
        if(isNaN(_number))
            _number = 1;

        _text.val(++_number);
        Count();
        jf();
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
        Count();
        jf();
    
    })

    // 购买数量中的input文本框的内容改变时效果
    $('.quantity').keyup(function(){
        var _text = $(this).val();
        var _number = parseInt(_text);
        Count();
        jf();
    })



})


