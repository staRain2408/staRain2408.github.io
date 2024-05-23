
$(document).ready(function() {
    $.getJSON('/Script/baseball_field.json', function(data) {
        console.log(data);
        // 你可以在這裡處理讀取到的 JSON 資料
    });
});


