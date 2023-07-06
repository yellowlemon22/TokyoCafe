// ▼ハンバーガーメニュー
$(".openbtn1").click(function () {//ボタンがクリックされたら
  $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    $(".circle-bg").toggleClass('circleactive');//丸背景にcircleactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去
    $(".circle-bg").removeClass('circleactive');//丸背景のcircleactiveクラスを除去
});

// ▼slider-img
$('.slider img:nth-child(n+2)').hide();// 2枚目以降の画像を初期状態で非表示
setInterval(function() {
  $(".slider img:first-child").fadeOut(1000);// 1枚目の画像を2秒かけてフェードアウト
  $(".slider img:nth-child(2)").fadeIn(1000);// 2枚目の画像を2秒かけてフェードイン
  $(".slider img:first-child").appendTo(".slider");// 画像の1枚目を「slider」内の最後に移動
}, 3000);// 括弧内の処理を4秒おきに繰り返し実行

