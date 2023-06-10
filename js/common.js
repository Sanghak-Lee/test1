$(document).ready(function() {
	$('#gnb > li > a.depth1').on('mouseenter focus', function (e) {
		$(e.target).parents('li').addClass('on');
		$(e.target).parents('li').siblings().removeClass('on');

		var depth2 = $(e.target).parents('li').find('.depth2');

		if ( $(depth2).size() > 0 && !$('#header').is('.act') ) {
			$('#header').addClass('act');
			$('#gnb .depth2').show();
			$('#header .nav_bg').show();
			$('#gnb .depth2').css('height', $('.gnb .sub1 .depth2').height() + 35);
			$('.nav_bg').css('height', $('#gnb .sub1 .depth2').height() + 35);
		}
	});

	$('#header').on('mouseleave', function (e) {
		$('#gnb .depth1 > li').removeClass('on');

		if ( $('#header').is('.act') ) {
			$('#header').removeClass('act');
			$('#gnb .depth2').hide();
			$('#header .nav_bg').hide();
		}
	});

	$('.head_util > li > a, #header h1 a, #container a, #container button, #container input, #container select, #container textarea').on('focus', function (e) {
		$('#gnb .depth1 > li').removeClass('on');

		if ( $('#header').is('.act') ) {
			$('#header').removeClass('act');
			$('#gnb .depth2').hide();
			$('#header .nav_bg').hide();
		}
	});
	$(".gnb .depth2").mouseenter(function(){ 
		 $(this).parents('.gnb li').addClass('on');
	});
	$(".gnb .depth2").mouseleave(function(){ 
		 $(this).parents('.gnb li').removeClass('on');
	});

	$('.location .lnb .title').click(function(ev){
		ev.preventDefault();
		if($(this).next('.lst').is(':visible')){
			$(this).next('.lst').slideUp(200);
			$(this).removeClass("on");
		}else{
			$('.location .lnb .lst:visible').slideUp()
			$(this).next('.lst').slideDown(200);
			$(this).addClass("on");
		}
	});
	$('.location .lst ul li a').click(function(){
		$(this).parents('.lst').slideUp(200);
		$(this).parents(".lst").parents(".navi").children('.location .lst .title').removeClass("on");;
	});
	$('.location .Category').mouseleave(function(){
		$(this).children('.lst').slideUp(400);
		$(this).children('.loca .title').removeClass("on");
	});
 });

