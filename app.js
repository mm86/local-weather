var city;
//get city name of the user
$.ajax({
        url: "http://ip-api.com/json",
        type: 'GET',
    })
    .done(function(response) {
        city = response.city + " , " + response.region;
        getWeather();
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        alert("Request failed, error= " + errorThrown);
    })

function getWeather() {
    //get data from Open Weather API
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=30645bead81bd8838e95049b6fc75374';

    $.ajax({
        url: url,
        dataType: 'jsonp',

    }).done(function(response) {
        var img = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
        $('.city').html(city);
        $('.weather').prepend('<img src=' + img + '>');
        $('.degree').html(response.main.temp);

    })

    .fail(function(jqXHR, textStatus, errorThrown) {
        alert("Request failed, error= " + errorThrown);
    });

}
