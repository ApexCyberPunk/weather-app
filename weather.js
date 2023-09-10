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
    let url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric`;

    fetch(url)
        .then((x) => x.json())
        .then((y) => {
            console.log(y)
        })
}
};

window.addEventListener('load', getWeather)



