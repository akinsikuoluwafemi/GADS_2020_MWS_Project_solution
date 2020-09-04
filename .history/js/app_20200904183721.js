
// select elements
const nameValue = document.querySelector("#name");
const latValue = document.querySelector("#lat");
const lngValue = document.querySelector('#lng');
const humidityValue = document.querySelector('#humidity')
const tempValue = document.querySelector('#temp');
const descValue = document.querySelector('#desc');
const presValue = document.querySelector()


const GetWeather = (Location) => {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${Location}&appid=914023c54fa48cb8be92d9179794a8ba`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

GetWeather("lagos");
