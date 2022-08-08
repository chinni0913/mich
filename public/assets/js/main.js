$(function () {

    "use strict";

    //===== Prealoder

    $(window).on('load', function (event) {
        $('#preloader').delay(500).fadeOut(500);
    });


    //===== Sticky

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 5) {
            $(".navigation").removeClass("sticky");
        } else {
            $(".navigation").addClass("sticky");
        }
    });



    //===== Mobile Menu 

    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass('active');
    });

    $(".navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
    });
    var subMenu = $(".sub-menu-bar .navbar-nav .sub-menu");

    if (subMenu.length) {
        subMenu.parent('li').children('a').append(function () {
            return '<button class="sub-nav-toggler"> <i class="fa fa-angle-down"></i> </button>';
        });

        var subMenuToggler = $(".sub-menu-bar .navbar-nav .sub-nav-toggler");

        subMenuToggler.on('click', function () {
            $(this).parent().parent().children(".sub-menu").slideToggle();
            return false
        });

    }
    
    
    //===== Side Canvas

    $('.canvas-menu-open').on('click', function () {
        $(".canvas-area").addClass('open');
        $(".overlay").addClass('open');
    });

    $('.canvas-menu-close').on('click', function () {
        $(".canvas-area").removeClass("open");
        $(".overlay").removeClass("open");
    });

    $('.overlay').on('click', function () {
        $(".canvas-area").removeClass("open");
        $(".overlay").removeClass("open");
    });


    var lastClicked;
    $(".dw-menu").on('click', function (e) {

        $(this).siblings().toggle('slow');
        $(this).removeClass('b');

        if (lastClicked != $(this)) {
            if (lastClicked != undefined) {
                if (lastClicked.hasClass('b')) {
                    lastClicked.siblings().hide(1000);
                }
            }
        }

        lastClicked = $(this);
        lastClicked.addClass('b')
    });


    //===== Isotope Project 1

    $('.container').imagesLoaded(function () {
        var $grid = $('.grid').isotope({
            // options
            transitionDuration: '1s'
        });

        // filter items on button click
        $('.project-menu ul').on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });

        //for menu active class
        $('.project-menu ul li').on('click', function (event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });
    });




    //===== banner animation slick slider

    function mainSlider() {
        var BasicSlider = $('.banner-active');
        BasicSlider.on('init', function (e, slick) {
            var $firstAnimatingElements = $('.single-banner:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-banner[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        // BasicSlider.slick({
        //     autoplay: true,
        //     autoplaySpeed: 10000,
        //     dots: false,
        //     fade: true,
        //     arrows: true,
        //     prevArrow: '<span class="prev"><i class="fal fa-angle-left"></i></span>',
        //     nextArrow: '<span class="next"><i class="fal fa-angle-right"></i></span>',
        //     responsive: [
        //         {
        //             breakpoint: 1330,
        //             settings: {
        //                 arrows: false
        //             }
        //         }
        //     ]
        // });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();





    //===== seller Active slick slider
    // $('.client-active').slick({
    //     dots: true,
    //     infinite: true,
    //     autoplay: true,
    //     autoplaySpeed: 2800,
    //     arrows: false,
    //     speed: 2000,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     centerMode: true,
    //     centerPadding: 0,
    //     responsive: [
    //         {
    //             breakpoint: 1201,
    //             settings: {
    //                 slidesToShow: 3,
    //             }
    //     },
    //         {
    //             breakpoint: 992,
    //             settings: {
    //                 slidesToShow: 2,
    //             }
    //     },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 1,
    //             }
    //     },
    //         {
    //             breakpoint: 576,
    //             settings: {
    //                 slidesToShow: 1,
    //             }
    //     }
    //   ]
    // });




    //===== counter up
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    
    
    

    // Progress Bar
    if ($('.progress-line').length) {
        $('.progress-line').appear(function () {
            var el = $(this);
            var percent = el.data('width');
            $(el).css('width', percent + '%');
        }, {
            accY: 0
        });
    }
    if ($('.count-box').length) {
        $('.count-box').appear(function () {
            var $t = $(this),
                n = $t.find(".count-text").attr("data-stop"),
                r = parseInt($t.find(".count-text").attr("data-speed"), 10);

            if (!$t.hasClass("counted")) {
                $t.addClass("counted");
                $({
                    countNum: $t.find(".count-text").text()
                }).animate({
                    countNum: n
                }, {
                    duration: r,
                    easing: "linear",
                    step: function () {
                        $t.find(".count-text").text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $t.find(".count-text").text(this.countNum);
                    }
                });
            }

        }, {
            accY: 0
        });
    }



    //====== Magnific Popup

    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
    });


    //===== Magnific Popup

    $('.image-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    //===== Back to top

    // Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });


    //Animate the scroll to yop
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });


    //===== 


    //=====  Single Features Active
    $('.experiences-area').on('mouseover', '.single-experiences', function() {
        $('.single-experiences.active').removeClass('active');
        $(this).addClass('active');
    });


});
