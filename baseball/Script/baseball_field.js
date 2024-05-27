// 取得按鈕回傳值
function getParameterByName(name, url = window.location.href) {
    const urlParams = new URLSearchParams(window.location.search);
    const value = urlParams.get('value');
    
    return value;
}

// 調整頁面
// var field;
// var numbers;

// window.onload = function() {
//     var data = '{"洲際":{"Lamigo":86,"義大":67,"兄弟":14,"統一7-ELEVEn獅":155,"中信兄弟":428,"富邦悍將":109,"樂天桃猿":60,"味全龍":39},"台東":{"中信兄弟":4,"樂天桃猿":3,"統一7-ELEVEn獅":1},"澄清湖":{"兄弟":11,"義大":166,"統一7-ELEVEn獅":135,"Lamigo":80,"中信兄弟":112,"富邦悍將":56,"味全龍":38,"樂天桃猿":12},"台南":{"Lamigo":83,"統一7-ELEVEn獅":420,"兄弟":9,"義大":46,"中信兄弟":107,"富邦悍將":84,"樂天桃猿":59,"味全龍":32},"天母":{"兄弟":14,"統一7-ELEVEn獅":73,"義大":22,"Lamigo":23,"中信兄弟":87,"富邦悍將":40,"味全龍":124,"樂天桃猿":31},"桃園":{"Lamigo":421,"統一7-ELEVEn獅":205,"義大":81,"兄弟":21,"中信兄弟":185,"富邦悍將":126,"樂天桃猿":240,"味全龍":45},"新竹":{"兄弟":9,"統一7-ELEVEn獅":15,"義大":11,"Lamigo":11,"中信兄弟":14,"味全龍":2,"富邦悍將":2},"羅東":{"中信兄弟":1,"統一7-ELEVEn獅":1},"台中":{"Lamigo":2,"義大":5,"統一7-ELEVEn獅":3},"斗六":{"Lamigo":19,"統一7-ELEVEn獅":33,"兄弟":4,"義大":9,"中信兄弟":16,"富邦悍將":12,"味全龍":18,"樂天桃猿":3},"新莊":{"兄弟":31,"義大":57,"Lamigo":92,"統一7-ELEVEn獅":189,"中信兄弟":207,"富邦悍將":390,"樂天桃猿":65,"味全龍":43},"屏東":{"Lamigo":5,"統一7-ELEVEn獅":14,"兄弟":3,"義大":4,"中信兄弟":4},"花蓮":{"兄弟":2,"義大":7,"Lamigo":8,"中信兄弟":24,"統一7-ELEVEn獅":52,"富邦悍將":15,"味全龍":12,"樂天桃猿":4},"嘉義市":{"統一7-ELEVEn獅":24,"義大":5,"Lamigo":10,"兄弟":2,"中信兄弟":11,"富邦悍將":6,"味全龍":7,"樂天桃猿":3}}'
//     var data = JSON.parse(data);
//     const value = getParameterByName('value');
//     if (value) {

//         if (value === 'Tianmu') {
//             document.getElementById('Tianmu').style.display = 'block';
//             field = Object.keys(data['天母']);
//             numbers = Object.values(data['天母']);


//         }else if(value === 'XinZhuang'){
//             document.getElementById('XinZhuang').style.display = 'block';
//         }else if(value === 'taichung'){
//             document.body.style.backgroundColor = 'yellow';
//         }
//     }
// }


