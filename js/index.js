//--------------------------------------------------- menu scroll
$(window).scroll(function(){
	const st = $(this).scrollTop();
	if (st >= 100 ) {
		$('.menu').addClass('menu-background');
		$('.mobMenu').addClass('menu-background');
	} else {
		$('.menu').removeClass('menu-background');
		$('.mobMenu').removeClass('menu-background');
	}
});
//--------------------------------------------------- anchor
$("#menu").on("click",".link", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});

$('#mobDropmenu').on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
    $("#mobDropmenu").animate({
		height: 'hide'
	},{
		duration: 400, 
		specialEasing: { 
			height: 'swing'
		}
	});
	if ($('#mobMenu').hasClass('pushed')) {
		$('#mobMenu').removeClass('pushed');
	}else{
		$('#mobMenu').addClass('pushed');
	}
});
//--------------------------------------------------- mobMenu
$('#mobMenu').on('click', () => {
if ($('#mobMenu').hasClass('pushed')) {
	$("#mobDropmenu").animate({
		height: 'hide'
	},{
		duration: 500, 
		specialEasing: { 
			height: 'swing'
		}
	});
	$('#mobMenu').removeClass('pushed');
	}else{
		$("#mobDropmenu").animate({
		    height: 'show'
		},{
		    duration: 500, 
		    specialEasing: {
		      	height: 'swing'
		    }
		});
		$('#mobMenu').addClass('pushed');
	}
});
//--------------------------------------------------- scrollbtn
$(".scrollbtn").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});
//--------------------------------------------------- slider
$('.slider-block').slick({
	dots: true,
	infinite: true,
	speed: 1000,
	autoplay: true,
 	variableWidth: false,
	nextArrow: "<img class='slick-next' src='gallery/icons/right.svg' alt='next'>",
	prevArrow: "<img class='slick-prev' src='gallery/icons/left.svg' alt='prev'>",
});	