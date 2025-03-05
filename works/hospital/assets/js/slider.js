$(function() {
	var $slide = $(".slide")
	.slick({
	  fade: true,    // fedeオン
	  speed: 1500,   // 画像切り替えにかかる時間（ミリ秒）
	  autoplaySpeed: 4000,   // 自動スライド切り替え速度
	  arrows: false,         // 矢印表示・非表示
	  autoplay: true,        // 自動再生
	  slidesToShow: 1,       // スライド表示数
	  slidesToScroll: 1,     // スライドする数
	  infinite: true         // 無限リピート オン・オフ
	});
});
