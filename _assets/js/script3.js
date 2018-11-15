$(document).ready(function (){
	var cuartoli = $(".navbar").children("ul").find("li:nth-child(4)");
	var link6 = $(".navbar").children("ul").find("a:contains('link 6')");
	
	$(cuartoli).append('<ul><li><a href="#">link 4.a</a></li></ul>');
	// $(".navbar").children("ul").find("li:nth-child(4)").append('<ul><li><a href="#">link 4.a</a></li></ul>')
	$(cuartoli).before('<li><a href="#">link 3.5</a></li>');

	
	$(link6).prepend('😎');
	$(link6).after('😎 ');
});