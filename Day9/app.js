const search = document.querySelector('#search'),
    cityName = document.querySelector('.city'),
    country = document.querySelector('.country'),
    value = document.querySelector('.value'),
    shortDesc = document.querySelector('.short-desc'),
    visibility = document.querySelector('.visibility span'),
    wind = document.querySelector('.wind span'),
    cloud = document.querySelector('.cloud span'),
    date = document.querySelector('.date'),
    time = document.querySelector('.time');

async function changeWeatherUI(city = 'Ha Noi') {
    const ApiKey = '889ecee5117e82713a3eb70b482bf229',
    ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}`;

    let data = await fetch(ApiUrl).then(res => res.json());
    if(data.cod == 200) {
        console.log(data);
        cityName.innerText = data.name;
        country.innerText = data.sys.country;
        value.innerText = parseInt(data.main.temp - 273.15);
        shortDesc.innerText = data.weather[0].main;
        visibility.innerText = data.visibility + ' (m)';
        wind.innerText = data.wind.speed + ' (m/s)';
        cloud.innerText = data.clouds.all + ' (%)';
        date.innerText = new Date().toLocaleDateString('vi');
        time.innerText = new Date().toLocaleTimeString('vi');
    }
}

changeWeatherUI();

search.addEventListener('keydown', e => {
    if(e.key == 'Enter') {
        changeWeatherUI(search.value.trim());
    }
})