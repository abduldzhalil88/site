$(function () {

    $('.reviews__slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
        responsive: [
            {
              breakpoint: 1240,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
    })

    $('.header__menu-btn').on('click', function(){
        $('.header__inner nav').slideToggle();
    })

})