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


    if('serviceWorker' in navigator && 'SyncManager' in window){
      navigator.serviceWorker.ready
      .then((sw) => {
        
        let syncedData = {

  "coord": {
    "lon": -0.13,
    "lat": 51.51
  },
  "weather": [
    {
      "id": 300,
      "main": "Drizzle",
      "description": "light intensity drizzle",
      "icon": "09d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 280.32,
    "pressure": 1012,
    "humidity": 81,
    "temp_min": 279.15,
    "temp_max": 281.15
  },
  "visibility": 10000,
  "wind": {
    "speed": 4.1,
    "deg": 80
  },
  "clouds": {
    "all": 90
  },
  "dt": 1485789600,
  "sys": {
    "type": 1,
    "id": 5091,
    "message": 0.0103,
    "country": "GB",
    "sunrise": 1485762037,
    "sunset": 1485794875
  },
  "id": 2643743,
  "name": "London",
  "cod": 200
}
        }



        sw.sync.register('sync-new-weather-data');
      })
    }
    
  }
  





};

// event Listener => 'submit'
form.addEventListener("submit", handleSubmit);





