// 取得按鈕回傳值
function getParameterByName(name, url = window.location.href) {
    const urlParams = new URLSearchParams(window.location.search);
    const value = urlParams.get('value');
    
    return value;
}

// 項目, 球員, 成績
function draw_bar(t, f, n){
    const ctx = document.getElementById('hitter_num_Chart').getContext('2d');

    const BarChart = new Chart(ctx, {
        type: 'bar', 
        data: {
            labels: f, 
            datasets: [{
                label: t,
                data: n,
                backgroundColor: [
                    'rgba(197, 89, 7, 0.4)',
                    'rgba(199, 95, 16, 0.4)',
                    'rgba(201, 101, 25, 0.4)',
                    'rgba(203, 107, 34, 0.4)',
                    'rgba(205, 113, 43, 0.4)',
                    'rgba(207, 119, 52, 0.4)',
                    'rgba(209, 125, 61, 0.4)',
                    'rgba(211, 131, 70, 0.4)',
                    'rgba(213, 137, 79, 0.4)',
                    'rgba(215, 143, 88, 0.4)',
                    'rgba(217, 149, 97, 0.4)',
                    'rgba(219, 155, 106, 0.4)',
                    'rgba(221, 161, 115, 0.4)',
                    'rgba(223, 167, 124, 0.4)',
                    'rgba(225, 173, 133, 0.4)',
                    'rgba(227, 179, 142, 0.4)',
                    'rgba(229, 185, 151, 0.4)',
                    'rgba(231, 191, 160, 0.4)',
                    'rgba(233, 197, 169, 0.4)',
                    'rgba(235, 203, 178, 0.4)'
                ],
                borderColor: [
                    'rgba(197, 89, 7, 1)',
                    'rgba(199, 95, 16, 1)',
                    'rgba(201, 101, 25, 1)',
                    'rgba(203, 107, 34, 1)',
                    'rgba(205, 113, 43, 1)',
                    'rgba(207, 119, 52, 1)',
                    'rgba(209, 125, 61, 1)',
                    'rgba(211, 131, 70, 1)',
                    'rgba(213, 137, 79, 1)',
                    'rgba(215, 143, 88, 1)',
                    'rgba(217, 149, 97, 1)',
                    'rgba(219, 155, 106, 1)',
                    'rgba(221, 161, 115, 1)',
                    'rgba(223, 167, 124, 1)',
                    'rgba(225, 173, 133, 1)',
                    'rgba(227, 179, 142, 1)',
                    'rgba(229, 185, 151, 1)',
                    'rgba(231, 191, 160, 1)',
                    'rgba(233, 197, 169, 1)',
                    'rgba(235, 203, 178, 1)'
                ],
                borderWidth: 1 
            }]
        },
        options: {
            scales: {
                x: {
                    ticks: {
                        font: {
                            size: 14 // x軸
                        }
                        ,color: '#ffffff'
                    }
                },
                y: {
                    ticks: {
                        font: {
                            size: 14 // Y軸
                        }
                        ,color: '#ffffff'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 16 // 圖例
                        }
                        ,color: '#ffffff'
                    }
                }
            }
        }
           
    });
}


function draw_bar_percent(t, f, n){
    const ctx = document.getElementById('hitter_percent_Chart').getContext('2d');

    const BarChart = new Chart(ctx, {
        type: 'bar', 
        data: {
            labels: f, 
            datasets: [{
                label: t,
                data: n,
                backgroundColor: [
                    'rgba(197, 89, 7, 0.4)',
                    'rgba(199, 95, 16, 0.4)',
                    'rgba(201, 101, 25, 0.4)',
                    'rgba(203, 107, 34, 0.4)',
                    'rgba(205, 113, 43, 0.4)',
                    'rgba(207, 119, 52, 0.4)',
                    'rgba(209, 125, 61, 0.4)',
                    'rgba(211, 131, 70, 0.4)',
                    'rgba(213, 137, 79, 0.4)',
                    'rgba(215, 143, 88, 0.4)',
                    'rgba(217, 149, 97, 0.4)',
                    'rgba(219, 155, 106, 0.4)',
                    'rgba(221, 161, 115, 0.4)',
                    'rgba(223, 167, 124, 0.4)',
                    'rgba(225, 173, 133, 0.4)',
                    'rgba(227, 179, 142, 0.4)',
                    'rgba(229, 185, 151, 0.4)',
                    'rgba(231, 191, 160, 0.4)',
                    'rgba(233, 197, 169, 0.4)',
                    'rgba(235, 203, 178, 0.4)'
                ],
                borderColor: [
                    'rgba(197, 89, 7, 1)',
                    'rgba(199, 95, 16, 1)',
                    'rgba(201, 101, 25, 1)',
                    'rgba(203, 107, 34, 1)',
                    'rgba(205, 113, 43, 1)',
                    'rgba(207, 119, 52, 1)',
                    'rgba(209, 125, 61, 1)',
                    'rgba(211, 131, 70, 1)',
                    'rgba(213, 137, 79, 1)',
                    'rgba(215, 143, 88, 1)',
                    'rgba(217, 149, 97, 1)',
                    'rgba(219, 155, 106, 1)',
                    'rgba(221, 161, 115, 1)',
                    'rgba(223, 167, 124, 1)',
                    'rgba(225, 173, 133, 1)',
                    'rgba(227, 179, 142, 1)',
                    'rgba(229, 185, 151, 1)',
                    'rgba(231, 191, 160, 1)',
                    'rgba(233, 197, 169, 1)',
                    'rgba(235, 203, 178, 1)'
                ],
                borderWidth: 1 
            }]
        },
        options: {
            scales: {
                x: {
                    ticks: {
                        font: {
                            size: 14 // x軸
                        }
                        ,color: '#ffffff'
                    }
                },
                y: {
                    ticks: {
                        font: {
                            size: 14 // Y軸
                        }
                        ,color: '#ffffff'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 16 // 圖例
                        }
                        ,color: '#ffffff'
                    }
                }
            }
        }
           
    });
}



