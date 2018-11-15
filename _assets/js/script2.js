$(document).ready(function (){
	var articulo4 = $(".article").eq(3);
	$(articulo4).children("header").children("p").text("ESTE TEXTO SE CAMBIO CON JS");

	var linktwitter = $(articulo4).children("div").find("ul").children("li:nth-child(4)").children("a");
	$(linktwitter).text("Pinterest");
	$(linktwitter).attr("href", "http://pinterest.com")


	$('a[href="#"]').on("click", function(e){
		e.preventDefault();
	})

	$(".header__main").children("h2").css("font-size", "200%");

	// var sel = $('.article').eq(3).find('.article__body').children('.article__socialnetworks').
});