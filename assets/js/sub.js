$(function(){
    
    // snb
	$(document).off("click", ".snbList a").on("click", ".snbList a", function(e) {
		$(this).addClass("on").siblings("a").removeClass("on");
	});

	// tab
	$(".tabNav a").on("click", function (e) {
		e.preventDefault();

		var $this = $(this);
		var opt = $this.attr("href");

		$this.parent("li").addClass("on").siblings("li").removeClass("on");

		if (opt && opt.charAt(0) === "#") {
			$(".tabDetails").hide();
			$(opt).show();
		}
	});

});