$(function() {

	$(".info_item").on({
		mouseenter: function() {
			console.log("lol");
			$(this).children("a").children(".home_page").addClass("flip");
			$(this).children("a").children(".home_page").addClass("animated");
		},
		mouseleave: function() {
			$(this).children("a").children(".home_page").removeClass("rotate");
		}
	})
});