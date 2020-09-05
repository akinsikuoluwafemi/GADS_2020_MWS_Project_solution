
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

const getWeatherDetails = (arr) => {
  
  let mappedArray = arr.map(data => {
    console.log(data)
    const { coord, weather, main } = data;
    console.log(weather)
  })
  return mappedArray

}

getWeatherDetails(WeatherArray)


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