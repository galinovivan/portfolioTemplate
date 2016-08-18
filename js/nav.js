$(document).ready(function() {
   var nav = $('.navbar-collapse');
    $(window).scroll(function() {
        if (nav.offset().top < 500) {
            nav.removeClass('black_nav');
        } else {
            nav.addClass('black_nav');
        }
    })
});