
$(document).ready(function(){
  

	// 메인 상단 배너
	var $mainVisualBnr = $('#mainVisualBnr');
	var mainVisualBnrTime = 5000; //롤링 시간 3초
	var mainVisualBnrAuto = 1; //play stop 체크

	$mainVisualBnr.slick({
		pauseOnFocus: true,
		pauseOnHover: true,
		autoplay: true,
		autoplaySpeed: mainVisualBnrTime,
		arrows:true,
		dots: true,
		//infinite: false,
		draggable: true,
		fade: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
	   
	});

	// 움직이는 bar
	var $boxMainVisualBnr = $('.M_visual_wrap');
	var mainDotListWidth = $boxMainVisualBnr.find('.dot-wrap .dot-list').eq(0).width();
	var mainDotListNum = $boxMainVisualBnr.find('.dot-wrap .dot-list').length;
	var mainDotListNow = $mainVisualBnr.slick('slickCurrentSlide');

	$boxMainVisualBnr.find('.dot-wrap .dot-list').css({});

	$mainVisualBnr.on('beforeChange', function(event, slick, currentSlide, nextSlide){
		mainDotListNow = nextSlide;
		$mainVisualBnr.find('.slide-wrap').removeClass('motion');
		$mainVisualBnr.find('.slide-wrap:not(.slick-cloned)').eq(nextSlide).addClass('motion');
	});
	

	// 리스트버튼
	$boxMainVisualBnr.find('.dot-wrap .dot-list > a').each(function(index){
		$(this).on('click',function(e){
			$mainVisualBnr.slick('slickGoTo', index);
			$mainVisualBnr.find('.slick-slide:not(.slick-cloned)').eq(mainDotListNow).focus();
			e.preventDefault();
		});
	});
	$mainVisualBnr.find('.slick-dots > li > a').on('click',function(e){
		e.preventDefault();
	});

	// play stop 버튼
	$boxMainVisualBnr.find('.btn-stop').click(function(e){
		$(this).removeClass('show');
		$boxMainVisualBnr.find('.btn-play').addClass('show');
		$mainVisualBnr.slick('slickPause');
		mainVisualBnrAuto = 0;
		e.preventDefault();
	});
	$boxMainVisualBnr.find('.btn-play').click(function(e){
		$(this).removeClass('show');
		$boxMainVisualBnr.find('.btn-stop').addClass('show');
		$mainVisualBnr.slick('slickPlay');
		mainVisualBnrAuto = 1;
		e.preventDefault();
	});
	$boxMainVisualBnr.on('mouseleave',function(){
		if (mainVisualBnrAuto == 0) {
			$mainVisualBnr.slick('slickPause');
		};
	});

	 // 현재 배너 모션 시작
		$mainVisualBnr.find('.slick-slide.slick-current').addClass('motion');


});