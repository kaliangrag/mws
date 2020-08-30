//Adding event listener('click') on the button 
let button = document.getElementById('btn').addEventListener('click', getweather);
document.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        getweather();
    }
})

function getweather() {
    //accessing elements from the HTML with use of DOM             
    let city = document.getElementById('search').value;
    let units = document.getElementById("units").value;

    let apiKey = '54a6603e9b0f47ce4b1b2630fd60bf1b';

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey + '&units=' + units)

        .then(response => response.json())   // Since, promise is returned from fetch
        .then(response => {

            // Declaring all the variables at once
            let weather, description, temperature, feelsLike, humidity, visibility, imageUrl;

            // Getting the data from the Open Weather API Request
            weather = response.weather[0].main;
            description = response.weather[0].description;
            temperature = response.main.temp;
            feelsLike = response.main.feels_like;
            humidity = response.main.humidity;
            visibility = response.visibility;

            // Getting the weather image from the Unsplash API
            imageUrl = 'https://source.unsplash.com/200x200/?' + weather;

            // replacing the value of the accessed elements with the response data
            document.getElementById("image").src = imageUrl;
            // document.getElementById("output").innerHTML = "<h1>" + response.current.weather_descriptions[0] + "</h1> Temperature: " + response.current.temperature + "<br> Feels like: " + response.current.feelslike + "<br> UV Index: " + response.current.uv_index + "<br> Humidity: " + response.current.humidity + "<br> Cloud Cover: " + response.current.cloudcover;
            document.getElementById("output").innerHTML = "<h1>" + description.toUpperCase() + "</h1> Temperature: " + temperature + "<br> Feels like: " + feelsLike + "<br> Humidity: " + humidity + "<br> Visibility: " + visibility;
        })
}   