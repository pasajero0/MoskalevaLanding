$(document).ready(function(){
	//--------------------------------------------------- menu scroll
		
	$(window).scroll(function(){
		const ST = $(this).scrollTop();
		const WW = $(window).width();
		if (ST >= 5300 && WW >= 1000 ) {
			$('#navbar').slideUp(300);
		} else {
			$('#navbar').slideDown(300);
		}
	});

	//--------------------------------------------------- mobmenu

	$('#nav-icon, .mobmenu-link').click(function(){
		$('#nav-icon').toggleClass('open');
		$('#mobmenu').slideToggle(300);
	});

	//--------------------------------------------------- anchor

	$(".btn-click").on("click", function (event) {
	    event.preventDefault();
	    let id  = $(this).attr('href'),
	        top = $(id).offset().top;
	    $('body,html').animate({scrollTop: top}, 1500);
	});

	//--------------------------------------------------- slider

	$('.certificates-slider').slick({
		slidesToShow: 3,
  	slidesToScroll: 1,
  	autoplaySpeed: 2000,
		infinite: true,
		speed: 1000,
		autoplay: true,
	 	variableWidth: false,
		nextArrow: '<i class="sprite3 sprite3-right-cert"></i>',
		prevArrow: '<i class="sprite3 sprite3-left-cenrt"></i>',
	});	

	$('.reviews-slider').slick({
		slidesToShow: 1,
  	slidesToScroll: 1,
  	autoplaySpeed: 2000,
		dots: true,
		infinite: true,
		speed: 1000,
		autoplay: true,
	 	variableWidth: false,
	 	nextArrow: '<i class="sprite3 sprite3-right-rev"></i>',
		prevArrow: '<i class="sprite3 sprite3-left-rev"></i>',
	});
	
	//--------------------------------------------------- question-answer

	$('.answer').slideUp();
	$('.question').on('click', (e) => {
		$(e.currentTarget).toggleClass('clicked')
		$(e.currentTarget.lastElementChild).slideToggle(300);
	});

});