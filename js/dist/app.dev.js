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
var weatherContent = document.querySelector("#weather-content");
var WeatherArray = [];
console.log(weatherContent); // function 1

var GetWeather = function GetWeather(Location) {
  var url = "https://api.openweathermap.org/data/2.5/weather?q=".concat(Location, "&appid=914023c54fa48cb8be92d9179794a8ba");
  fetch(url).then(function (response) {
    return response.json();
  }).then(function (data) {
    WeatherArray.push(data);
    console.log(data);
    console.log(WeatherArray);
  })["catch"](function (error) {
    console.log(error);
  });
}; // function 2


var handleSubmit = function handleSubmit(e) {
  e.preventDefault();
  GetWeather(inputField.value);
  console.log(inputField.value, 'I am submited');
  inputField.value = "";
};

form.addEventListener('submit', handleSubmit);
console.log(WeatherArray);