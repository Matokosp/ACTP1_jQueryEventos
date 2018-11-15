$(document).ready(function(){
	
	$(".add_name").on("click", function(){
		var data = prompt('Por favor agrega un nombre a la lista', 'Harry Potter');
		$(".names").append("<li><span>" + data + "</span><a href='#' class='remove_name'> Remove </a></li>");
		$(".names").on("click", "li > a", function(e){
			e.preventDefault();
			$(this).parent().remove();
		})
	})
})