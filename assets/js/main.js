$(function(){

    // 팝업존
	$(".popupzoneSlider .sliderInner").slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        variableWidth: false,
        arrows: true,
        dots: true,
        pauseOnHover: false,
        focusOnChange: true,
        accessibility: false,
        prevArrow: $(".btnPrev"),
        nextArrow: $(".btnNext"),
        //slidesToScroll: 1,
        //infinite: false,
        //fade: true,
        //false: true,
        customPaging: function (slick, index) {
            $(".popupzoneSlider .controlWrap .totalWrap span").text(slick.slideCount);
		}
	}).on("afterChange", function (event, index, slick, currentSlide) {
        $(".popupzoneSlider .controlWrap .totalWrap strong").text((slick + 1));
	});

    $(".controlWrap .btnWrap").append("<button type='button' class='btnPause'>stop</button>");

    $(".controlWrap .btnWrap button").on("click", function () {
		if ($(this).hasClass("btnPause")) {
			$(".popupzoneSlider .sliderInner").slick("slickPause");
			$(this).removeClass("btnPause").addClass("btnPlay");
			$(this).text("play");
		} else if ($(this).hasClass("btnPlay")) {
			$(".popupzoneSlider .sliderInner").slick("slickPlay");
			$(this).removeClass("btnPlay").addClass("btnPause");
			$(this).text("stop");
		} else if ($(this).hasClass("btnPrev")) {
			$(".popupzoneSlider .sliderInner").slick("slickPrev");
		} else {
			$(".popupzoneSlider .sliderInner").slick("slickNext");
		}
	});

    // 센터소식
    $(".noticeBtnGroup li").on("click", function () {
		const index = $(this).index();
		if($(this).hasClass("on") == false){
			$(this).addClass("on").siblings().removeClass("on");
			$(".noticeListGroup > li").stop().hide();
			$(".noticeListGroup > li").eq(index).stop().fadeIn();
			$(".noticeListGroup > li .aos-init").removeClass("aos-animate");
			$(`[data-aos][data-aos][data-aos-duration="1000"], body[data-aos-duration="1000"] [data-aos]`).css("transition-duration","0s");
			setTimeout(() => {
				$(`[data-aos][data-aos][data-aos-duration="1000"], body[data-aos-duration="1000"] [data-aos]`).css("transition-duration","1s");
				$(".noticeListGroup > li .aos-init").addClass("aos-animate");
			} , 100);
		}		
	});

    // newsSlider
    $(".newsSlider").slick({
        slidesToShow : 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        infinite: true,
        draggable: true,
        arrows: true,
        dots: false,
        pauseOnHover: false,
        adaptiveHeight: true,
        variableWidth: true,
        responsive: [{
            breakpoint: 767,
            settings: {
                arrows: false
            }
        }]
    });

});