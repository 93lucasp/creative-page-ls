$(function() {
    $('.box-white img').hide();




    $('#icon-menu').click(function() {
        $(this).toggleClass('open');
    });

    /* NAVBAR  EFFECT RESPONSIVE HAMBURGER */


    $(".menu-drop-down").hide();
    $("#icon-menu").click(function() {
        $(".menu-drop-down").slideToggle("slow", function() {

        });
    });

    $(".open").click(function() {
        closeResponsiveMenu();
    });
    var closeResponsiveMenu = function() {
        $(".menu-drop-down").slideToggle("slow", function() {

        });
    };
    /* END NAVBAR  EFFECT RESPONSIVE HAMBURGER */

    /* NAVBAR  EFFECT FROM TRANSPARENT TO BLACK */
    var scroll_pos = 0;
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 10) {
            $(window).scroll(function() {
                $("nav").css({
                    "background-color": '#000',
                    'transition': 'all 0.6s ease-out'
                }).fadeIn("slow");

            });
        } else {
            $(window).scroll(function() {
                $("nav").css({
                    "background-color": 'transparent'
                });
            });
        }
    });
    /* END NAVBAR  EFFECT FROM TRANSPARENT TO BLACK */

    /* CHECKING IF ELEMENT THAT PASS IS PRESENT ON SCROLLING */
    function isElementInViewport(elem) {
        var $elem = $(elem);
        var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
        var viewportTop = $(scrollElem).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        var elemTop = Math.round($elem.offset().top);
        var elemBottom = elemTop + $elem.height();
        return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
    }
    /* END CHECKING IF ELEMENT THAT PASS IS PRESENT ON SCROLLING */

    function checkAnimationInfo(classToAdd) {
        var $elem = $(classToAdd);
        // CALLING FUNCTION AND PASS AN ELEMENT IF ON SCROLL THE ELEMNT IS PRESENT ADD A CLASS
        if (isElementInViewport($elem)) {
            $elem.addClass('start');
        }
    }

    function checkAnimationColor(classToAdd) {
        var $elem = $(classToAdd);
        if (isElementInViewport($elem)) {
            // CALLING FUNCTION AND PASS AN ELEMENT IF ON SCROLL THE ELEMNT IS PRESENT ADD A CLASS
         
            $elem.addClass('animation');
        }

    }

    function checkAnimationImg(classToAdd) {
        var $elem = $(classToAdd);
        if (isElementInViewport($elem)) {
            // CALLING FUNCTION AND PASS AN ELEMENT IF ON SCROLL THE ELEMNT IS PRESENT ADD A CLASS
            $('.box-white img').show();
            $elem.addClass('animation');

        }
    }
    $(window).scroll(function() {
        // ON SCROLL CALLING ALL THE FUNCTIONS TO CHECK IF THE CLASS THAT I PASS IS THERE
        checkAnimationInfo(".wrapper-transition-box .box-client, .wrapper-transition-box .box-solution-challenge, .wrapper-transition-box .box-our-info");
        checkAnimationColor(".fig-block");
        checkAnimationColor(".box-font");
        checkAnimationColor(".fig-vertical");
        checkAnimationColor(".fig-horizontal");
        checkAnimationImg(".box-white");

    });
});
