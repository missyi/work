$(function(){
	$('.add-items li').click(function(){
		$('.ac-checked').removeClass('on');
		$(this).children('.ac-checked').addClass('on');
		$('.defult').removeClass('defult-on');
		$(this).find('.defult').addClass('defult-on');
	})
	// 新增收货地址
	$('.add-checkbox').click(function(){
		$('.add-checkbox').removeClass('add-checked');
		$(this).addClass('add-checked');
	})
	// 街道弹窗
	$('.street').click(function(){
		$('.grayDiv,.add-popdiv').show(300);
		$('body').addClass('body-over-h');
	})

	$(document).click(function(){
        $('.grayDiv,.add-popdiv').hide(300);
		$('body').removeClass('body-over-h');
    });
    $('.grayDiv').on('click',function(){
        $(this).removeClass('gray-show');
        $('.popDiv').removeClass('show');
    });
    $(".add-popdiv,.street").click(function(event){
        event.stopPropagation();
    });

    $('.ap-cancel,.ap-sure').click(function(){
        $('.grayDiv,.add-popdiv').hide(300);
		$('body').removeClass('body-over-h');
		
    });

    // 设置为默认地址
    $('.mr-checkbox').on('click',function(){
    	var img = '<img src=images/dui.png width="15"/>';
    	if($(this).html() == ''){
            $(this).append(img);
        }else{
            $(this).empty();
        }
    })



    // 省市区选择
    $('.city-choose').on('click',function(){
    	$('.page').hide();
    	$('.page-1').show();
    	getProvinceBuy();
    })
    $('.city-back').on('click',function(){
    	window.location.href = 'file:///C:/Users/OODS/Desktop/11/add-address.html';
    })
})