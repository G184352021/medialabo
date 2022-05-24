// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する

hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    kaisu++;
    let yoso = 4;       // 第5回課題:テキストボックスの数値をここに代入
    // 課題3-1：ここの判定処理を作成する．
    //        ページに表示する方法はまだ習っていないので
    //        判定結果はコンソールに出力すること

    let log=document.querySelector('div#result');
    let a;
    a.textContent=kaisu+"回目の予想:"+yoso;
    h1.insertAdjacentElement('afterend',a);
    if(yoso===kotae){
        a.textContent="正解です。おめでとう！";
        h1.insertAdjacentElement('afterend',a);
    }else if(yoso<kotae){
        ("まちがい。答えはもっと大きいです");
    }else if(yoso>kotae){
        a.textContent="まちがい。答えはもっと小さいです";
        h1.insertAdjacentElement('afterend',a);
    }
    if(kaisu>4){
        a.textContent="答えは"+kotae+"でした。すでにゲームは終わっています。";
        h1.insertAdjacentElement('afterend',a);
    }
    

}