;(function($){
    $.fn.extend({  
        slideBox:function(imgCount,boxWidth){
            let count = 0,boxGap = 0,moveWidth = 0;
            boxGap = parseInt(boxWidth)/5;
           let that = this;
            $(this).find('.next-btn').click(function(){
                count++;
                if(count>=imgCount-2){
                    count=1;
                    $(this).fadeOut();
                    $(that).find('.wrap-container ul.imglist').animate({'marginLeft':'-110%'});
                    return;
                } 
                $(that).find('.prev-btn').fadeIn();
                // console.log(count);      
                moveWidth = -(count*boxGap+50)+'%';                    
                $(that).find('.wrap-container ul.imglist').animate({'marginLeft':moveWidth});
            })
            $(this).find('.prev-btn').click(function(){
                count--;                      
                if(count<=-1){
                    count=-1;
                    $(this).fadeOut();
                    $(that).find('.wrap-container ul.imglist').animate({'marginLeft':'10%'});  
                    return;
                }else{
                    $(that).find('.next-btn').fadeIn();
                }
                moveWidth = -(count*boxGap+50)+'%';
                $(that).find('.wrap-container ul.imglist').animate({'marginLeft':moveWidth});
            })
        }  
    }); 
})($);

// // 手机颜色图片切换
// $(function(){
//     $('.xn_c_prodv_5_conT1_t_color_box ul.colorbar li').eq(0).addClass('active');
//     $('.xn_c_prodv_5_conT1_t_color_box ul.colorbar li').click(function(){
//         $(this).addClass('active').siblings().removeClass('active');
//         $('.xn_c_prodv_5_conT1_t_color_box ul.img2 li').eq($(this).index()).fadeIn().siblings().fadeOut();
//         $('.xn_c_prodv_5_conT1_t_color_box ul.colortext li').eq($(this).index()).fadeIn().siblings().fadeOut();
//     })
// })