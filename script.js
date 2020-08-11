function displayMovieInfo() {

    var citySearch = $(this).attr("data-name");
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" + citySearch + APIKey;
    var APIKey = "&appid=4b4a41c0bbf55aca9db7d6dd436cd577"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        var cityName = response.name;
        var temperature = response.main.humidity;
        var humidity = response.main.humidity;
        var windSpeed = response.wind.speed;
        var uvIndex = response.main.humidity;

    });
}


var cityLog = [];

function renderCity() {
    $("#city_log").empty();
    for (var i = 0; i < cityLog.length; i++) {
        var a = $("<button>");
        a.addClass("list-group-item");
        a.attr("data-name", cityLog[i]);
        a.text(cityLog[i]);
        $("#city_log").append(a);
    }
}

$("#city_search").on("click", function (event) {

    var city = $("#city_entered").val().trim();

    cityLog.push(city);

    renderCity();

});

renderCity();

// Search for city shows info for day and 5 day forecast
// Saves a list of city

//Get api

// API KEY 4b4a41c0bbf55aca9db7d6dd436cd577


// var queryURL = "https://api.openweathermap.org/data/2.5/weather?";
// var APIKey = "&appid=4b4a41c0bbf55aca9db7d6dd436cd577"



// $.ajax({
//     url: queryURL + "q=Allen" + apiKEY,
//     method: "GET"
// }).then(function (city) {
//     console.log(city);
// });
