const result = document.getElementById('result')
const searchBtn = document.getElementById('search-btn')
const cityRef = document.getElementById('city');

// Function to fetch weather details

let getWeather = () => {

    let cityValue = cityRef.value
//  if input field is empty
if(cityValue.length == 0) {
    result.innerHTML = `<h3> Please enter a city name</h3>`;
} else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;

    fetch(url)
        .then((x) => x.json())
        // if city name is valid
    //c for copy since the map is a copy of the json data...
        .then((dataC) => {
            result.innerHTML = `
            <h2>${dataC.name}</h2>
            <h4 class="weather">${dataC.weather[0].main}</h4>
            <h4 class="desc">${dataC.weather[0].description}</h4>
           <img src="https://openweathermap.org/img/w/${dataC.weather[0].icon}.png">
           <h1>${dataC.main.temp}&#176;</h1>
           <div class="temp-container">
            <div>
            <h4 class="title">min</h4>
            <h4 class="temp">${dataC.main.temp_min}&#176;</h4>
            </div>
            <div>
            <h4 class="title">max</h4>
            <h4 class="temp">${dataC.main.temp_max}&#176;</h4>
            </div>
            
            </div>

            `
        })

        .catch(() => {
            result.innerHTML = `<h3>City not found</h3>`
        })
}

cityRef.value = ""

};


searchBtn.addEventListener('click', getWeather)

window.addEventListener('load', getWeather)



