

const WEATHER_API_KEY = "0139dccc79cba58967920c0a8471f1e1";
export function getLocation() {
  return new Promise((resolve, reject) => {
    function getPosition(success, error) {
      if (error) {
        reject(error);
      }
      if (success) {
        resolve(success);
      }
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getPosition);
    }
  });
}
function fetchWeatherByLatAndLong(latitude, longitude) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`;
  return fetch(url);
}
export async function getWeather(lat, long) {

  try {
    const response = await fetchWeatherByLatAndLong(lat, long);
    const data = await response.json();
    return data;
  } catch (ex) {
    console.log(ex);
  }
}