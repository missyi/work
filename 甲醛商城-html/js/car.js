$(function(){
    var _quantity = 0;

	function Count(){
        var _totalPrice = 0;
        $(".shp-cart-list li").each(function(){
            if($(this).find(".checked").length == 0)
                return;

            var _number = parseInt($(this).find(".num-quantity").html());
            // alert(_number);
            if(isNaN(_number) )
                _number = 0;
            var _price = parseFloat($(this).find(".shp-cart-item-price").text().replace("￥",""));
            if(isNaN(_price))
                _price = 0;
            _totalPrice += _number * _price;
            // _quantity = $(this).find('.checked').length;
        });
       
        $(".shp-cart-total span").text(_totalPrice.toFixed(2));
    }


    // 删除
    $('.car-cancel').click(function(){
        
        $('.edit-item').each(function(){
            // alert(1);
            if($(this).find('.cart-checkbox').hasClass('checked')){
                $(this).empty().css({'padding':'0','margin':'0','border':'none'});
                Count();
                _quantity = $('.items').find('.checked').length;
                // alert(_quantity);
                $('.pay-quantity').text(_quantity);
            }    
        })
        Count();


    })
	$(".cart-checkbox").click(function(){
        if($(this).hasClass("checked")){
            $(this).removeClass("checked");
        }else{
            $(this).addClass("checked");
        };
        _quantity = $('.items').find('.checked').length;
        $('.pay-quantity').text(_quantity);
        Count();
    });

	// 全选
	$('.all-checkbox').click(function() {
		if($(this).hasClass('checked')){
			$(this).removeClass('checked');
        	$('.cart-checkbox').removeClass('checked'); 

		}else{
			$(this).addClass('checked');
        	$('.cart-checkbox').addClass('checked'); 
		}
		Count();
        _quantity = $('.items').find('.checked').length;
        // alert(_quantity);
        $('.pay-quantity').text(_quantity);
    });


    // 商品数量的加减
    $(".quantity-increase").on("click",function(){
        // $(this).siblings(".quantity-decrease").removeClass("disabled");
        var _text = $(this).siblings(".quantity");
        var _number = parseInt(_text.val());
        if(isNaN(_number))
            _number = 1;
        _text.val(++_number);
        Count();
    });

    $(".quantity-decrease").on("click",function(){
        var _text = $(this).siblings(".quantity");
        var _number = parseInt(_text.val());
        if(isNaN(_number))
            _number = 1;
        if(_number <= 1)
            return;
        _text.val(--_number);
        Count();
    });


    // 购物车编辑
    $('footer:first').show();
    $('.car-edit-1').click(function(){
        var _text = $(this).html();
        if(_text == '编辑'){
            $(this).text('完成');
            $('.car-edit').show();
            $('footer').hide();
            $('.edit-foot').show();
        }else{
            $(this).text('编辑');
            $('.car-edit,.edit-delete,.quantity-wrapper').hide();
            $('.edit').text('编辑');
            $('footer').hide();
            $('.car-foot,.cp-color,.cp-price-num').show();
            $('.cart-product-cell-2').removeClass('small');
        }
        Count();
    })
    
    
    
    
    $('.edit').click(function(){
        var _txt = $(this).html();
        if(_txt == '编辑'){
            // alert(1);
            $(this).text('完成');
            $(this).parents('.edit-item').find('.cart-product-cell-2').addClass('small');
            $(this).parents('.edit-item').find('.cp-price-num,.cp-color').hide();
            $(this).parents('.edit-item').find('.quantity-wrapper').show();
            $(this).parents('.edit-item').find('.edit-delete').show();
            $(this).parents('.edit-item').find('.edit-delete').click(function(){
                $(this).parents('.edit-item').remove();
            })
        }else{
            // alert(1);
            $(this).text('编辑');
            $(this).parents('.edit-item').find('.cart-product-cell-2').removeClass('small');
            $(this).parents('.edit-item').find('.cp-price-num,.cp-color').show();
            $(this).parents('.edit-item').find('.quantity-wrapper').hide();
            $(this).parents('.edit-item').find('.edit-delete').hide();
        }

        var pro_num = $(this).parents('.edit-item').find('.quantity').val();
        // alert(pro_num);
        $(this).parents('.edit-item').find('.num-quantity').text(pro_num);
        Count();
    })



    
    
    




})