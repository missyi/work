$(function(){
	// 余额支付
	var img = '<img src=images/dui.png width="15"/>';
	$('.select').click(function(){
        if($(this).html() == ''){
            $(this).append(img);
        }else{
            $(this).empty();
        }
    })

    // 在线支付
    $('.online-pay ul li .op-select').click(function(){
        if($(this).html() == ''){
        	$(this).parents('ul').find('li').children('.op-select').empty();
            $(this).append(img);
            
        }else{
            $(this).empty();
        }
    })


    // 支付总额
    function Count(){
        var _totalPrice = 0;
        var _privilege = $('.j-privilege').html().replace('￥','');
        // alert(_privilege);
        $(".payment-div").each(function(){
            // if($(this).find(".checked").length == 0)
            //     return;
            var _number = parseInt($(this).find(".quantity").html());
            // alert(_number);
            if(isNaN(_number) )
                _number = 0;
            var _price = parseFloat($(this).find(".one-price").text());
            // alert(_price);
            if(isNaN(_price))
                _price = 0;
            _totalPrice += _number * _price;


        });
        _totalPrice = _totalPrice-_privilege;
        $('.gp-sum').text(_totalPrice);
        $('.gp-privilege').text(_privilege);
        // alert(_totalPrice);
        $(".s-pay").text('￥'+_totalPrice.toFixed(2));
    }
    Count();
})