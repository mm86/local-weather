


var city;
//get city name of the user
$.ajax({
  url: "http://ip-api.com/json",
  type: 'GET',
  success: function(json)
  {
    console.log("My country is: " + json.region);
    city = json.city + "," + json.region;
    getWeather();
  },
  error: function(err)
  {
    alert("Request failed, error= " + err);
  }
});

function getWeather(){
//get data from Open Weather API

var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=30645bead81bd8838e95049b6fc75374';

$.ajax({
    url: url,
    dataType: 'jsonp',

}).done(function(results) {
    console.log("inside open weather");
    var img = "http://openweathermap.org/img/w/" + results.weather[0].icon + ".png";
    $('.city').html(city);
    $('.weather').prepend('<img src='+img+'>');
    $('.degree').html(results.main.temp);

})

.fail(function() {
    console.log("Data could not be retrieved from Weather API");
});

}