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



    let c=document.querySelector('div#result');
    let a=document.querySelector('span#kaisuu');
    a.textContent=kaisu;
    let b=document.querySelector('span#yoso');
    b.textContent=yoso;
    
    if(yoso===kotae){
        c.textContent="正解です。おめでとう！";
        
    }else if(yoso<kotae){
        c.textContent="まちがい。答えはもっと大きいです";
    }else if(yoso>kotae){
        c.textContent="まちがい。答えはもっと小さいです";
        
    }
    if(kaisu>4){
        c.textContent="答えは"+kotae+"でした。すでにゲームは終わっています。";
    }
    c.insertAdjacentElement('afterend',c);

}