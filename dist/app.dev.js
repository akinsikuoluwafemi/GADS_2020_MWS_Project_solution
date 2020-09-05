"use strict";

// selecting elements
var nameValue = document.querySelector("#name");
var latValue = document.querySelector("#lat");
var lngValue = document.querySelector("#lng");
var humidityValue = document.querySelector("#humidity");
var tempValue = document.querySelector("#temp");
var descValue = document.querySelector("#desc");
var presValue = document.querySelector("#pressure");
var windDgValue = document.querySelector("#wind-degree");
var windSpValue = document.querySelector("#wind-speed");
var inputField = document.querySelector("#input_field");
var form = document.querySelector("#form");
var weatherContent = document.querySelector("#weather-content");
var push = document.querySelector("#notification"); // getting the weather array from local storage

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
  var url = "https://api.openweathermap.org/data/2.5/weather?q=".concat(Location, "&appid=3684b0394f654d433041c59dfbdf9904");
  fetch(url).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data);
    WeatherArray.unshift(data);
    console.log(WeatherArray);
    localStorage.setItem("weatherdata", JSON.stringify(WeatherArray));
    setTimeout(function () {
      location.reload();
    }, 3500);
  })["catch"](function (error) {
    console.log(error);
  });
}; // function 2


var handleSubmit = function handleSubmit(e) {
  e.preventDefault();

  if (inputField.value.trim() === "") {
    alert("kindly enter a location");
  } else {
    GetWeather(inputField.value);
    getWeatherContent(WeatherArray);
    console.log(inputField.value, "I am submited");
    inputField.value = "";
  }
}; // event Listener => 'submit'


form.addEventListener("submit", handleSubmit); // push notifications

var displayConfirmNotification = function displayConfirmNotification() {
  if ("serviceWorker" in navigator) {
    var options = {
      body: "You successfully subscribed to our notification service",
      icon: "./logo.png",
      image: "./logo.png",
      dir: "ltr",
      tag: "confirm-notification",
      renotify: true,
      actions: [{
        action: "confirm",
        title: "Okay",
        icon: "./logo.png"
      }, {
        action: "cancel",
        title: "Cancel",
        icon: "./logo.png"
      }]
    };
    navigator.serviceWorker.ready.then(function (swreg) {
      swreg.showNotification("You successfully subscribed (from SW!)", options);
    });
  }
};

var notifyMe = function notifyMe() {
  Notification.requestPermission(function (result) {
    console.log("user choice", result);

    if (result !== "granted") {
      alert("Kindly enable notification");
    } else {
      displayConfirmNotification();
    }
  });
}; // Let's check if the browser supports notifications


if ("Notification" in window) {
  push.style.display = "block";
  push.addEventListener("click", notifyMe);
}