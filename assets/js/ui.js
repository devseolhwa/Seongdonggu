$(function(){

    // 부드러운 스크롤
    $(window).load(function(){				
		smoothScroll();		
	});

	function is_mob(){
		return (/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera);
	}

	function is_mac(){
		return navigator.platform.indexOf('Mac') > -1;
	}

	function is_chrome(){
		return /Chrome/.test(navigator.userAgent);
	}

	function is_firefox(){
		return /Firefox/.test(navigator.userAgent);
	}

	function smoothScroll(){
		if(is_mob() || is_mac() || is_firefox()) return;
		var $window = $(window);
		if(smoothScroll_passive()){
			window.addEventListener("wheel",smoothScroll_scrolling,{passive: false});
		}else{
			$window.on("mousewheel DOMMouseScroll", smoothScroll_scrolling);
		}				
	}

	function smoothScroll_passive(){
		var supportsPassive = false;
		try {document.addEventListener("test", null, { get passive() { supportsPassive = true }});
		} catch(e) {}
		return supportsPassive;
	}

	function smoothScroll_scrolling(event){
		if(!event.path){
			event.path = new Array();
			function callParentNode(child){
				if(child.parentNode){
					event.path.push(child.parentNode);
					callParentNode(child.parentNode);
				}
				return;
			}
			event.path.push(event.target);
			callParentNode(event.target);
		}

		event.preventDefault();
		var $window = $(window);
		var scrollTime = 1;
		var distance_offset = 3;
		var scrollDistance = $window.height() / distance_offset;
		var delta = 0;
		if(smoothScroll_passive()){
			delta = event.wheelDelta/120 || -event.originalEvent.detail/3;
		}else{
			if(typeof event.originalEvent.deltaY != "undefined"){
				delta = -event.originalEvent.deltaY/120;
			}else{
				delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
			}
		}

		var scrollTop = $window.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);
		TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
			ease: Power3.easeOut,
			overwrite: 5
		});		
	}

    AOS.init({
        once : true,
        throttleDelay : 99,
        duration: 1000
    });
    
    // header 스크롤 고정
/*     $(window).on("scroll", function(){
        const wh = $(window).scrollTop();
        if(wh <= 0){
            $("#header").removeClass("fix");
        } else {
            $("#header").addClass("fix");
        }
    }); */
   
    // header mouseover
    /* $("#header, #gnb").mouseover(function(){
        $("#header").addClass("on");
    }).mouseleave(function(){
        $("#header").removeClass("on");
    }); */

    // gnb
    $(document).on("mouseenter focus", "#gnb > ul > li > a", function () {
        $(this).parent("li").addClass("active").siblings("li").removeClass("active");
        $("#gnb > ul > li > ul").slideDown();
        //$(".gnbBg").slideDown();
        return false;
    }).on("mouseenter focus", "#gnb > ul > li", function () {
        $(this).addClass("active").siblings("li").removeClass("active");
        $("#gnb > ul > li > ul").slideDown();
        //$(".gnbBg").slideDown();
        return false;
    }).on("mouseleave", "#gnb > ul > li", function () {
        $(this).removeClass("active");
        $("#gnb > ul > li > ul").slideUp();
        //$(".gnbBg").slideUp();
        return false;
    });

    // mobile menu
    $(document).off("click", ".btnSitemapOpen").on("click", ".btnSitemapOpen", function(e) {
        e.preventDefault();
        $(".sitemapWrap").fadeIn();
        $("body").addClass("scrollLock");
        $("body").on("scroll touchmove mousewheel", function(e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        });
    });
    $(document).off("click", ".btnSitemapClose").on("click", ".btnSitemapClose", function(e) {
        e.preventDefault();
        $(".sitemapWrap").fadeOut();
        $("body").removeClass("scrollLock");
        $("body").off("scroll touchmove mousewheel");
    });

    $(document).off("click", ".sitemapBody > ul > li > a").on("click", ".sitemapBody > ul > li > a", function(e) {
        e.preventDefault();
        $(this).parent("li").toggleClass("on").siblings("li").removeClass("on");
        $(".sitemapBody > ul > li").each(function () {
            let onCheck = $(this).is(".on");
            if (onCheck) {
                $(this).children("ul").slideDown();
            } else {
                $(this).children("ul").slideUp();
            }
        });
    });

    // quickBar
    let quickBar = document.querySelector(".quickBar"),
        headerH = 70;

    window.addEventListener("scroll", () => {
        if (window.scrollY > headerH) {
            quickBar.classList.add("show");
        } else {
            quickBar.classList.remove("show");
        }
    });
    $("#btnTop").on("click", function(){
		$("html, body").stop().animate({ scrollTop: 0 });
	});
});