
// selecting elements
const nameValue = document.querySelector("#name");
const latValue = document.querySelector("#lat");
const lngValue = document.querySelector('#lng');
const humidityValue = document.querySelector('#humidity')
const tempValue = document.querySelector('#temp');
const descValue = document.querySelector('#desc');
const presValue = document.querySelector('#pressure');
const windDgValue = document.querySelector("#wind-degree");
const windSpValue = document.querySelector("#wind-speed");
const inputField = document.querySelector("#input_field");
const form = document.querySelector('#form');
const weatherContent = document.querySelector("#weather-content");


let WeatherArray = JSON.parse(localStorage.getItem("weatherdata")) || [];

weatherContent.innerHTML = `<p>Yes</p>`
const getWeatherContent = (arr) => {
  
  let mappedArr = arr.map(data => {
    console.log(data)

    const { name, coord: { lon, lat }, weather, wind: { deg, speed }, main: { humidity, pressure, temp } } = data;
    console.log(name)
    // weather.map(item => {
    //   return item.description
    // })

     `<div class="col-10 col-md-6 m-auto col-lg-4 py-2">
                <div class="card" >
                    <div class="card-body">
                        <h5 class="card-title" id="name">${name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Lat: <span id="lat" class="badge badge-info">${lat}</span>, Lng: <span id="lng" class="badge badge-info">${lng}</span> </h6>
                        <p class="card-text">Humidity: <span id="humidity" style="color:cornflowerblue">{}</span>, Temp: <span id="temp"
                                style="color:cornflowerblue">300</span>, Desc:
                            <span style="color:cornflowerblue" id="desc">Overly cloudy</span> </p>
                        <p class="card-text">Pressure: <span style="color:cornflowerblue" id="pressure">200</span>, WDeg: <span
                                style="color:cornflowerblue" id="wind-degree">240deg</span>,
                            WSpeed: <span style="color:cornflowerblue" id="wind-speed">4.46</span></p>
                        
                    </div>
                </div>
            </div>`





  })
  return mappedArr
}

getWeatherContent(WeatherArray)

// function 1
const GetWeather = (Location) => {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${Location}&appid=914023c54fa48cb8be92d9179794a8ba`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      
      WeatherArray.push(data)
      console.log(data);
      console.log(WeatherArray);
      localStorage.setItem('weatherdata', JSON.stringify(WeatherArray))

    })
    .catch((error) => {
      console.log(error);
    });
};


// function 2
const handleSubmit = (e) => {
    e.preventDefault();
    
    GetWeather(inputField.value);

    console.log(inputField.value ,'I am submited')
    inputField.value = ""

}

// event Listener => 'submit'
form.addEventListener('submit', handleSubmit);