$(function(){	
		
	$(".on_off a").mouseenter(function(){ 
		 $(this).find('img').get(0).src = $(this).find('img').get(0).src.replace('_off', '_on');
	});
	$(".on_off a").mouseleave(function(){ 
		 $(this).find('img').get(0).src = $(this).find('img').get(0).src.replace('_on', '_off');
	});
	
	$('.lnb .sel_bt').on("click", function(ev){
		ev.preventDefault();
		if($(this).next('.box').is(':visible')){
			$(this).next('.box').slideUp(100);
			$(this).removeClass("active");
		}else{
			$('.lnb .box:visible').slideUp()
			$(this).next('.box').slideDown(200);
			$(this).addClass("active");
		}
	});
	$('.lnb .box a').on("click",function(){
		$(this).parents('.box').slideUp(100);
		$(this).parents('.box').parents('.Family').children('.sel_bt').removeClass("active");
	});
	$('.lnb').mouseleave(function(){
		$(this).children('.box').slideUp(400);
		$(this).children('.sel_bt').removeClass("active");
	});
	//a링크 #처리
	$('a[href = "#"]').click(function(){
		return false;
	}); 
	
	
jQuery(function(){

	function lightboxPhoto() {
	
	jQuery("a[rel^='prettyPhoto']").prettyPhoto({
			animationSpeed:'fast',
			slideshow:5000,
			theme:'light_rounded',
			show_title:false,
			overlay_gallery: false
		});
	
	}
	
		if(jQuery().prettyPhoto) {
	
		lightboxPhoto(); 
			
	}
	
	
if (jQuery().quicksand) {

 	// Clone applications to get a second collection
	var $data = $(".portfolio-area").clone();
	
	//NOTE: Only filter on the main portfolio page, not on the subcategory pages
	$('.portfolio-categ li').click(function(e) {
		$(".filter li").removeClass("active");	
		// Use the last category class as the category to filter by. This means that multiple categories are not supported (yet)
		var filterClass=$(this).attr('class').split(' ').slice(-1)[0];
		
		if (filterClass == 'all') {
			var $filteredData = $data.find('.portfolio-item2');
		} else {
			var $filteredData = $data.find('.portfolio-item2[data-type=' + filterClass + ']');
		}
		$(".portfolio-area").quicksand($filteredData, {
			duration: 600,
			adjustHeight: 'auto'
		}, function () {

				lightboxPhoto();
						});		
		$(this).addClass("active"); 			
		return false;
	});
	
}//if quicksand

	

	var article = $('.faq .article');
	article.addClass('hiden');
	article.find('.a').slideUp(100);

	$('.faq .article .trigger').click(function(){
		var myArticle = $(this).parents('.article:first');
		if(myArticle.hasClass('hiden')){
			article.addClass('hiden').removeClass('show'); // 아코디언 효과를 원치 않으면 이 라인을 지우세요
			article.find('.a').slideUp(100); // 아코디언 효과를 원치 않으면 이 라인을 지우세요
			myArticle.removeClass('hiden').addClass('show');
			myArticle.find('.a').slideDown(100);
		} else {
			myArticle.removeClass('show').addClass('hiden');
			myArticle.find('.a').slideUp(100);
		}
	});

	$('.faq .hgroup .trigger').click(function(){
		var hidden = $('.faq .article.hiden').length;
		if(hidden > 0){
			article.removeClass('hide').addClass('show');
			article.find('.a').slideDown(100);
		} else {
			article.removeClass('show').addClass('hiden');
			article.find('.a').slideUp(100);
		}
	});

	
	$('#gototop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    })

	$('.selectyze1').Selectyze({
		theme : 'skype'
	});
	$('.selectyze2').Selectyze({
		theme : 'mac'
	});

	$('.selectyze3').Selectyze({
		theme : 'grey'
	});

	$('.selectyze4').Selectyze({
		theme : 'firefox'
	});

	$('.selectyze5').Selectyze({
		theme : 'css3'
	});

	/*퀵메뉴*/
	var filter = "win16|win32|win64|mac";
    var agentChk = null;
    if (navigator.platform) { agentChk = (filter.indexOf(navigator.platform.toLowerCase()) < 0) ? true : null }

    //위치값 자동 설정
    var wing = $('#Quick, #quick_right');
    var currentPosition = $('.header').height()- 87;

    currentPosition = currentPosition + 0;

    wing.css('top', currentPosition).css('display', 'block');

    // 스크롤 Aaction
    $(window).scroll(function () {
        var scrolls = $(window).scrollTop();
        var scrolls2 = scrolls + 400;
        var cssObj = { position: 'fixed', top: '20px' }
        var cssObj2 = { position: "absolute", top: currentPosition }

        if (scrolls >= 300) {
            (agentChk != null) ? wing.stop().animate({ 'top': scrolls2 }, 500) : wing.css(cssObj);
            $('#section_minibasket').fadeIn('slow');
        } else {
            (agentChk != null) ? wing.stop().animate({ 'top': scrolls + currentPosition + 'px' }, 300) : wing.css(cssObj2);
            $('#section_minibasket').fadeOut('slow');

        }
    });

	/* 메인롤링배너 */
	jQuery(function ($) {

	   var T = 5000; // 배너 롤링 시간 주기
		var B_CNT = 5; // 전체 롤링배너 갯수
		var BigBanTimer = null;

		$(function() {
			$('.M_con2 .thum_box li')
			  .bind('mouseover', function() {
				clear_bigban_timer();
				showBanner($(this).index());
			}).bind('mouseout', function() {
				set_bigban_timer();
			});
			$('#tplBigBanner')
			  .bind('mouseover', function() {
				clear_bigban_timer();
			}).bind('mouseout', function() {
				set_bigban_timer();
			});
			set_bigban_timer();
		});

		function set_bigban_timer()
		{
			if ( BigBanTimer === null )
			{
				BigBanTimer = setInterval(rollingBanner, T);
			}
		}

		function clear_bigban_timer()
		{
			clearInterval(BigBanTimer);
			BigBanTimer = null;
		}
		// 배너 롤링
		var rollingBanner = function() {
			var _i = $('#tplBigBanner .con_box:visible').index();
			var _next = _i + 1;
			if (_next == B_CNT) {
				_next = 0;
			}
			showBanner(_next);
	}
	// 선택한 배너 노출 + 썸네일 보여주기
	var showBanner = function(idx) {
		$('#tplBigBanner .con_box:visible').removeClass('active');
		$('#tplBigBanner .con_box').eq(idx).addClass('active');

		$('a', '.M_con2 .thum_box li').removeClass('active');
		$('a', $('.M_con2 .thum_box li').eq(idx)).addClass('active');
	}
	});  /* Document Ready */

	
});
		$('.M_visual .slide-wrap .in_cover').css('top', $('.M_visual .slide-wrap').height()/3);
    	
	if ($( window ).width() > 1701) {
		$('.M_visual .slide-wrap').css('min-height', $(window).height() - $('.footer').height() - 91);
		
	}

	else if($( window ).width() > 1401 && $( window ).width() <= 1700) {
		$('.M_visual .slide-wrap').css('min-height', $(window).height() - $('.footer').height() - 91);
		
	}
	else if($( window ).width() > 1025 && $( window ).width() <= 1400) {
		$('.M_visual .slide-wrap').css('min-height', '');
		
	}
	else if($( window ).width() > 769 && $( window ).width() <= 1024) {
		$('.M_visual .slide-wrap').css('min-height', '');
	}
	else if($( window ).width() > 641 && $( window ).width() <= 768) {
		$('.M_visual .slide-wrap').css('min-height', $(window).height());
	}
	else if($( window ).width() > 321 && $( window ).width() <= 640) {
		$('.M_visual .slide-wrap').css('min-height', $(window).height());
	}
	 else if($( window ).width() <= 320) {
		$('.M_visual .slide-wrap').css('min-height', $(window).height());
	} 
	$(window).resize(function() {

	  viewMaskSetFn();
	});

	function viewMaskSetFn() {

		$('.M_visual .slide-wrap .in_cover').css('top', $('.M_visual .slide-wrap').height()/3);
		
		if ($( window ).width() > 1701) {
		$('.M_visual .slide-wrap').css('min-height', $(window).height() - $('.footer').height() - 91);
		}

		else if($( window ).width() > 1401 && $( window ).width() <= 1700) {
			$('.M_visual .slide-wrap').css('min-height', $(window).height() - $('.footer').height() - 91);
			
		}
		else if($( window ).width() > 1025 && $( window ).width() <= 1400) {
			$('.M_visual .slide-wrap').css('min-height', '');
			
		}
		else if($( window ).width() > 769 && $( window ).width() <= 1024) {
			$('.M_visual .slide-wrap').css('min-height', '');
		}
		else if($( window ).width() > 641 && $( window ).width() <= 768) {
			$('.M_visual .slide-wrap').css('min-height', $(window).height());
		}
		else if($( window ).width() > 321 && $( window ).width() <= 640) {
			$('.M_visual .slide-wrap').css('min-height', $(window).height());
		}
		 else if($( window ).width() <= 320) {
			$('.M_visual .slide-wrap').css('min-height', $(window).height());
		} 

	}

});


