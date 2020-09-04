

// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

const getLocation = () => {
    let url = `api.openweathermap.org/data/2.5/weather?q={Nigeria}&appid={914023c54fa48cb8be92d9179794a8ba}`;

    fetch(url)
        .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })


}

getLocation()