function draw_PR(f, n){
    const ctx = document.getElementById('hitter_PR_Chart').getContext('2d');

        var RadarChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['打擊率', '長打率', '純長打率', '上壘率', '被保送率', '被三振率',  '三振保送比'], 
                datasets: [{
                    label: f + '打擊成績(PR值)',
                    data: n,
                    fill: true,
                    backgroundColor: 'rgba(221, 161, 115, 0.2)',
                    borderColor: 'rgb(197, 89, 7)',
                    pointBackgroundColor: 'rgb(197, 89, 7)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(197, 89, 7)'
                }]
            },
            options: {
                elements: {
                    line: {
                        borderWidth: 3
                    }
                },
                scales: {
                    r: {
                        angleLines: {
                            display: true
                        },
                        suggestedMin: 0,
                        suggestedMax: 100,
                        pointLabels: {
                            font: {
                                size: 16 // 標籤軸
                            },
                            color: '#ffffff'
                        },
                        ticks: {
                            font: {
                                size: 16 // 刻度
                            }
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.5)'
                        },
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            font: {
                                size: 16 // 圖例
                            },
                            color: '#ffffff' 
                        }
                    }
                }
            }
        });
    
           

}





const place_pair = 
    {'Tianmu':'天母',
    'Taipei':'台北',
    'XinZhuang':'新莊',
    'Taoyuan':'桃園',
    'longtan':'龍潭',
    'Hsinchu':'新竹',
    'Intercontinental':'洲際',
    'Taichung':'台中',
    'Yunlin':'斗六',
    'KANO':'嘉義市',
    'Chiayi':'嘉義縣',
    'Tainan':'台南',
    'Kaohsiung':'澄清湖',
    'Lide':'立德',
    'Pingtung':'屏東',
    'Yilan':'羅東',
    'Hualien':'花蓮',
    'Taitung' :'台東'}






window.onload = function() {
    const value = getParameterByName('value');
    if (value) {

        if (value === 'Tianmu') {
            document.getElementById('Tianmu').style.display = 'block';
              

        }else if(value === 'Taipei'){
            document.getElementById('Taipei').style.display = 'block';
            

        }else if(value === 'XinZhuang'){
            document.getElementById('XinZhuang').style.display = 'block';
            

        }else if(value === 'Taoyuan'){
            document.getElementById('Taoyuan').style.display = 'block';
            

        }else if(value === 'longtan'){
            document.getElementById('longtan').style.display = 'block';
            

        }else if(value === 'Hsinchu'){
            document.getElementById('Hsinchu').style.display = 'block';
            

        }else if(value === 'Intercontinental'){
            document.getElementById('Intercontinental').style.display = 'block';
            

        }else if(value === 'Taichung'){
            document.getElementById('Taichung').style.display = 'block';
            

        }else if(value === 'Yunlin'){
            document.getElementById('Yunlin').style.display = 'block';
            

        }else if(value === 'KANO'){
            document.getElementById('KANO').style.display = 'block';
            

        }else if(value === 'Chiayi'){
            document.getElementById('Chiayi').style.display = 'block';
            

        }else if(value === 'Tainan'){
            document.getElementById('Tainan').style.display = 'block';
            

        }else if(value === 'Kaohsiung'){
            document.getElementById('Kaohsiung').style.display = 'block';
            

        }else if(value === 'Lide'){
            document.getElementById('Lide').style.display = 'block';
            

        }else if(value === 'Pingtung'){
            document.getElementById('Pingtung').style.display = 'block';
            

        }else if(value === 'Yilan'){
            document.getElementById('Yilan').style.display = 'block';
            

        }else if(value === 'Hualien'){
            document.getElementById('Hualien').style.display = 'block';
            

        }else if(value === 'Taitung'){
            document.getElementById('Taitung').style.display = 'block';
            

        }
    }
}






