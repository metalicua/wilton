'use strict';

$(document).ready(function(){
    // Slider
    $('.js_slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: $('.js_arrow_left'),
        nextArrow: $('.js_arrow_right'),
    });

// End Slider

// Responsive

    $(window).on('load resize', function () {

        if ($(window).width() <= '768'){
            $('.slider__discription').removeClass('col-4').addClass('col-8');
            $('.js_box').removeClass('col-6');
            $('.js_box_1').removeClass('col-8');
            $('.js_box_2').removeClass('col-4');
            $('.js_grid').removeClass('col');
            $('.js_col').removeClass('col-4');
            $('.js_footer-link').removeClass('col-4');
            $('.js_footer-col').removeClass('col-6');
            $('.js_footer-sm-col').removeClass('col-3');
            $('.school__btn').remove();
            $('.school__button').append('<a href="#" class="school__btn btn">learn more</a>')
        }
        if ($(window).width() > '768'){
            $('.slider__discription').addClass('col-4').removeClass('col-8');
            $('.js_box').addClass('col-6');
            $('.js_box_1').addClass('col-8');
            $('.js_box_2').addClass('col-4');
            $('.js_grid').addClass('col');
            $('.js_col').addClass('col-4');
            $('.js_footer-link').addClass('col-4');
            $('.js_footer-col').addClass('col-6');
            $('.js_footer-sm-col').addClass('col-3');
            $('.school__btn').remove();
            $('.school__button').append('<a href="#" class="school__btn btn">Learn More About The Wilton School</a>')
        }

    });

// End responsive

    $('.mobile-menu').on('click', function() {
        $('.js_navigation-mobile').toggleClass('show');
        $('body').toggleClass('no-scroll');

    });

    $('.js_col').on('click', function(){
        var shop = $(this).attr('data');

        $('.js_col img').removeClass('show');
        
        $(this)
            .find('img')
            .toggleClass('show');
    });

    $('.js_footer_btn').on('click', function(){
       
        $('html, body')
            .animate({scrollTop:$('.header')
            .position().top}, 3000);
    });

    $('.footer__menu').on('click', function() {
        $('.js_footer_mob-box').toggleClass('show');
    });


});