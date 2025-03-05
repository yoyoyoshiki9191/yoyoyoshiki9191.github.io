$(function () {
	var webStorage = function () {
		if (sessionStorage.getItem('access')) {
		/*
		2回目以降アクセス時の処理
		*/
		$("#splash").addClass('is-active');
		$('#wrapper,#particles-js').css('opacity','1');
	} else {
		/*
		初回アクセス時の処理
		*/
		sessionStorage.setItem('access', 'true'); // sessionStorageにデータを保存
		$("#splash_logo").addClass('is-active'); // loadingアニメーションを表示
		setTimeout(function () {
		  // ローディングを数秒後に非表示にする
			$("#splash").addClass('is-active');
			$("#splash_logo").removeClass('is-active');
			$('body').addClass('appear');
		}, 1500); // ローディングを表示する時間
	}
	}
	webStorage();
});

// ハンバーガーメニューの自動クローズ
$('#hamburger_close a[href]').on('click', function(event) {
	$('.drawer_hidden').trigger('click');
});

//キラキラ
particlesJS("particles-js", {
	"particles":{
		"number":{
			"value":346,//この数値を変更すると星の数が増減できる
			"density":{
				"enable":true,
				"value_area":800
			}
		},
		"color":{
			"value":"#fff8e7"
		},
		"shape":{
			"type":"circle",//形状はcircleを指定
			"stroke":{
				"width":0
			},
			},
		"opacity":{
			"value":1,//シェイプの透明度
			"random":true,//シェイプの透明度をランダムにする
			"anim":{
				"enable":true,//シェイプの透明度をアニメーションさせる
				"speed":3,//シェイプの透明度をアニメーションさせる
				"opacity_min":0,//透明度の最小値０
				"sync":false//全てを同時にアニメーションさせない
			}
		},
		"size":{
			"value":2,
			"random":true,
			"anim":{
				"enable":false,
				"speed":4,
				"size_min":0.3,
				"sync":false
			}
		},
		"line_linked":{
			"enable":false,
		},
		"move":{
			"enable":true,
			"speed":120,//この数値を小さくするとゆっくりな動きになる
		"direction":"none",//方向指定なし
		"random":true,//動きはランダムに
		"straight":true,//動きをとどめる
			"out_mode":"out",
			"bounce":false,
			"attract":{
				"enable":false,
				"rotateX":600,
				"rotateY":600
			}
		}
	},
	"interactivity":{
		"detect_on":"canvas",
		"events":{
			"onhover":{
				"enable":false,
			},
			"onclick":{
				"enable":false,
			},
			"resize":true
		}
	},
	"retina_detect":true

});

$(function(){

    $(".alert").hide();

    $("#submitBtn").click(function(){

        var sendFlag=true;

        if(!$("#text").val()){
            $("#textSection .alert").show();
            $("#textSection .alert-after").hide();
            sendFlag=false;
        }else{
            $("#textSection .alert").hide();
        }


        if(!$("#textarea").val()){
            $("#textareaSection .alert").show();
			$("#textareaSection .alert-after").hide();
            sendFlag=false;
        }else{
            $("#textareaSection .alert").hide();
        }

        if(sendFlag==false){return false;}

    });

});

$(function(){

	$("button").click(function(){
		var target = $(this).attr("value");

		$(".news-container div").each(function(){
			$(this).animate({"opacity":0},300,function(){
				$(this).hide();
				if($(this).hasClass(target) || target == "all"){
					$(this).show();
					$(this).animate({"opacity":1},300);
				}
			});
		});

		$(".news_buttons li").removeClass("news_current");
		$(this).parent().addClass("news_current");

		$(".pagination-container").hide();

	});

});

$(function() {
	$('.news-container').paginathing({//親要素のclassを記述
		perPage: 5,//1ページあたりの表示件数
		activeClass: 'navi-active',//現在のページ番号に任意のclassを付与できます
		firstLast:false,
		prevNext:true,
	});
});

$(function(){

	$("#all").click(function(){

		$(function() {
			$('.news-container').paginathing({//親要素のclassを記述
				perPage: 5,//1ページあたりの表示件数
				activeClass: 'navi-active',//現在のページ番号に任意のclassを付与できます
				firstLast:false,
				prevNext:true,
			});
		});
	});
});

$(function(){

	$("button").click(function(){
		var target = $(this).attr("value");

		$("#list li").each(function(){
			$(this).animate({"opacity":0},300,function(){
				$(this).hide();
				if($(this).hasClass(target) || target == "all"){
					$(this).show();
					$(this).animate({"opacity":1},300);
				}
			});
		});

		$(".gallery_buttons li").removeClass("gallery_current");
		$(this).parent().addClass("gallery_current");

	});

});

$(function(){

	$("button").click(function(){
		var target = $(this).attr("value");

		$("#list li").each(function(){
			$(this).animate({"opacity":0},300,function(){
				$(this).hide();
				if($(this).hasClass(target) || target == "all"){
					$(this).show();
					$(this).animate({"opacity":1},300);
				}
			});
		});

		$(".works_buttons li").removeClass("works_current");
		$(this).parent().addClass("works_current");

	});

});

// ページトップへ戻る
$(".pagetop").on("click", function(){
	$("html,body").animate({scrollTop:0},"800");
});