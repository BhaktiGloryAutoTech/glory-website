/*-----------------------------------------------------------------------------------

    Theme Name: Avo
    Theme URI: http://
    Description: Creative Agency & Portfolio
    Author: UI-ThemeZ
    Author URI: http://themeforest.net/user/UI-ThemeZ
    Version: 1.0

-----------------------------------------------------------------------------------*/

$(function() {

    "use strict";


    /* ===============================  Navbar Menu  =============================== */

    var wind = $(window);

    wind.on("scroll", function() {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar"),
            logo = $(".navbar.change .logo> img");

        if (bodyScroll > 300) {

            navbar.addClass("nav-scroll");
            logo.attr('src', '../../../assets/img/2LOGO.png');

        } else {

            navbar.removeClass("nav-scroll");
            logo.attr('src', '../../../assets/img/2LOGO.png');
        }
    });



    $('.navbar .search .icon').on('click', function() {
        $(".navbar .search .search-form").fadeIn();
    });

    $('.navbar .search .search-form .close').on('click', function() {
        $(".navbar .search .search-form").fadeOut();
    });


    function noScroll() {
        window.scrollTo(0, 0);
    }

    wind.on("scroll", function() {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".topnav");

        if (bodyScroll > 300) {

            navbar.addClass("nav-scroll");

        } else {

            navbar.removeClass("nav-scroll");
        }
    });

    var open = false,
        navDark = $(".topnav.dark"),
        logoChan = $(".topnav.dark .logo img");

    $('.topnav .menu-icon').on('click', function() {
        open = !open;

        $('.hamenu').toggleClass("open");

        if (open) {

            $('.hamenu').animate({ left: 0 });

            $('.topnav .menu-icon .text').addClass('open');

            navDark.addClass("navlit");
            logoChan.attr('src', 'img/logo-light.png');

            window.addEventListener('scroll', noScroll);

        } else {

            $('.hamenu').delay(300).animate({ left: "-100%" });

            $('.topnav .menu-icon .text').removeClass('open');

            navDark.removeClass("navlit");
            logoChan.attr('src', 'img/logo-dark.png');

            window.removeEventListener('scroll', noScroll);
        }
    });

    $('.hamenu .menu-links .main-menu > li').on('mouseenter', function() {
        $(this).css("opacity", "1").siblings().css("opacity", ".5");
    });

    $('.hamenu .menu-links .main-menu > li').on('mouseleave', function() {
        $(".hamenu .menu-links .main-menu > li").css("opacity", "1");
    });


    $('.main-menu > li .dmenu').on('click', function() {
        $(".main-menu").addClass("gosub");
        $(this).parent().parent().find(".sub-menu").addClass("sub-open");
    });

    $('.main-menu .sub-menu li .sub-link.back').on('click', function() {
        $(".main-menu").removeClass("gosub");
        $(".main-menu .sub-menu").removeClass("sub-open");
    });

    /* ===============================  Swiper slider  =============================== */

    /* ===============================  Var Background image  =============================== */

    /* ===============================  slick Carousel  =============================== */

    /* ===============================  YouTubePopUp  =============================== */

    /* ===============================  parallaxie  =============================== */

    /* ===============================  justifiedGallery  =============================== */

    /* ===============================  skills-circle  =============================== */

    /* ===============================  countUp  =============================== */

    /* ===============================  tooltip  =============================== */

    $('[data-tooltip-tit]').hover(function() {
        $('<div class="div-tooltip-tit"></div>').text($(this).attr('data-tooltip-tit')).appendTo('body').fadeIn('slow');
    }, function() {
        $('.div-tooltip-tit').remove();
    }).mousemove(function(e) {
        $('.div-tooltip-tit').css({ top: e.pageY + 10, left: e.pageX + 20 })
    });
    $('[data-tooltip-sub]').hover(function() {
        $('<div class="div-tooltip-sub"></div>').text($(this).attr('data-tooltip-sub')).appendTo('body').fadeIn('slow');
    }, function() {
        $('.div-tooltip-sub').remove();
    }).mousemove(function(e) {
        $('.div-tooltip-sub').css({ top: e.pageY + 60, left: e.pageX + 20 })
    });

});


