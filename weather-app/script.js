const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('search-btn');
const temp = document.getElementById('temp');
const cityName = document.getElementById('cityName');
const weather = document.getElementById('weather');
const iconDiv = document.getElementById('weather-icon');
const forecastDiv = document.getElementById('forecast');

// Helper function for icons
function getWeatherIcon(code) {
  if (code === 0) return '☀️'; // Clear
  if (code <= 3) return '⛅'; // Partly cloudy
  if (code <= 45) return '🌫️'; // Fog
  if (code <= 61) return '🌦️'; // Light rain
  if (code <= 67) return '🌧️'; // Rain
  if (code <= 71) return '❄️'; // Snow
  if (code <= 95) return '⛈️'; // Thunderstorm
  return '☁️'; // Default cloudy
}

async function fetchWeather() {
  const city = cityInput.value.trim();
  if (!city) {
    alert('Please enter a city name');
    return;
  }

  try {
    // Step 1: Get city coordinates
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`
    );
    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      alert('City not found!');
      return;
    }

    const lat = geoData.results[0].latitude;
    const lon = geoData.results[0].longitude;
    const place = geoData.results[0].name;

    // Step 2: Fetch current + 7-day weather
    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`
    );
    const weatherData = await weatherRes.json();
    console.log(weatherData);

    // Step 3: Current weather
    const current = weatherData.current_weather;
    temp.innerText = `${current.temperature} °C`;
    cityName.innerText = place;
    weather.innerText = `Wind: ${current.windspeed} km/h`;
    iconDiv.innerHTML = `<div class="icon">${getWeatherIcon(current.weathercode)}</div>`;

    // Step 4: 7-day forecast
    forecastDiv.innerHTML = '';
    const days = weatherData.daily.time;
    const maxTemps = weatherData.daily.temperature_2m_max;
    const minTemps = weatherData.daily.temperature_2m_min;
    const weatherCodes = weatherData.daily.weathercode;

    days.forEach((day, i) => {
      const card = document.createElement('div');
      card.classList.add('day-card');
      card.innerHTML = `
        <p><strong>${day}</strong></p>
        <p>${getWeatherIcon(weatherCodes[i])}</p>
        <p>${maxTemps[i]}° / ${minTemps[i]}°</p>
      `;
      forecastDiv.appendChild(card);
    });
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to fetch weather data. Try using a VPN if you’re in Asia.');
  }
}

searchBtn.addEventListener('click', fetchWeather);
