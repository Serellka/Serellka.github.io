$(function() {

    
	var wh = $(window).height();
	$('#upper-arrow').fadeOut();

    /* Slider */
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

       
    $(window).scroll(function(){
    	if ($(window).scrollTop()>wh) {
    		$('#upper-arrow').fadeIn()
            $('.base-navigation').fadeOut()
            $('.header').css('background', 'rgba(255, 189, 179, 0.8)');
            console.log("lol")
    	}else{
    		$('#upper-arrow').fadeOut()
            $('.header').css('background', 'rgba(255, 189, 179, 0)');
            if ($(window).scrollTop()<wh/2) {
                $('.base-navigation').fadeIn()
            }
    	}
    }) 
});
