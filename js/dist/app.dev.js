"use strict";

// selecting elements
var nameValue = document.querySelector("#name");
var latValue = document.querySelector("#lat");
var lngValue = document.querySelector('#lng');
var humidityValue = document.querySelector('#humidity');
var tempValue = document.querySelector('#temp');
var descValue = document.querySelector('#desc');
var presValue = document.querySelector('#pressure');
var windDgValue = document.querySelector("#wind-degree");
var windSpValue = document.querySelector("#wind-speed");
var inputField = document.querySelector("#input_field");
var form = document.querySelector('#form');
var weatherContent = document.querySelector("#weather-content"); // getting the weather array from local storage

var WeatherArray = JSON.parse(localStorage.getItem("weatherdata")) || []; // load items

document.addEventListener("DOMContentLoaded", function () {
  getWeatherContent(WeatherArray);
  console.log(WeatherArray);
});

var getWeatherContent = function getWeatherContent(arr) {
  var mappedArr = arr.map(function (data) {
    return "<div class=\"col-12 col-md-6  col-lg-4 py-2\">\n                <div class=\"card\" >\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\" id=\"name\">".concat(data.name, "</h5>\n                        <h6 class=\"card-subtitle mb-2 text-muted\">Lat: <span id=\"lat\" class=\"badge badge-info\">").concat(data.coord.lat, "</span>, Lng: <span id=\"lng\" class=\"badge badge-info\">").concat(data.coord.lon, "</span> </h6>\n                        <p class=\"card-text\">Humidity: <span id=\"humidity\" style=\"color:cornflowerblue\">").concat(data.main.humidity, "</span>, Temp: <span id=\"temp\"\n                                style=\"color:cornflowerblue\">").concat(data.main.temp, "</span>, Desc:\n                            <span style=\"color:cornflowerblue\" id=\"desc\">").concat(data.weather.map(function (item) {
      return item.description;
    }), "</span> </p>\n                        <p class=\"card-text\">Pressure: <span style=\"color:cornflowerblue\" id=\"pressure\">").concat(data.main.pressure, "</span>, WDeg: <span\n                                style=\"color:cornflowerblue\" id=\"wind-degree\">").concat(data.wind.deg, "deg</span>,\n                            WSpeed: <span style=\"color:cornflowerblue\" id=\"wind-speed\">").concat(data.wind.speed, "</span></p>\n                        \n                    </div>\n                </div>\n            </div>");
  });
  mappedArr = mappedArr.join("");
  weatherContent.innerHTML = mappedArr;
}; // function 1


var GetWeather = function GetWeather(Location) {
  var url = "https://api.openweathermap.org/data/2.5/weather?q=".concat(Location, "&appid=914023c54fa48cb8be92d9179794a8ba");
  fetch(url).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data);
    WeatherArray.unshift(data);
    console.log(WeatherArray);
    localStorage.setItem('weatherdata', JSON.stringify(WeatherArray));
    setTimeout(function () {
      location.reload();
    }, 3500);
  })["catch"](function (error) {
    console.log(error);
  });
}; // function 2


var handleSubmit = function handleSubmit(e) {
  e.preventDefault();
  GetWeather(inputField.value);
  getWeatherContent(WeatherArray);
  console.log(inputField.value, 'I am submited');
  inputField.value = "";
}; // event Listener => 'submit'


form.addEventListener('submit', handleSubmit);