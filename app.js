
//on page load, display a quote
$.ajax({
      url: "http://api.forismatic.com/api/1.0/",
      jsonp: "jsonp",
      dataType: "jsonp",
      data: {
        method: "getQuote",
        lang: "en",
        format: "jsonp"
      }
    })
    .done(result)
    .fail(errorHandling);

//on clicking "new quote" button, display a new quote
$('.new-quote').click(function() {
  $.ajax({
      url: "http://api.forismatic.com/api/1.0/",
      jsonp: "jsonp",
      dataType: "jsonp",
      data: {
        method: "getQuote",
        lang: "en",
        format: "jsonp"
      }
    })
    .done(result)
    .fail(errorHandling);
});

function result(response) {
  console.log(response);
  $('.quote').html(JSON.stringify(response.quoteText));
  $('.person').html(JSON.stringify(response.quoteAuthor));
}

function errorHandling(jqxhr, textStatus, err) {
  console.log("Request Failed: " + textStatus + ", " + err);
}

//on clicking "Twitter" button, open the twitter link
$('.twitter').click(function() {
  var quote = $('.quote').text();
  var person = $('.person').text();
  window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quote + '" ' + person));

});







