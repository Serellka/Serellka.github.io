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
            console.log("lol")
        }else{
            $('#upper-arrow').fadeOut()
            if ($(window).scrollTop()<wh/2) {
                $('.base-navigation').fadeIn()
            }
        }
    }) 
});
