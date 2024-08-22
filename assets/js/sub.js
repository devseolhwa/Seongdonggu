$(function(){
    
    // snb
	$(document).off("click", ".snbList a").on("click", ".snbList a", function(e) {
		$(this).addClass("on").siblings("a").removeClass("on");
	});

});