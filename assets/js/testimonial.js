$(".testmonial_slider_area").owlCarousel({
    autoplay: true,
    // center: true,
    slideSpeed: 1000,
    autoplayTimeout: 6500,
    items: 3,
    loop: true,
    nav: true,
    navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
    margin: 30,
    dots: true,
    responsive: {
        0: {
            items: 1
          },
        320: {
            items: 1
        },
        600: {
            items: 1
        },
        800: {
            items: 2
        },
        
        1000: {
            items: 3
        }
    }

});
