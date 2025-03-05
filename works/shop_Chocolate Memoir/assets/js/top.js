$(function(){

    // slickのスライドショー
    $(".slider").slick({
        autoplay: true, // 自動再生ON
        fade: true, // フェードON
        arrows: false, // 矢印OFF
        pauseOnHover:false,     //ホバー時の再生停止をoff
        pauseOnFocus:false,     //フォーカス時の再生停止をoff
        speed: 3000, // スライド、フェードアニメーションの速度
        autoplaySpeed: 8000, // 自動再生速度
    });

    $(".slider").on('beforeChange',function(event, slick, currentSlide, nextSlide){
        if(nextSlide > 0 ) {
          $(".slider").slick('slickSetOption', 'autoplaySpeed', 5000, true)
        }
    });




});