/* ===============================  Wow Animation  =============================== */
new WOW().init();

// === window When Loading === //



$(window).on("load", function() {


    /* ===============================  SPLITTING TEXT  =============================== */

    Splitting();


    /* ===============================  thumparallax  =============================== */

    var imageUp = document.getElementsByClassName('thumparallax');
    new simpleParallax(imageUp, {
        delay: 1,
        scale: 1.1
    });

    var imageDown = document.getElementsByClassName('thumparallax-down');
    new simpleParallax(imageDown, {
        orientation: 'down',
        delay: 1,
        scale: 1.1
    });


    /* ===============================  isotope Masonery  =============================== */

    /* ===============================  contact validator  =============================== */
});

/* ===============================  Hide / show navbar  =============================== */

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#navi').outerHeight();
$(window).on("scroll", function(event) {
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    if (st > lastScrollTop && st > navbarHeight) {
        $('#navi').css('top', '-100px');

    } else {

        if (st + $(window).height() < $(document).height()) {
            $('#navi').css('top', '0');
        }
    }

    lastScrollTop = st;
}

/* ===============================  Preloader page  =============================== */

paceOptions = {
    ajax: true,
    document: true,
    eventLag: false
};

Pace.on('done', function() {
    $('#preloader').addClass("isdone");
    $('.loading-text').addClass("isdone");
});
Pace.on('done', function() {
    $('#preloaderhm').addClass("isdone");
    $('.loading-text').addClass("isdone");
});
Pace.on('done', function() {
    $('#preloaderab').addClass("isdone");
    $('.loading-text').addClass("isdone");
});
Pace.on('done', function() {
    $('#preloaderse').addClass("isdone");
    $('.loading-text').addClass("isdone");
});
Pace.on('done', function() {
    $('#preloaderpo').addClass("isdone");
    $('.loading-text').addClass("isdone");
});
Pace.on('done', function() {
    $('#preloaderjt').addClass("isdone");
    $('.loading-text').addClass("isdone");
});
Pace.on('done', function() {
    $('#preloaderco').addClass("isdone");
    $('.loading-text').addClass("isdone");
});
Pace.on('done', function() {
    $('#preloadernt').addClass("isdone");
    $('.loading-text').addClass("isdone");
});
Pace.on('done', function() {
    $('#preloaderdt').addClass("isdone");
    $('.loading-text').addClass("isdone");
});

/* ===============================  Scroll back to top  =============================== */

$(document).ready(function() {
    "use strict";

    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function() {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 150;
    var duration = 550;
    jQuery(window).on('scroll', function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
        } else {
            jQuery('.progress-wrap').removeClass('active-progress');
        }
    });
    jQuery('.progress-wrap').on('click', function(event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    })
});

/* ===============================  Mouse effect  =============================== */

function mousecursor() {
    if ($("body")) {
        var setCursor = setInterval(function() {
            const e = document.querySelector(".cursor-inner"),
                t = document.querySelector(".cursor-outer");
            if (e != null && t != null) {
                let n, i = 0,
                    o = !1;
                window.onmousemove = function(s) {
                    o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
                }, $("body").on("mouseenter", "a, .cursor-pointer", function() {
                    e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
                }), $("body").on("mouseleave", "a, .cursor-pointer", function() {
                    $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
                }), e.style.visibility = "visible", t.style.visibility = "visible"
                clearInterval(setCursor);
            }
        }, 10);
    }
};

$(function() {
    mousecursor();
});
/* ===============================  fixed-slider  =============================== */


