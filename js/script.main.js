$('.navigatsiya div').on('click', () => {
  $('.navigatsiya div').toggleClass('active');
  $('.navigatsiya nav').toggleClass('open');
  $('.navigatsiya nav ul').toggleClass('show');
});
for (let a = 1; a <= $(".navigatsiya ul li").length; a++) {
  $(".navigatsiya ul li:nth-child(" + a + ")").css("animation-delay", "." + (a + 1) + "s");
}


$(function () {
  $('.slider-reviews').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
        adaptiveHeight: true,}
      }
    ]
  });
});