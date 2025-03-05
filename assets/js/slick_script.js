$(function () {
    $(".slider").slick({
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
      centerMode: false,
      dots: false,
      fade: true,
      pauseOnFocus:false,
      pauseOnHover:false,
      slidesToShow: 1,
      speed: 1500,
    });

    $slider.on('beforeChange',function(event, slick, currentSlide, nextSlide){
      if(nextSlide > 0 ) {
        $slider.slick('slickSetOption', 'autoplaySpeed', 3000, true)
      }
    })

    $slider.on('beforeChange',function(event, slick, currentSlide, nextSlide){
      if(nextSlide > 0 ) {
        $slider.slick('slickSetOption', 'autoplaySpeed', 3000, true)
      }
    })

});

$(function () {
  $(".news-slider").slick({
    arrows:false,
    autoplay:true,
    centerMode:true,
    centerPadding: "25%",
    cssEase:"ease-in-out",
    dots: true,
    slidesToShow: 1,
    speed: 2000,
  });

  $('.news-slider').on('beforeChange', function(){
    $('.slick-current').removeClass('shine');
  });

  $('.news-slider').on('afterChange', function(){
    $('.slick-current').addClass('shine');
  });

});

$(function () {
  $(".fc-slider").slick({
    arrows:true,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    slidesToShow: 1,
    speed: 1000,
  });

});

$(function () {
  $(".sche-slider").slick({
    arrows:false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll:1,
    speed: 3000,
    vertical:true,
  });

});