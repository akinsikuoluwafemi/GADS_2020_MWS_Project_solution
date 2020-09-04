
// select elements
const name = document.querySelector("#name");
const lat = document.querySelector("#lat");
const lng = document.querySelector('#lng');
const humidity = document.querySelector('#humidity')




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
