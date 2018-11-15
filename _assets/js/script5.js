$(document).ready(function(){
	$(".social__link").on("click", function(e){
		e.preventDefault();
		// e.stopPropagation();
		var aparent = $(this).parents("a").children("img").attr("alt");
		alert(aparent);
	})
	$(".social__element").on("click", ".social__like", function(e){
		e.preventDefault();
		// e.stopPropagation();
		$(this).toggleClass("social__like--clicked");
	})
})