var field;
var numbers;
var data = '{"斗六":{"統一7-ELEVEn獅":63,"Lamigo":46,"兄弟":42,"興農":41,"中信":22,"味全龍":18,"中信兄弟":16,"富邦悍將":12,"義大":9,"誠泰":4,"米迪亞":4,"樂天桃猿":3},"新莊":{"富邦悍將":390,"統一7-ELEVEn獅":312,"兄弟":227,"中信兄弟":207,"Lamigo":186,"興農":109,"中信":101,"誠泰":69,"樂天桃猿":65,"義大":57,"味全龍":43,"米迪亞":38},"花蓮":{"統一7-ELEVEn獅":53,"中信兄弟":24,"富邦悍將":15,"味全龍":12,"Lamigo":11,"興農":8,"義大":7,"兄弟":6,"中信":5,"樂天桃猿":4,"誠泰":3},"台中":{"興農":233,"兄弟":78,"Lamigo":73,"統一7-ELEVEn獅":72,"中信":27,"誠泰":19,"米迪亞":11,"義大":5},"台南":{"統一7-ELEVEn獅":691,"Lamigo":165,"中信兄弟":107,"富邦悍將":84,"兄弟":72,"興農":71,"樂天桃猿":59,"義大":46,"味全龍":32,"中信":31,"誠泰":20,"米迪亞":10},"台東":{"中信兄弟":4,"統一7-ELEVEn獅":3,"樂天桃猿":3,"兄弟":2,"誠泰":1,"Lamigo":1,"中信":1,"興農":1},"嘉義市":{"統一7-ELEVEn獅":31,"Lamigo":20,"兄弟":20,"興農":14,"中信":11,"中信兄弟":11,"味全龍":7,"誠泰":6,"富邦悍將":6,"義大":5,"米迪亞":4,"樂天桃猿":3},"屏東":{"統一7-ELEVEn獅":27,"Lamigo":22,"兄弟":21,"興農":7,"義大":4,"中信兄弟":4,"中信":1},"澄清湖":{"Lamigo":313,"統一7-ELEVEn獅":215,"義大":166,"中信兄弟":112,"兄弟":81,"興農":67,"富邦悍將":56,"味全龍":38,"中信":30,"誠泰":20,"樂天桃猿":12,"米迪亞":10},"天母":{"統一7-ELEVEn獅":131,"兄弟":126,"味全龍":124,"中信兄弟":87,"Lamigo":68,"興農":60,"富邦悍將":40,"中信":31,"樂天桃猿":31,"義大":22,"誠泰":18,"米迪亞":10},"桃園":{"Lamigo":536,"統一7-ELEVEn獅":262,"樂天桃猿":240,"中信兄弟":185,"富邦悍將":126,"兄弟":82,"義大":81,"興農":47,"味全龍":45},"羅東":{"Lamigo":14,"誠泰":13,"興農":12,"兄弟":11,"統一7-ELEVEn獅":10,"中信":8,"米迪亞":3,"中信兄弟":1},"洲際":{"中信兄弟":428,"統一7-ELEVEn獅":175,"富邦悍將":109,"Lamigo":103,"義大":67,"樂天桃猿":60,"興農":44,"味全龍":39,"兄弟":35},"新竹":{"兄弟":95,"興農":66,"Lamigo":62,"統一7-ELEVEn獅":55,"中信":32,"誠泰":27,"中信兄弟":14,"義大":11,"米迪亞":8,"味全龍":2,"富邦悍將":2}}';
var data = JSON.parse(data);


function draw_pie(f, n){
    var ctx = document.getElementById('myPieChart').getContext('2d');

    var data = {
        labels: f,
        datasets: [{
            label: '棒球隊出賽場次',
            data: n,
            backgroundColor: [
                'rgba(205, 78, 1, 0.4)',
                'rgba(210, 96, 22, 0.4)',
                'rgba(215, 114, 43, 0.4)',
                'rgba(220, 132, 64, 0.4)',
                'rgba(225, 150, 85, 0.4)',
                'rgba(230, 168, 106, 0.4)',
                'rgba(235, 186, 127, 0.4)',
                'rgba(240, 204, 148, 0.4)',
                'rgba(245, 222, 169, 0.4)',
                'rgba(250, 240, 190, 0.4)'
            ],
            borderColor: [
                'rgba(205, 78, 1, 1)',
                'rgba(210, 96, 22, 1)',
                'rgba(215, 114, 43, 1)',
                'rgba(220, 132, 64, 1)',
                'rgba(225, 150, 85, 1)',
                'rgba(230, 168, 106, 1)',
                'rgba(235, 186, 127, 1)',
                'rgba(240, 204, 148, 1)',
                'rgba(245, 222, 169, 1)',
                'rgba(250, 240, 190, 1)'
            ],
            borderWidth: 3
        }]
    };

    // 配置
    const config = {
        type: 'pie',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        font: {
                            size: 16,
                            family: 'Arial, sans-serif'
                        },
                        color: '#ffffff',
                        padding: 20
                    }
                }
            }
        },
    };

    

    var myPieChart = new Chart(ctx, config);
}







