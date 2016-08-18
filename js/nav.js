$(document).ready(function() {
   var nav = $('#headerNav');
    $(window).scroll(function() {
        if (nav.offset().top < 100){
            nav.removeClass('black_nav');
        } else {
            nav.addClass('black_nav');
        }
    })
});