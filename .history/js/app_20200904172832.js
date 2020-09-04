

// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

const getLocation = () => {
    let url = `api.openweathermap.org/data/2.5/weather?id={city id}&appid={your api key}`;

    fetch(url)
        .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })


}

getLocation('Lagos')