$(window).scroll(function() {

    /* ===============================  fade slideshow  =============================== */

    var scrolled = $(this).scrollTop();
    $('.fixed-slider .caption , .fixed-slider .capt .parlx').css({
        'transform': 'translate3d(0, ' + -(scrolled * 0.20) + 'px, 0)',
        'opacity': 1 - scrolled / 600
    });

});



/* ===============================  Swiper showcases with data  =============================== */


$('[data-carousel="swiper"]').each(function() {

    var containe = $(this).find('[data-swiper="container"]').attr('id');
    var pagination = $(this).find('[data-swiper="pagination"]').attr('id');
    var prev = $(this).find('[data-swiper="prev"]').attr('id');
    var next = $(this).find('[data-swiper="next"]').attr('id');
    var items = $(this).data('items');
    var autoplay = $(this).data('autoplay');
    var iSlide = $(this).data('initial');
    var loop = $(this).data('loop');
    var parallax = $(this).data('parallax');
    var space = $(this).data('space');
    var speed = $(this).data('speed');
    var center = $(this).data('center');
    var effect = $(this).data('effect');
    var direction = $(this).data('direction');
    var mousewheel = $(this).data('mousewheel');

    // Configuration
    var conf = {

    };

    // Responsive
    if ($(this).hasClass('showcase-grid')) {
        var conf = {

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },

            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 4,
                },
            }
        };
    };

    if ($(this).hasClass('showcase-carus')) {
        var conf = {

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },

            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                640: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 200,
                },
            }
        };
    };

    if ($(this).hasClass('showstyle')) {
        var conf = {

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        };
    };

    if (items) {
        conf.slidesPerView = items
    };
    if (autoplay) {
        conf.autoplay = autoplay
    };
    if (iSlide) {
        conf.initialSlide = iSlide
    };
    if (center) {
        conf.centeredSlides = center
    };
    if (loop) {
        conf.loop = loop
    };
    if (parallax) {
        conf.parallax = parallax
    };
    if (space) {
        conf.spaceBetween = space
    };
    if (speed) {
        conf.speed = speed
    };
    if (mousewheel) {
        conf.mousewheel = mousewheel
    };
    if (effect) {
        conf.effect = effect
    };
    if (direction) {
        conf.direction = direction
    };
    if (prev) {
        conf.prevButton = '#' + prev
    };
    if (next) {
        conf.nextButton = '#' + next
    };
    if (pagination) {
        conf.pagination = '#' + pagination,
            conf.paginationClickable = true
    };

    // Initialization
    if (containe) {
        var initID = '#' + containe;
        var init = new Swiper(initID, conf);
    };
});


// GET A CALL
$(document).ready(function() {
    $('.getcall-btn').click(function() {
        $(".Getacall-sec").toggleClass('active');
    });
});


// $('#GetCallForm').validate({
//     rules: {
//         contactno: {
//             required: true,
//             digits: true,
//             minlength: 10
//         }
//     }
// });
// $('.btn-get-call').click(function() {
//     if ($('#GetCallForm').valid()) {
//         Swal.fire({
//             type: "success",
//             title: "Done!",
//             text: "Your request has been sent successfully.",
//             confirmButtonClass: "btn btn-success"
//         }).then(function(confirm) {
//             $('#get-contactno').val('');
//         });
//     }
// });

// WhatsApp Script //
function fnOpenWhatsApp(text, number) {
    var whatsAppNumber = number;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        var whatsapp_url = 'whatsapp://send?text=' + text + '&phone=' + whatsAppNumber
        window.location.href = whatsapp_url;
    } else {
        window.open(
            'https://web.whatsapp.com/send?phone=' + whatsAppNumber + '&text=' + text,
            '_blank'
        );
    }
}

// chat-boot

var Tawk_API = Tawk_API || {},
    Tawk_LoadStart = new Date();
(function() {
    var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/6024d850918aa261273dd467/1eu7upvpp';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();

// success modal