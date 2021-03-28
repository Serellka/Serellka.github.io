$(function() {
	var wh = $(window).height();
	$('#upper-arrow').fadeOut();
       
    $(window).scroll(function(){
        if ($(window).scrollTop()>wh) {
            $('#upper-arrow').fadeIn()
            $('.base-navigation').fadeOut()
            $('.gr').css('color', '#f38181');
        }else{
            $('#upper-arrow').fadeOut()
            if ($(window).scrollTop()<wh/2) {
                $('.base-navigation').fadeIn()
                $('.gr').css('color', 'white');
            }
        }
    }) 
});
