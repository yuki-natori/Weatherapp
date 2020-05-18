// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require jquery3
//= require popper
//= require bootstrap

    $(document).ready(function() {
        $("#submit").click(function (e) {
            //JSONデータ取得 日本語で天気名を表示したいのでlang=ja として日本語表記データを取得
            $.post("http://api.openweathermap.org/data/2.5/weather?id=" + $("input[id='cityRadio']:checked").val() + "&appid=738f6e45ad62c0fc051bc61af420d576&lang=ja&units=metric",  
                function(json){
                    $("#weather").html(json.weather[0].description);
                    $("#humidity").html(json.main.humidity);
                    //lang=jaにすることで華氏から摂氏に変換することなく摂氏表示となる。小数点だけ丸める処理をする
                    $("#temp").html(Math.round(json.main.temp));

                    //天気に応じた天気アイコンを表示させる
                    switch (json.weather[0].main){
                    case 'Clouds':
                    $("#weatherMark").html("<img src='http://openweathermap.org/img/w/04d.png' >");
                    break;
                    case 'Snow':
                    $("#weatherMark").html("<img src='http://openweathermap.org/img/w/13d.png' >");
                    break;
                    case 'Rain':
                    $("#weatherMark").html("<img src='http://openweathermap.org/img/w/09d.png' >");
                    break;
                    case 'Clear':
                    $("#weatherMark").html("<img src='http://openweathermap.org/img/w/01d.png' >");
                    break;
                    case 'Fog':
                    $("#weatherMark").html("<img src='http://openweathermap.org/img/w/50d.png' >");
                    break;
                    case 'Mist':
                    $("#weatherMark").html("<img src='http://openweathermap.org/img/w/50n.png' >");
                    break;
                    case 'Haze':
                    $("#weatherMark").html("<img src='http://openweathermap.org/img/w/50d.png' >");
                    break;
                    default:
                    $("#weatherMark").html("<img src='http://openweathermap.org/img/w/01n.png' >");
                }
             }
        );
    });
});