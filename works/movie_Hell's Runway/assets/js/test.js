function run_flash(){
    $(".flash").css("opacity", "0.1");
    $(".flash").css("filter", "alpha(opacity=10)");
    $(".flash").fadeTo("middle", 1.0);
        // ハンバーガーメニューのアニメーション
        // $(function(){
        //     $('.btn-trigger').on('click', function() {
        //       $(this).toggleClass('active');
        //       return false;
        //     });
        //   });
}