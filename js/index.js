$(document).ready(function(){
	//--------------------------------------------------- menu scroll
	// $(window).scroll(function(){
	// 	const st = $(this).scrollTop();
	// 	if (st >= 100 ) {
	// 		$('.menu').addClass('menu-background');
	// 		$('.mobMenu').addClass('menu-background');
	// 	} else {
	// 		$('.menu').removeClass('menu-background');
	// 		$('.mobMenu').removeClass('menu-background');
	// 	}
	// });
	//--------------------------------------------------- anchor

	$(".btn-click").on("click", function (event) {
	    event.preventDefault();
	    let id  = $(this).attr('href'),
	        top = $(id).offset().top;
	    $('body,html').animate({scrollTop: top}, 1500);
	});
	// $('#mobDropmenu').on("click","a", function (event) {
	//     event.preventDefault();
	//     var id  = $(this).attr('href'),
	//         top = $(id).offset().top;
	//     $('body,html').animate({scrollTop: top}, 1500);
	//     $("#mobDropmenu").animate({
	// 		height: 'hide'
	// 	},{
	// 		duration: 400, 
	// 		specialEasing: { 
	// 			height: 'swing'
	// 		}
	// 	});
	// 	if ($('#mobMenu').hasClass('pushed')) {
	// 		$('#mobMenu').removeClass('pushed');
	// 	}else{
	// 		$('#mobMenu').addClass('pushed');
	// 	}
	// });
	//--------------------------------------------------- mobMenu
	// $('#mobMenu').on('click', () => {
	// if ($('#mobMenu').hasClass('pushed')) {
	// 	$("#mobDropmenu").animate({
	// 		height: 'hide'
	// 	},{
	// 		duration: 500, 
	// 		specialEasing: { 
	// 			height: 'swing'
	// 		}
	// 	});
	// 	$('#mobMenu').removeClass('pushed');
	// 	}else{
	// 		$("#mobDropmenu").animate({
	// 		    height: 'show'
	// 		},{
	// 		    duration: 500, 
	// 		    specialEasing: {
	// 		      	height: 'swing'
	// 		    }
	// 		});
	// 		$('#mobMenu').addClass('pushed');
	// 	}
	// });
	//--------------------------------------------------- scrollbtn
	// $(".scrollbtn").on("click","a", function (event) {
	//     event.preventDefault();
	//     var id  = $(this).attr('href'),
	//         top = $(id).offset().top;
	//     $('body,html').animate({scrollTop: top}, 1500);
	// });
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

	$('.answer').hide();

	$('.question').on('click', (e) => {
	if ($(e.currentTarget).hasClass('clicked')) {
		$(e.currentTarget).removeClass('clicked');
		$(e.currentTarget.lastElementChild).hide(300);
	} else {	
		$(e.currentTarget).addClass('clicked');
		$(e.currentTarget.lastElementChild).show(300);
	}
	// 	$("#mobDropmenu").animate({
	// 		height: 'hide'
	// 	},{
	// 		duration: 500, 
	// 		specialEasing: { 
	// 			height: 'swing'
	// 		}
	});

});