window.onload = function() {
    const value = getParameterByName('value');
    if (value) {

        if (value === 'Tianmu') {
            document.getElementById('Tianmu').style.display = 'block';
            field = Object.keys(data['天母']);
            numbers = Object.values(data['天母']);
            draw_pie(field, numbers);

            

            document.getElementById('game_num').innerText = '總球賽場次: ' + numbers.reduce((a,b)=>a+b) / 2 + '場';

            document.getElementById('hitter_button').href = 'hitter.html?value=' + value;
            document.getElementById('pitcher_button').href = 'pitcher.html?value=' + value;
            
            

        }else if(value === 'XinZhuang'){
            document.getElementById('XinZhuang').style.display = 'block';
            field = Object.keys(data['新莊']);
            numbers = Object.values(data['新莊']);
            draw_pie(field, numbers);

            document.getElementById('game_num').innerText = '總球賽場次: ' + numbers.reduce((a,b)=>a+b) / 2 + '場';

            document.getElementById('hitter_button').href = 'hitter.html?value=' + value;
            document.getElementById('pitcher_button').href = 'pitcher.html?value=' + value;


        }else if(value === 'Taoyuan'){
            document.getElementById('Taoyuan').style.display = 'block';
            field = Object.keys(data['桃園']);
            numbers = Object.values(data['桃園']);
            draw_pie(field, numbers);

            document.getElementById('game_num').innerText = '總球賽場次: ' + numbers.reduce((a,b)=>a+b) / 2 + '場';

            document.getElementById('hitter_button').href = 'hitter.html?value=' + value;
            document.getElementById('pitcher_button').href = 'pitcher.html?value=' + value;


        }else if(value === 'Hsinchu'){
            document.getElementById('Hsinchu').style.display = 'block';
            field = Object.keys(data['新竹']);
            numbers = Object.values(data['新竹']);
            draw_pie(field, numbers);

            document.getElementById('game_num').innerText = '總球賽場次: ' + numbers.reduce((a,b)=>a+b) / 2 + '場';

            document.getElementById('hitter_button').href = 'hitter.html?value=' + value;
            document.getElementById('pitcher_button').href = 'pitcher.html?value=' + value;


        }else if(value === 'Intercontinental'){
            document.getElementById('Intercontinental').style.display = 'block';
            field = Object.keys(data['洲際']);
            numbers = Object.values(data['洲際']);
            draw_pie(field, numbers);

            document.getElementById('game_num').innerText = '總球賽場次: ' + numbers.reduce((a,b)=>a+b) / 2 + '場';

            document.getElementById('hitter_button').href = 'hitter.html?value=' + value;
            document.getElementById('pitcher_button').href = 'pitcher.html?value=' + value;


        }else if(value === 'Taichung'){
            document.getElementById('Taichung').style.display = 'block';
            field = Object.keys(data['台中']);
            numbers = Object.values(data['台中']);
            draw_pie(field, numbers);

            document.getElementById('game_num').innerText = '總球賽場次: ' + numbers.reduce((a,b)=>a+b) / 2 + '場';

            document.getElementById('hitter_button').href = 'hitter.html?value=' + value;
            document.getElementById('pitcher_button').href = 'pitcher.html?value=' + value;


        }else if(value === 'Yunlin'){
            document.getElementById('Yunlin').style.display = 'block';
            field = Object.keys(data['斗六']);
            numbers = Object.values(data['斗六']);
            draw_pie(field, numbers);

            document.getElementById('game_num').innerText = '總球賽場次: ' + numbers.reduce((a,b)=>a+b) / 2 + '場';

            document.getElementById('hitter_button').href = 'hitter.html?value=' + value;
            document.getElementById('pitcher_button').href = 'pitcher.html?value=' + value;


        }else if(value === 'KANO'){
            document.getElementById('KANO').style.display = 'block';
            field = Object.keys(data['嘉義市']);
            numbers = Object.values(data['嘉義市']);
            draw_pie(field, numbers);

            document.getElementById('game_num').innerText = '總球賽場次: ' + numbers.reduce((a,b)=>a+b) / 2 + '場';

            document.getElementById('hitter_button').href = 'hitter.html?value=' + value;
            document.getElementById('pitcher_button').href = 'pitcher.html?value=' + value;


        }else if(value === 'Tainan'){
            document.getElementById('Tainan').style.display = 'block';
            field = Object.keys(data['台南']);
            numbers = Object.values(data['台南']);
            draw_pie(field, numbers);

            document.getElementById('game_num').innerText = '總球賽場次: ' + numbers.reduce((a,b)=>a+b) / 2 + '場';

            document.getElementById('hitter_button').href = 'hitter.html?value=' + value;
            document.getElementById('pitcher_button').href = 'pitcher.html?value=' + value;


        }else if(value === 'Kaohsiung'){
            document.getElementById('Kaohsiung').style.display = 'block';
            field = Object.keys(data['澄清湖']);
            numbers = Object.values(data['澄清湖']);
            draw_pie(field, numbers);

            document.getElementById('game_num').innerText = '總球賽場次: ' + numbers.reduce((a,b)=>a+b) / 2 + '場';

            document.getElementById('hitter_button').href = 'hitter.html?value=' + value;
            document.getElementById('pitcher_button').href = 'pitcher.html?value=' + value;


        }else if(value === 'Pingtung'){
            document.getElementById('Pingtung').style.display = 'block';
            field = Object.keys(data['屏東']);
            numbers = Object.values(data['屏東']);
            draw_pie(field, numbers);

            document.getElementById('game_num').innerText = '總球賽場次: ' + numbers.reduce((a,b)=>a+b) / 2 + '場';

            document.getElementById('hitter_button').href = 'hitter.html?value=' + value;
            document.getElementById('pitcher_button').href = 'pitcher.html?value=' + value;


        }else if(value === 'Yilan'){
            document.getElementById('Yilan').style.display = 'block';
            field = Object.keys(data['羅東']);
            numbers = Object.values(data['羅東']);
            draw_pie(field, numbers);

            document.getElementById('game_num').innerText = '總球賽場次: ' + numbers.reduce((a,b)=>a+b) / 2 + '場';

            document.getElementById('hitter_button').href = 'hitter.html?value=' + value;
            document.getElementById('pitcher_button').href = 'pitcher.html?value=' + value;


        }else if(value === 'Hualien'){
            document.getElementById('Hualien').style.display = 'block';
            field = Object.keys(data['花蓮']);
            numbers = Object.values(data['花蓮']);
            draw_pie(field, numbers);

            document.getElementById('game_num').innerText = '總球賽場次: ' + numbers.reduce((a,b)=>a+b) / 2 + '場';

            document.getElementById('hitter_button').href = 'hitter.html?value=' + value;
            document.getElementById('pitcher_button').href = 'pitcher.html?value=' + value;


        }else if(value === 'Taitung'){
            document.getElementById('Taitung').style.display = 'block';
            field = Object.keys(data['台東']);
            numbers = Object.values(data['台東']);
            draw_pie(field, numbers);

            document.getElementById('game_num').innerText = '總球賽場次: ' + numbers.reduce((a,b)=>a+b) / 2 + '場';

            document.getElementById('hitter_button').href = 'hitter.html?value=' + value;
            document.getElementById('pitcher_button').href = 'pitcher.html?value=' + value;


        }
    }
}


