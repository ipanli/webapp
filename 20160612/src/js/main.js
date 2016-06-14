
/**
 * 
 */

$(function(){

    var pageNum = $(".page").length;

    APPDown();

    $('.wp-inner').fullpage({
                loop:true,
                change: function (e) {
                    // 移除动画属性
                    $('.page').eq(e.cur).find('.js-animate').each(function() {
                        $(this).removeClass($(this).data('animate')).hide();
                    });
                    
                    if(e.cur == pageNum-1){
                        $(".start").hide();
                    }else{
                        $(".start").show();
                    }
                },
                afterChange: function (e) {
                    // 添加动画属性
                    $('.page').eq(e.cur).find('.js-animate')
                        .each(function () {
                            $(this).addClass($(this).data('animate')).show();
                        });
                }
    });


    $(".loading").hide();




    


    // alert(isWeiXin());

})

