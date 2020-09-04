
// select elements
const namef = document.querySelector("#name");
const latf = document.querySelector("#lat");
const lngf = document.querySelector('#lng');
const humidityf = document.querySelector('#humidity')




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
