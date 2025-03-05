$(function(){

    // メインビジュアルの切り替え
    $(".slider").slick({
        fade:true,
        autoplay:true,
        arrows:false,
        pauseOnFocus:false,
        pauseOnHover:false,
        autoplaySpeed:1000,
        speed:2000
    });

    // トップに戻るボタンの効果
    $(".to-top").hide();

    $(window).scroll(function(){
        if($(window).scrollTop() > 200){
            $(".to-top").fadeIn(500);
        }else{
            $(".to-top").fadeOut(500);
        }
    });

    // トップに戻るボタンのスムーススクロール
    $(".to-top a").click(function(){
        $("html,body").animate({scrollTop:0},500);
        return false;
    });

    // 次のコンテンツに誘導するボタンの効果
    $(window).on('load resize',function(){
        //ウィンドウの高さを取得する
        var targetY = $(window).height();
        
        //スクロールをクリックするとウィンドウの高さ分、下にスクロールする
        $('to_bottom a').on('click',function(){
            $("html,body").stop().animate({scrollTop: targetY}, 500, 'swing');
            return false;
        });
    });


    // フェードアップアニメーション
    function addClass_fadeUpActive(){
        // $(".fadeUp_trigger").hide();

        $(".fadeUp_trigger").each(function(){

            var frameIn = $(this).offset().top - $(window).height();

            if( frameIn <= $(window).scrollTop() - 10){

                $(this).addClass("fadeUp");
            }
        });
    }

    $(window).scroll(function(){
        addClass_fadeUpActive();
    });

    addClass_fadeUpActive();
    
    // ハンバーガーメニューの自動クローズ
    $('#hamburger_close a[href]').on('click', function(event) {
        $('.nav-burger').trigger('click');
    });

    // モーダルウィンドウ
    $(".js_open").click(function () {

        // 背景固定させるクラス付与
        $("body").addClass("no_scroll"); 
        
        // 何番目のキャプション（モーダルウィンドウ）か認識して
        // #overlayと.modal_windowをフェードイン
        var id = $(this).data('id'); 
        $('#overlay, .modal_window[data-id="modal' + id + '"]').fadeIn();

        return false;

    });

        // 画面内、画面外どこをクリックしても
        $('#overlay , .modal_window').click(function () {

        // 背景固定させるクラス削除
        $("body").removeClass("no_scroll");
            // overlayと.modal_windowをフェードアウト
            $('#overlay, .modal_window').fadeOut();
        });
    
    //ローディング画面を取得
    const loading = document.querySelector(".loading");

    //ページの読み込み完了時に処理を実行
    window.addEventListener("load", () => {
    //ローディング画面 SVGアニメーションの描画
    $(".shutter").css("opacity", "0.1");
    $(".shutter").css("filter", "alpha(opacity=10)");
    $(".shutter").fadeTo("middle", 1.0);
    //3秒後にローディング画面を非表示にする
    setTimeout(() => {
        loading.classList.add("loaded");
    }, 1000);
    });

    // 動画のモーダルウィンドウ、画面外をクリックして
    $('.movie_overlay').click(function () {

        // 背景固定させるクラス削除
        $("body").removeClass("no_scroll");
            // .movie_overlayをフェードアウト
            $('.movie_overlay').fadeOut();
        });

    // リンクをクリックすると、動画を表示
    $('#trailer').click(function () {
        $('.video-container iframe').fadeIn();
    });

});