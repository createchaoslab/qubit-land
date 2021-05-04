$(document).ready(function () {

    $('.header__burger').click(function (event) {
        $('.header__burger, .menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.reviews__items').slick({
        arrows: true,
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                    slidesToScroll: 2,
              }
            },
            {
              breakpoint: 867,
              settings: {
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 688,
              settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });

});