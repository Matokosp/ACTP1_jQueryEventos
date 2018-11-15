$(document).ready(function(){
	$(".social__link").on("click", function(e){
		e.preventDefault();
		var aparent = $(this).parents("a");
		var img = $(aparent).children("img");
		var alertaalt = $(img).attr("alt");
		alert(alertaalt);
		// e.stopPropagation();
	})
	$(".social__element").on("click", ".social__like", function(e){
		e.preventDefault();
		$(this).toggleClass("social__like--clicked");
		// e.stopPropagation();
	})
})