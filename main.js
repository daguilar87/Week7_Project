// let c = 45;

// function draw(){
//   document.documentElement.style.setProperty('--direction', c++ + 'deg');
//   requestAnimationFrame(draw);
// }

// requestAnimationFrame(draw);


const getData = async (city,state) => {
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=69fea4a4688d79a3c874ea7b986dcb4e&units=imperial`);

    if (response.status == 200) {
        console.log(response.data.weather[0].main); {
            console.log(response.data.main.temp);
            console.log(response.data.temp_max);
            console.log(response.data.main.temp_min);
            console.log(response.data.main.feels_like);
            console.log(response.data.main.humidity);
            console.log(response.data.wind.speed);
            console.log(response.data.weather[0].icon)

        }
        return response.data
    }
    return 'API call broken'
}

const nameform = document.getElementById('nameForm');
nameform.addEventListener('submit', async (event) => {
    event.preventDefault();
    const pcity = document.getElementById('location').value;
    const pstate = document.getElementById('location').value;
    const weatherData = await getData(pcity,pstate);
    console.log(weatherData);
    loadData(weatherData);
});


let loadData = async (data) => {
    console.log(data);
    let new_row = `<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png">`;
    let new_row1 = `<p>Weather Condition: ${data.weather[0].main}</p>`;
    let new_row2 = `<p>Main Temp: ${data.main.temp} \u00B0 F</p>`;
    let new_row3 = `<p>Feels Like: ${data.main.feels_like} \u00B0 F</p>`;
    let new_row4 = `<p>Humidity: ${data.main.humidity}</p>`;
    let new_row5 = `<p>High: ${data.main.temp_max} \u00B0 F</p>`;
    let new_row6 = `<p>Low: ${data.main.temp_min} \u00B0 F</p>`;
    let new_row7 = `<p>Wind: ${data.wind.speed} MPH</p>`;
    document.getElementById('weather-details').innerHTML=new_row1;
    document.getElementById('current').innerHTML=new_row2;
    document.getElementById('feels-like').innerHTML=new_row3;
    document.getElementById('humidity').innerHTML=new_row4;
    document.getElementById('high').innerHTML=new_row5;
    document.getElementById('low').innerHTML=new_row6;
    document.getElementById('wind').innerHTML=new_row7;
    document.getElementById('weather-icon').innerHTML=new_row;
};

