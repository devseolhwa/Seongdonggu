$(function(){

    // 팝업존
	$(".popupzoneSlider .sliderInner").slick({
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        variableWidth: false,
        arrows: true,
        dots: true,
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


    // 비주얼 스와이프
   /* let visualArray = ["01", "02", "03"];
    let visualSwiper = new Swiper(".visualSwiper", {
        effect : "fade",
        centeredSlides: true,
        speed: 1000,
        loop: false,
        autoplay: {
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<button type="button" class="' + className + '">' + visualArray[index] + '<span class="bar"></span></button>';
            },		
        },
        on: {
            slideChangeTransitionStart: function(){
                let num = this.activeIndex + 1;
                $(".visualControl button").removeClass("on");
                $(".visualControl button:nth-child(" + num + ")").addClass("on");
            },
        },
    });
    let firstSet = function(){
        $(".visualControl button").eq(0).addClass("on");
    };
    setTimeout(firstSet, 100);

    // section02 배경 active
    let section02 = document.querySelector(".section02"),
        height100 = 100;

    window.addEventListener("scroll", () => {
        if (window.scrollY > height100) {
            section02.classList.add("active");
        } else {
            section02.classList.remove("active");
        }
    });

    // 협회소개 스와이프
    new Swiper(".introductionSlide", {
        //effect: 'fade',
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // 협회주요활동 tab
    $(".noticeBtnGroup li").click(function(){
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

    // 회원사 스와이프
    new Swiper(".partnerSwiper", {
        slidesPerView: 3,
        //spaceBetween: 63,
        autoplay: true,
        loop: true,
        breakpoints: {
            1700: {
                slidesPerView: 5,
            },
            1100: {
                slidesPerView: 4,
            },
            320: {
                slidesPerView: 3,
                centeredSlides: true,
            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });
     */
});