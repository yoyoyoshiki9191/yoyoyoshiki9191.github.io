// 参照元
// https://coco-factory.jp/ugokuweb/move01/4-1-6/

//SVGアニメーションの描画
var stroke;
stroke = new Vivus('mask', {//アニメーションをするIDの指定
    start:'manual',//自動再生をせずスタートをマニュアルに
    type: 'oneByOne',// アニメーションのタイプを設定
    duration: 200,//アニメーションの時間設定。数字が小さくなるほど速い
    forceRender: false,//パスが更新された場合に再レンダリングさせない
    animTimingFunction:Vivus.EASE_OUT,//動きの加速減速設定
}
);

const webStorage = function () {
    if (sessionStorage.getItem('visit')) {
      $("#loadingBg").css("display", "none");
    } else {
        sessionStorage.setItem('visit', 'true'); 
        $("#logoChocolat").fadeIn(1500);//上のロゴを1.５秒かけてフェードイン
        $("#loadingBg").delay(2500).fadeOut(1000);//ローディング画面を2.5秒待機してから1秒かけてフェードアウト
         $("#logoMemoire").delay(2500).fadeOut(1000);//下のロゴを2.5秒待機してから1秒かけてフェードアウト
        stroke.play();//SVGアニメーションの実行           
    }
  }
  webStorage();