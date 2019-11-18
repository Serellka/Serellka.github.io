$(function() {  
   $(".btn-cont").click(function(){
    $("#info-page").addClass("disable")
    $("nav").removeClass("disable")
   });

   $(".switch_on").click(function(){
   	$("#info-page").removeClass("disable")
      $("nav").addClass("disable")
   });

   $('a[href^="#"]').click(function() {
   		var target = $(this).attr('href');
   		console.log(target);
   		$('html, body').animate({
   			scrollTop: $(target).offset().top
   		}, 500);
   });
});