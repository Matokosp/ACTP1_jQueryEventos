$(document).ready(function(){
  	$(".images img").on("click", function(){
		// var numero = $(this).val("img:nth-child(n)");
		var src = $(this).attr('src').split('/');
		var filename = src[src.length -1]
		var file = filename.split('.')
		var name = file[0]
		alert("Imagen numero" + " " + name);
	})
});

