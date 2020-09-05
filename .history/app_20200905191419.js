// selecting elements
const nameValue = document.querySelector("#name");
const latValue = document.querySelector("#lat");
const lngValue = document.querySelector("#lng");
const humidityValue = document.querySelector("#humidity");
const tempValue = document.querySelector("#temp");
const descValue = document.querySelector("#desc");
const presValue = document.querySelector("#pressure");
const windDgValue = document.querySelector("#wind-degree");
const windSpValue = document.querySelector("#wind-speed");
const inputField = document.querySelector("#input_field");
const form = document.querySelector("#form");
const weatherContent = document.querySelector("#weather-content");
const push = document.querySelector("#notification");


// getting the weather array from local storage
let WeatherArray = JSON.parse(localStorage.getItem("weatherdata")) || [];

// load items
document.addEventListener("DOMContentLoaded", function () {
  getWeatherContent(WeatherArray);
  console.log(WeatherArray);
});

const getWeatherContent = (arr) => {
  let mappedArr = arr.map((data) => {
    return `<div class="col-12 col-md-6  col-lg-4 py-2">
                <div class="card" >
                    <div class="card-body">
                        <h5 class="card-title" id="name">${data.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Lat: <span id="lat" class="badge badge-info">${
                          data.coord.lat
                        }</span>, Lng: <span id="lng" class="badge badge-info">${
      data.coord.lon
    }</span> </h6>
                        <p class="card-text">Humidity: <span id="humidity" style="color:cornflowerblue">${
                          data.main.humidity
                        }</span>, Temp: <span id="temp"
                                style="color:cornflowerblue">${
                                  data.main.temp
                                }</span>, Desc:
                            <span style="color:cornflowerblue" id="desc">${data.weather.map(
                              (item) => item.description
                            )}</span> </p>
                        <p class="card-text">Pressure: <span style="color:cornflowerblue" id="pressure">${
                          data.main.pressure
                        }</span>, WDeg: <span
                                style="color:cornflowerblue" id="wind-degree">${
                                  data.wind.deg
                                }deg</span>,
                            WSpeed: <span style="color:cornflowerblue" id="wind-speed">${
                              data.wind.speed
                            }</span></p>
                        
                    </div>
                </div>
            </div>`;
  });
  mappedArr = mappedArr.join("");
  weatherContent.innerHTML = mappedArr;
};

// function 1
const GetWeather = (Location) => {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${Location}&appid=3684b0394f654d433041c59dfbdf9904`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      WeatherArray.unshift(data);
      console.log(WeatherArray);
      localStorage.setItem("weatherdata", JSON.stringify(WeatherArray));
      setTimeout(() => {
        location.reload();
      }, 3500);
    })
    .catch((error) => {
      console.log(error);
    });
};

// function 2
const handleSubmit = (e) => {
  e.preventDefault();
  if(inputField.value.trim() === ''){
    alert("kindly enter a location");
    
  }else {
    GetWeather(inputField.value);
    getWeatherContent(WeatherArray);
    console.log(inputField.value, "I am submited");
    inputField.value = "";

  }

};

// event Listener => 'submit'
form.addEventListener("submit", handleSubmit);


// push notifications
push.addEventListener('click', notifyMe)


function notifyMe() {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
    push
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification("Hi there!");
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification("We will send updates when it matters most");
      }
    });
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them any more.
}
