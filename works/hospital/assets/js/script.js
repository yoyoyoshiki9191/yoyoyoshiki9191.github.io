$(window).on('load resize', function () {
	// ウィンドウの幅によりナビゲーション表示を切り替える
	var width = window.innerWidth;
	var border = 766;
	if (width <= border) {
		$(".header_nav").hide();
		$(".hamburger_line").removeClass("open");
	} else {
		$(".header_nav").show();
	}
});
$(function () {
	/* ページトップへ戻るボタン
	---------------------------------------------*/
	var pagetop = $('#page_top');
	// ボタン非表示
	pagetop.hide();
	// 100px スクロールしたらボタン表示
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			pagetop.fadeIn();
		} else {
			pagetop.fadeOut();
		}
	});
	pagetop.click(function () {
		$('body, html').animate({ scrollTop: 0 }, 500);
		return false;
	});
	/* ハンバーガーボタン
	---------------------------------------------*/
	// ハンバーガーボタン押下時
	$(".hamburger_btn").click(function () {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$(".hamburger_line").removeClass("open");
			$('.header_nav').slideUp();
		} else {
			$(this).addClass('active');
			$(".hamburger_line").toggleClass("open");
			$('.header_nav').slideDown();
		}
	});
	// ハンバーガーメニューのリンク押下時
	$(".header_nav ul li a").click(function () {
		$(".header_nav").fadeOut();
		$(".hamburger_line").removeClass("open");
		$("html").removeClass("no-scroll");
	});

	/* ページ内リンク遷移時の高さ調整
	---------------------------------------------*/
	var headerHeight = $('header').outerHeight()//ヘッダの高さ
	// ページ外リンク
	var urlHash = location.hash;
	if (urlHash) {
		$('body,html').stop().scrollTop(0);
		setTimeout(function () {
			var target = $(urlHash);
			var position = target.offset().top - headerHeight;
			$('body,html').stop().animate({ scrollTop: position }, 500);
		}, 100);
	}
	// ページ内リンク
	$('a[href^="#"]').click(function () {
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top - headerHeight; //ヘッダの高さ分位置をずらす
		$("html, body").animate({ scrollTop: position }, 500, "swing");
		return false;
	});

	/* お知らせページ アコーディオン開閉
	---------------------------------------------*/
	$(".toggle").on("click", function() {
		$(this).next().slideToggle();
		$(this).children("dd").toggleClass("active");
	});
		
	// お知らせページの内容非表示
	$(".childmenu").hide();

	// HOMEから特定のお知らせのリンク押下時、お知らせページで対象の内容を表示する
	if ("#news1" === urlHash || "#news2" === urlHash || "#news3" === urlHash) {
		$(location.hash).find(".toggle").next().slideToggle();
		$(location.hash).find("dd").toggleClass("active");
	}
	/* IEのヘッダー固定
	---------------------------------------------*/
	var elem = document.querySelectorAll('.sticky');
	Stickyfill.add(elem);
});