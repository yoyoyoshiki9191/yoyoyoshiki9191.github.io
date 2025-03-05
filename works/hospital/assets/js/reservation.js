$(function () {
	/* WEB予約ページ 予約人数カウント
	---------------------------------------------*/
	var count = 0;
	$('.count').text(count);

	/* WEB予約ページ 現在時刻取得
	---------------------------------------------*/
	var now = new Date();
	var y = now.getFullYear();
	var m = now.getMonth() + 1;
	var d = now.getDate();
	var w = now.getDay();
	var h = now.getHours();
	var mi = now.getMinutes();
	$('#time').text(y + '年' + m + '月' + d + '日' + h + '時' + mi + '分');

	// 木曜日、日曜日以外の9h～12h
	if ((w != 0 && w !=4) && (9 <= h && h <= 12)) {
		$('#ampm').text("午前");
		
		// 木曜日、日曜日以外の13h～18h 
	} else if((w != 0 && w !=4) && (13 <= h && h <= 17)) {
		$('#ampm').text("午後");
	}else {
		$('#ampm').text("診療時間外");
		$('.count').text("-");
	}
});