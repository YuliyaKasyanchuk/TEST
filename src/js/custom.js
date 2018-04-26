$(window).load(function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('body').addClass('ios');
    } else {
        $('body').addClass('web');
    };
    $('body').removeClass('loaded');
});
/* viewport width */
function viewport() {
    var e = window,
        a = 'inner';
    if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return { width: e[a + 'Width'], height: e[a + 'Height'] }
};
/* viewport width */
$(function() {
    /* placeholder*/
    $('input, textarea').each(function() {
        var placeholder = $(this).attr('placeholder');
        $(this).focus(function() { $(this).attr('placeholder', ''); });
        $(this).focusout(function() {
            $(this).attr('placeholder', placeholder);
        });
    });
    /* placeholder*/

    /* components */
    // SEARCH BUTTON
    $('.search-link').on('click', function() {
        $('.moblist__form').toggleClass('moblist__form-active');
    });
    // MENU BUTTON
    $('.button-nav').click(function() {
        $(this).toggleClass('active'),
            $('.main-nav-list').slideToggle();
        return false;
    });
    var link = $('.menu-link');
    var link_active = $('.menu-link_active');
    var menu = $('.menu-list');
    var nav_link = $('.menu-list a');

    link.click(function() {
        link.toggleClass('menu-link_active');
        menu.toggleClass('menu-list-active');
    });

	// DROPDOWN
    $('.header__nav .dropdown').hover(function() {
        $(this).find('ul:first').stop(true, true).delay(200).fadeIn(500);
    }, function() {
        $(this).find('ul').stop(true, true).delay(200).fadeOut(500);
    });

    $('.header__nav .sub').hover(function() {
        $(this).toggleClass('dropdown__item-active');
    });

    $('.menu-list li.dropdown > a  ').on('click', function(event) {

	    event.preventDefault();
	    var t = $(this);
	    $(".menu-list li.dropdown > a").removeClass('active');
	    $(this).toggleClass('active');

	    var element = t.closest('li');
	    if (element.hasClass('active')) {
	        element.removeClass('active');
	        element.find('li').removeClass('active');
	        $(this).removeClass('active');
	        element.find('ul').slideUp();

	    } else {

	        element.addClass('active');
	        element.children('ul').slideDown();
	        element.siblings('li').children('ul').slideUp();
	        element.siblings('li').removeClass('active');
	        element.siblings('li').find('li').removeClass('active');
	        element.siblings('li').find('ul').slideUp();

	    }

});
    /*	
    if($('.styled').length) {
    	$('.styled').styler();
    };
    if($('.fancybox').length) {
    	$('.fancybox').fancybox({
    		margon  : 10,
    		padding  : 10
    	});
    };
    if($('.slick-slider').length) {
    	$('.slick-slider').slick({
    		dots: true,
    		infinite: false,
    		speed: 300,
    		slidesToShow: 4,
    		slidesToScroll: 4,
    		responsive: [
    			{
    			  breakpoint: 1024,
    			  settings: {
    				slidesToShow: 3,
    				slidesToScroll: 3,
    				infinite: true,
    				dots: true
    			  }
    			},
    			{
    			  breakpoint: 600,
    			  settings: "unslick"
    			}				
    		]
    	});
    };
    if($('.scroll').length) {
    	$(".scroll").mCustomScrollbar({
    		axis:"x",
    		theme:"dark-thin",
    		autoExpandScrollbar:true,
    		advanced:{autoExpandHorizontalScroll:true}
    	});
    };
	
    */


    if ($('.slick-slider').length) {
        $('.slick-slider').slick({
            dots: true,
            dotsClass: "slick-slider__dots",
            infinite: false,
            speed: 300,
            arrows: true,
            prevArrow: '<div class="slick-slider__arrow prev"></div>',
            nextArrow: '<div class="slick-slider__arrow next"></div>',
            slidesToShow: 1,
            slidesToScroll: 1,

            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
           			
            ]
        });
    };
    /* components */


});
var handler = function() {

    var height_footer = $('footer').height();
    var height_header = $('header').height();
    //$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});


    var viewport_wid = viewport().width;
    var viewport_height = viewport().height;

    if (viewport_wid <= 991) {

    }

}
$(window).bind('load', handler);
$(window).bind('resize', handler);