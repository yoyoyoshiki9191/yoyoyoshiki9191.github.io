$(function(){

    // ハンバーガーボタンの動き
    $('.btn-trigger').on('click', function() {
        $(this).toggleClass('active');
        $("#nav-area").toggleClass('nav-open');//ナビゲーションにnav-openクラスを付与
        $("#navBgGray").toggleClass('navBgGray-on');

        return false;

    });

    $("#nav-area a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".btn-trigger").removeClass('active');//ボタンの activeクラスを除去し
    $("#nav-area").removeClass('nav-open');//ナビゲーションのnav-openクラスも除去

        



    });

    // 画面幅が変更されたとき
    // $(window).resize(function(){
    //     // ウインドウ幅768px未満なら
    //     if (window.matchMedia('(max-width: 768px)').matches) {

    //     }else{

    //     }
    // });
});
