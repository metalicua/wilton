'use strict';

$(document).ready(function(){
    // Slider
    var $sliderBox = $('.js_slider');
    var $arrowLeft = $('.js_arrow_left');
    var $arrowRight = $('.js_arrow_right');
    var $header = $('.header');

    $($sliderBox).slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: $($arrowLeft),
        nextArrow: $($arrowRight),
    });

// End Slider

// Responsive

    $(window).on('load resize', function () {
        var $col_4 = $('col-4');
        var $col_3 = $('col-3');
        var $col_6 = $('col-6');
        var $col_8 = $('col-8');

        if ($(window).width() <= '768'){
            $('.slider__discription').removeClass($col_4).addClass($col_8);
            $('.js_box').removeClass($col_6);
            $('.js_box_1').removeClass($col_8);
            $('.js_box_2').removeClass($col_4);
            $('.js_grid').removeClass('col');
            $('.js_col').removeClass($col_4);
            $('.js_footer-link').removeClass( $col_4);
            $('.js_footer-col').removeClass($col_6);
            $('.js_footer-sm-col').removeClass($col_3);
            $('.school__btn').remove();
            $('.school__button').append('<a href="#" class="school__btn btn">learn more</a>')
        }
        if ($(window).width() > '768'){
            $('.slider__discription').addClass( $col_4).removeClass('col-8');
            $('.js_box').addClass($col_6);
            $('.js_box_1').addClass($col_8);
            $('.js_box_2').addClass( $col_4);
            $('.js_grid').addClass('col');
            $('.js_col').addClass( $col_4);
            $('.js_footer-link').addClass( $col_4);
            $('.js_footer-col').addClass($col_6);
            $('.js_footer-sm-col').addClass($col_3);
            $('.school__btn').remove();
            $('.school__button').append('<a href="#" class="school__btn btn">Learn More About The Wilton School</a>')

            $(window).scroll(function(){
        
                if ( $(this).scrollTop() > 0 ) {
                    $($header).addClass('fixed');
                    $('.promo__container').css({'margin-top': '175px'});
                } else {
                    $($header).removeClass('fixed');
                    $('.promo__container').css({'margin-top': '0'});
                }
            });
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
            .animate({scrollTop:$($header)
            .position().top}, 3000);
    });

    $('.footer__menu').on('click', function() {
        $('.js_footer_mob-box').toggleClass('show');
    });

    
      


});