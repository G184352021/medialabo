let i=document.querySelector('input[name="know"]');
    let math = i.value;
    let x;

    if(math==="カイロ"){
        x=360630;
    }else if(math==="モスクワ"){
        x=524901;
    }else if(math==="ヨハネスブルク"){
        x=993800;
    }else if(math==="北京"){
        x=1816670;
    }else if(math==="シンガポール"){
        x=1880252;
    }else if(math==="シドニー"){
        x=2147714;
    }else if(math==="ロンドン"){
        x=2643743;
    }else if(math==="パリ"){
        x=2968815;
    }else if(math==="リオデジャネイロ"){
        x=3451189;
    }else if(math==="ニューヨーク"){
        x=5128581;
    }else if(math==="ロサンゼルス"){
        x=5368361;
    }else if(math==="東京"){
        x=1850147;
    }

let b = document.querySelector('button#toshi');
b.addEventListener('click', sendRequest);


// 通信を開始する処理
function sendRequest() {

    // URL を設定
    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+x+'.json';

    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}

// 通信が成功した時の処理
function showResult(resp) {
    // サーバから送られてきたデータを出力
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    //都市名
    let toshi=document.querySelector('span#tosi');
    toshi.textContent='都市名:'+data.name;
    //天気
    let sora=document.querySelector('span#weather');
    sora.textContent='天気:'+data.weather.description;
    //湿度
    let situdo=document.querySelector('span#shitudo');
    situdo.textContent='湿度:'+data.main.humidity+'%';
    //最高気温
    let max=document.querySelector('span#max');
    max.textContent='最高気温:'+data.main.temp_max+'℃';
    //最低気温
    let min=document.querySelector('span#min');
    min.textContent='最低気温:'+data.main.temp_min+'℃';
}

// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}
