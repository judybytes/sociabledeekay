// Smooth scrolling on navigation links
$(document).ready(function() {
    $('nav ul li a').click(function(e) {
        e.preventDefault();
        var targetSection = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(targetSection).offset().top
        }, 1000);
    });
});

// Toggle visibility of sections
$(document).ready(function() {
    $('nav ul li a').click(function(e) {
        e.preventDefault();
        var targetSection = $(this).attr('href');
        $('.visible').removeClass('visible').addClass('hidden');
        $(targetSection).removeClass('hidden').addClass('visible');
    });
});
