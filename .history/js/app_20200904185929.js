
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


let



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


const handleSubmit = (e) => {
    e.preventDefault();
    
    GetWeather(inputField.value);

    console.log(inputField.value ,'I am submited')

    inputField.value = ""

}


form.addEventListener('submit', handleSubmit);