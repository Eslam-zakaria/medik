$(document).ready(function () {
    "use strict";

    /* ---------------------------------------------
     Loader Screen
    --------------------------------------------- */
    
    $(window).load(function () {
        $("body").css('overflow-y', 'auto');
        $('.loader0').fadeOut(1000);
    });

});

(function($) {
    var size;
	
		//SMALLER HEADER WHEN SCROLL PAGE
    function smallerMenu() {
        var sc = $(window).scrollTop();
        if (sc > 40) {
            $('#header-sroll').addClass('small');
        }else {
            $('#header-sroll').removeClass('small');
        }
    }

    // VERIFY WINDOW SIZE
    function windowSize() {
        size = $(document).width();
        if (size >= 991) {
            $('body').removeClass('open-menu');
            $('.hamburger-menu .bar').removeClass('animate');
        }
    };

     // ESC BUTTON ACTION
    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            $('.bar').removeClass('animate');
            $('body').removeClass('open-menu');
            $('header .desk-menu .menu-container .menu .menu-item-has-children a ul').each(function( index ) {
                $(this).removeClass('open-sub');
            });
        }
    });

    $('#cd-primary-nav > li').hover(function() {
        $whidt_item = $(this).width();
        $whidt_item = $whidt_item-8;

        $prevEl = $(this).prev('li');
        $preWidth = $(this).prev('li').width();
        var pos = $(this).position();
        pos = pos.left+4;
        $('header .desk-menu .menu-container .menu>li.line').css({
            width:  $whidt_item,
            left: pos,
            opacity: 1
        });
    });

     // ANIMATE HAMBURGER MENU
    $('.hamburger-menu').on('click', function() {
        $('.hamburger-menu .bar').toggleClass('animate');
        if($('body').hasClass('open-menu')){
            $('body').removeClass('open-menu');
        }else{
            $('body').toggleClass('open-menu');
        }
    });

    $('header .desk-menu .menu-container .menu .menu-item-has-children ul').each(function(index) {
        $(this).append('<li class="back"><a href="#">رجوع </a></li>');
    });

    // RESPONSIVE MENU NAVIGATION
    $('header .desk-menu .menu-container .menu .menu-item-has-children > a').on('click', function(e) {
        e.preventDefault();
        if(size <= 991){
            $(this).next('ul').addClass('open-sub');
        }
    });

    // CLICK FUNCTION BACK MENU RESPONSIVE
    $('header .desk-menu .menu-container .menu .menu-item-has-children ul .back').on('click', function(e) {
        e.preventDefault();
        $(this).parent('ul').removeClass('open-sub');
    });

    $('body .over-menu').on('click', function() {
        $('body').removeClass('open-menu');
        $('.bar').removeClass('animate');
    });

    $(document).ready(function(){
        windowSize();
    });

    $(window).scroll(function(){
        smallerMenu();
    });

    $(window).resize(function(){
        windowSize();
    });

})(jQuery);
$(document).ready(function() {

var mydir= $("html").css("direction");
var  rtlVal;
if (mydir == 'rtl') {
   rtlVal = true;
} else {
   rtlVal = false
}
// start client
$('.owl-client ').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    rtl: rtlVal,
    dots: false,
    autoplay:true,
    items: 1,
    navText: [
        '<i class="fas fa-chevron-right"></i>',
        '<i class="fas fa-chevron-left"></i>'
    ],
});

$('.owl-partner').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    rtl: rtlVal,
    dots: false,
    autoplayTimeout: 3500,
	autoplay: true,
    navText: [
        '<i class="fas fa-long-arrow-alt-right"></i>',
        '<i class="fas fa-long-arrow-alt-left"></i>'
    ],
    // autoplay:true,
    // autoplayTimeout:5000,
    // autoplayHoverPause:true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    },

});
//Scroll to top
$(window).on('scroll', function () {
    'use strict';
    if ($(this).scrollTop() != 0) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
});
$('#back-to-top').on('click', function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
});

});