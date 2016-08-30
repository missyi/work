$(function(){
    // 支付总额
    function Count(){
        var _totalPrice = 0;
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

    


})


