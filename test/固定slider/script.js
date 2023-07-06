// slider
$('.slider img:nth-child(n+2)').hide();// 2枚目以降の画像を初期状態で非表示
setInterval(function() {
  $(".slider img:first-child").fadeOut(1500);// 1枚目の画像を2秒かけてフェードアウト
  $(".slider img:nth-child(2)").fadeIn(1500);// 2枚目の画像を2秒かけてフェードイン
  $(".slider img:first-child").appendTo(".slider");// 画像の1枚目を「slider」内の最後に移動
}, 3000);// 括弧内の処理を4秒おきに繰り返し実行