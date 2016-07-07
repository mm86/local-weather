var city;
//get city name of the user
$.ajax({
        url: "http://ip-api.com/json",
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
        $('.city').text(city);
        $('.degree').text(response.main.temp);
        $('.metric').text("ºC");
        $('.desc').text(response.weather[0].description);
        $('.weather').prepend('<img src=' + img + '>');
        

    })

    .fail(function(jqXHR, textStatus, errorThrown) {
        alert("Request failed, error= " + errorThrown);
    });

}
