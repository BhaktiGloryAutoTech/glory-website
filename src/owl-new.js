$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        items: 4,
    });

    // Custom Button
    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    });
    $('.customPreviousBtn').click(function() {
        owl.trigger('prev.owl.carousel');
    });

});