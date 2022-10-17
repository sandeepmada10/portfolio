import React, { useState, useEffect } from 'react';
import { getLocation, getWeather } from "./weather.js";
import "./weather.css";
import { toCelsius } from '../../utility/celsius-to-fahrenheit.js';

function Userweather() {
    const [userweather, setUserweather] = useState({});
    const getUserWeather = async () => {
        const location = await getLocation();
        console.log(location);
        const Weatherdetails = await getWeather(
            location.coords.latitude,
            location.coords.longitude
        );
        console.log(Weatherdetails);

        setUserweather(Weatherdetails);
        console.log(userweather);

    }

    useEffect(() => {
        getUserWeather();
    }, [])

   
    const Celsius = toCelsius(userweather?.main?.temp);


    return (
        <main>
            {(typeof userweather.main != "undefined") ? (
                <div>
                    <div className="weather">
                        <img src={`http://openweathermap.org/img/w/${userweather.weather[0].icon}.png`} alt="weather" className="weather-icon" />
                        <div className='weather-condition'><strong>{userweather.weather[0].main}</strong></div>
                        <div className="temperature">
                            <div className="celsius"><strong>{Celsius.toFixed(2)}°C</strong></div>
                            <div className="vertical"></div>
                            <div className="fahrenheit"><strong>{userweather.main.temp}°F</strong></div>
                        </div>
                        <div className='area'>
                            <img src='location.png' alt="location" className='location-icon' />
                            <div className="location">{userweather.name}, {userweather.sys.country}</div>
                        </div>
                        <div className='humidity'>Humidity : {userweather.main.humidity} </div>
                    </div>
                </div>
            ) : ('')}
        </main>
    )
}
export default Userweather;