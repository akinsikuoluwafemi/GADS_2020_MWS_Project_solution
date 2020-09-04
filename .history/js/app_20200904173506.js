

// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

    let url = `api.openweathermap.org/data/2.5/weather?q=London&appid=3684b0394f654d433041c59dfbdf9904`;

    fetch(url)
        .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })


