$(document).ready(function () {

    /*for sticky navigation */
    $('.js--section-features').waypoint(function (direction) {
        if (direction != 'down') {
            $('nav').removeClass('sticky-nav');
        } else {
            $('nav').addClass('sticky-nav');
        }
    }, {
        offset: '70px'
    });

    /*for scrolling effect to buttons*/
    $('.js--scroll-to-signup').click(function () {
        $('html,body').animate({scrollTop: $('.js--section-signup').offset().top},1000);
    })

    $('.js--scroll-to-features').click(function () {
        $('html,body').animate({scrollTop: $('.js--section-features').offset().top},1000);
    })


    /* Navigation Scrolling effect */

    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });


    /* Animation on scrolling */
    $('.js--wp-1').waypoint(function () {
        $('.js--wp-1').addClass('animate__animated animate__fadeInUp')
    }, {
        offset: '50%'
    })

    $('.js--wp-2').waypoint(function () {
        $('.js--wp-2').addClass('animate__animated animate__fadeInLeft')
    }, {
        offset: '50%'
    })

    $('.js--wp-3').waypoint(function () {
        $('.js--wp-3').addClass('animate__animated animate__pulse')
    }, {
        offset: '50%'
    })


});