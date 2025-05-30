const tree = {
  q: "温かい料理が食べたいですか？",
  yes: {
    q: "ご飯ものが食べたいですか？",
    yes: {
      q: "和食が良いですか？",
      yes: { result: "カツ丼", recipe: "ご飯に揚げたカツを卵とじでのせる。" },
      no: { result: "ガパオライス", recipe: "鶏ひき肉とバジルを炒めてご飯にのせる。" }
    },
    no: {
      q: "麺類がいいですか？",
      yes: {
        q: "こってりしたものが好き？",
        yes: { result: "味噌ラーメン", recipe: "味噌スープと炒め野菜で仕上げる。" },
        no: { result: "うどん", recipe: "かけだしでシンプルに仕上げる。" }
      },
      no: {
        result: "グラタン",
        recipe: "ホワイトソースとマカロニを混ぜてチーズで焼く。"
      }
    }
  },
  no: {
    q: "冷たい料理が食べたい？",
    yes: {
      q: "さっぱりしたサラダ系？",
      yes: { result: "冷やし中華", recipe: "冷やした中華麺に具材をトッピング。" },
      no: { result: "冷製パスタ", recipe: "トマトやバジルを使った冷製パスタ。" }
    },
    no: {
      q: "パン系の軽食？",
      yes: {
        q: "甘いのが好き？",
        yes: { result: "フレンチトースト", recipe: "卵液に浸して焼く。" },
        no: { result: "サンドイッチ", recipe: "ハムや野菜をパンにはさむ。" }
      },
      no: { result: "おにぎり", recipe: "ご飯に具を入れて握る。" }
    }
  }
};

let current = tree;

function handleAnswer(answer) {
  if (current.result) return;

  current = answer ? current.yes : current.no;

  if (current.result) {
    document.getElementById("question").style.display = "none";
    document.getElementById("buttons").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerHTML = `
      <h2>🍛 あなたにおすすめの料理は：</h2>
      <h3>${current.result}</h3>
      <p><strong>レシピ：</strong>${current.recipe}</p>
    `;
  } else {
    document.getElementById("question").textContent = current.q;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("question").textContent = tree.q;
});
