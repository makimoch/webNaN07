(function() {
  // 画像選択用のランダム
  function img() {
    num_img = Math.floor(Math.random() * (6 - 1) + 1);
    return num_img;
  }

  // レアリティに応じた画像をランダムで出す  ファイル名は"(レアリティ変数)+(1~5までの数字）.png"で呼び出す
  function gacha(rand) {
    img();
    const element = document.getElementById("result");
    element.insertAdjacentHTML(
      "afterbegin",
      `<div class="inner-box"><p>${rand}</p><img src="./pokeimage/${rand}${num_img}.png"></div>`
    );
  }

  // レアリティを決める関数
  function decide_rarity() {
    var num = Math.random();
    console.log(num);
    if (num < 0.01) {
      gacha("SSR");
    } else if (num < 0.09) {
      gacha("SR");
    } else {
      gacha("NR");
    }
  }

  // 1回だけガチャ
  const pull = document.getElementById("pull");
  pull.onclick = function() {
    decide_rarity();
  };

  // 10連ガチャ
  const pull10 = document.getElementById("pull10");
  pull10.onclick = function() {
    for (i = 0; i < 10; i++) {
      decide_rarity();
    }
  };
})();
