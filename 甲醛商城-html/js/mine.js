$(function(){
    //导航滑动效果
    $('.oc-status-bot:first').show();
	var $menu = $(".menu"), $menuLi = $menu.find("li"), $current = $menu.find('.current');
    $menuLi.click(function () {
        var $this = $(this), num = $menuLi.index($this), current = $menuLi.index($(".first")), len = current - num;
        $menu.css("background-position", (25 * current) + "%" + " bottom");
        $current.removeClass("lihover");
        $menuLi.removeClass("first");
        $this.addClass("first");
        if (len <= 0) { len = -len; };
        if (num != 5) {
            $menu.stop().animate({ backgroundPosition: (25 * num) + "%" + " bottom" }, 100 * len);
        }
        else {
            $menu.stop().animate({ backgroundPosition: (25 * num + 25) + "%" + " bottom" }, 100 * len);
        }

        var index = $this.index();
        $('.oc-status-bot').hide();
        $('.oc-status-bot').eq(index).show();


    });

    // 代付款的checkbox效果
    
    
    function Count(){
        var _totalPrice = 0;
        var _oneallprice = 0;
        $(".status-div").each(function(){
            // 计算每个商品的价格（包括购买的数量）
            var _oneprice = $(this).find('.one-price').html();
            // alert(_oneprice);
            if(isNaN(_oneprice))
                _oneprice = 0;

            var _onenum = $(this).find('.sn-quantity').html();
            if(isNaN(_onenum))
                _onenum = 0;
            // alert(_onenum);
            _oneallprice = _oneprice * _onenum;
            $(this).find('.sd-sum').text(_oneallprice);

            // 计算总得结算价格
            if($(this).find(".checked").length == 0)
                return; // 如果没有选中任何项，则终止执行下面的代码；
            var _price = parseFloat($(this).find(".sd-sum").text());
            if(isNaN(_price))
                _price = 0;

            _totalPrice += _price;
        });

        $(".all-price").text(_totalPrice);
    }

    Count();

    var _quantity = 0;
    $('.ocs-pay').find('.ps-choose').click(function(){

        if($(this).hasClass("checked")){
            $(this).removeClass("checked");
        }else{
            $(this).addClass("checked");
        };
        _quantity = $('.stay-pay').find('.checked').length;
        $('.of-quantity').text(_quantity);
        Count();
    })


    
    


    // 评价
    $('.ec-grade ul li').click(function(){
        var num = $(this).index()+1;
        var len = $(this).index();
        var thats = $(this).parent(".ec-grade ul").find("li");
        if($(thats).eq(len).attr("class")=="on"){
            if($(thats).eq(num).attr("class")=="on"){
                $(thats).removeClass();
                for (var i=0 ; i<num; i++) {
                    $(thats).eq(i).addClass("on");
                }
            }else{
                $(thats).removeClass();
                for (var k=0 ; k<len; k++) {
                    $(thats).eq(k).addClass("on");
                }
            }
        }else{
            $(thats).removeClass();
            for (var j=0 ; j<num; j++) {
                $(thats).eq(j).addClass("on");
            }
        }
    })

    // 申请退换货
    $('.rc-bot:first').show();
    $('.rc-rservice ul li').click(function(){
        var index = $(this).index();
        $(this).children('a').addClass('on').end().siblings().children('a').removeClass('on');
        $('.rc-bot').hide();
        $('.rc-bot').eq(index).show();
    })

    var img01 = '<img src=images/checked.png width="15"/>';
    $('.agree-check').click(function(){
        if($(this).html() == ''){
            $(this).addClass('aon');
            $(this).append(img01);
        }else{
            $(this).removeClass('aon');
            $(this).empty();
        }
    })

    // 换货详情中的留言
    
    $('.write').click(function(){
        $('.grayDiv').addClass('gray-show');
        $('.write-pop').addClass('show');
        $('body').addClass('body-over-h');
    })

    $('.wp-textarea').focus(function(){
        $(this).parent('.write-pop').css({'bottom':'42%'});
    })

    $('.wp-textarea').blur(function(){
        $(this).parent('.write-pop').css({'bottom':'0'});
        $('.grayDiv').addClass('gray-show');
        $('.popDiv').hide();
        $('body').removeClass('body-over-h');
    })


    $(document).click(function(){
        $('.grayDiv').removeClass('gray-show');
        $('.popDiv').removeClass('show');
        $('body').removeClass('body-over-h');
    });
    
    $('.wp-cancel,.wp-yes,.grayDiv').click(function(){
        $('.grayDiv').removeClass('gray-show');
        $('.popDiv').removeClass('show');
        $('body').removeClass('body-over-h');
    })
    $(".popDiv,.write,.phone,.sex").click(function(event){
        event.stopPropagation();
    });

    
    // 修改手机号和性别
    $('.phone').on('click',function(){
        $('.grayDiv').addClass('gray-show');
        $('.phone-pop').addClass('show');
        $('body').addClass('body-over-h');
    })

    $('.sex').on('click',function(){
        $('.grayDiv').addClass('gray-show');
        $('.sex-pop').addClass('show');
        $('body').addClass('body-over-h');
    })
    
    $('.pp-input').focus(function(){
        $(this).parent('.phone-pop').css({'bottom':'40%'});
    })

    $('.pp-input').blur(function(){
        $(this).parent('.phone-pop').css({'bottom':'0'});
        $('.grayDiv').addClass('gray-show');
        $('.popDiv').hide();
        $('body').removeClass('body-over-h');
    })
    
    $('.pp-yes').on('click',function(){
        var _txt = $('.pp-input').val();
        if(_txt == ''){
            alert('手机号不能为空');
            $('.grayDiv').addClass('gray-show');
            $('.phone-pop').addClass('show');
            $('body').addClass('over-h');
            $('.pp-input').focus();
            return false;
        }
        if( !_txt.match(/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1})|(14[0-9]{1}))+\d{8})$/)){
            alert('手机号码格式不正确，请重新输入');
            $('.grayDiv').addClass('gray-show');
            $('.phone-pop').addClass('show');
            $('body').addClass('over-h');
            $('.pp-input').focus();
            return false;
        }else{
            $('.user-phone').text(_txt);
        }
        
    })


    $('.sp-cancel').on('click',function(){
        $('.grayDiv').removeClass('gray-show');
        $('.popDiv').removeClass('show');
        $('body').removeClass('body-over-h');
    })
    $('.sp-sure').on('click',function(){
        var _txt = $('.sex-pop p.on').html();
        $('.grayDiv').removeClass('gray-show');
        $('.popDiv').removeClass('show');
        $('body').removeClass('body-over-h');
        $('.si-sex').text(_txt);
    })  
    $('.sex-pop p').on('click',function(){
        $(this).addClass('on').siblings().removeClass('on');
    })
})