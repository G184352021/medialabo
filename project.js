let b = document.querySelector('button#world');
b.addEventListener('click', sendRequest);


// 通信を開始する処理
function sendRequest() {
let math;
let x;
    let y=document.querySelectorAll('input[name="world"]');
    for(math of y){
        if(math.checked){
            x=math.value;
        }
    }

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

    let toshi=document.querySelector('div#tosi');
    toshi.textContent='都市名:'+data.name;

    let iremono;
    let r;
    let i=document.querySelectorAll('input[name="know"]');
    let ul=document.createElement("ui");
    let div=document.querySelector("div#tosi");
    div.insertAdjacentElement("afterend",ul);
    for(r of i){
        if(r.checked){
            let li=document.createElement("li");
            iremono=r.value;
            if(iremono==='weather.description'){
                li.textContent='天気:'+ data.weather[0].description;
                ul.insertAdjacentElement("beforeend",li);
            }
            if(iremono==='main.humidity'){
                li.textContent='湿度:'+ data.main.humidity+"%";
                ul.insertAdjacentElement("beforeend",li);
            }
            if(iremono==='main.temp_max'){
                li.textContent='最高気温:'+ data.main.temp_max+"℃";
                ul.insertAdjacentElement("beforeend",li);
            }
            if(iremono==='main.temp_min'){
                li.textContent='最低気温:'+ data.main.temp_min+"℃";
                ul.insertAdjacentElement("beforeend",li);
            }
            if(iremono==='wind.speed'){
                li.textContent='風速:'+ data.wind.speed+"m/s";
                ul.insertAdjacentElement("beforeend",li);
            }
        }
        
    }
}
// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}
