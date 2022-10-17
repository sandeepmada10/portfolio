import React, { useState, useEffect } from 'react';
import { getLocation, getWeather } from "./weather.js";
import "./weather.css";
import { toCelsius } from '../../utility/celsius-to-fahrenheit.js';

function Myweather() {
    const [myweather, setMyweather] = useState({});
    const getMyWeather = async () => {
        const location = await getLocation();
        console.log(location);
        const Weatherdetails = await getWeather(17.000538, 81.804031);

        console.log(Weatherdetails);

        setMyweather(Weatherdetails);
        console.log(myweather);

    }

    useEffect(() => {
        getMyWeather();
    }, [])

   
    const Celsius = toCelsius(myweather?.main?.temp);

    return (
        <>
            <main>
                {(typeof myweather.main != "undefined") ? (
                    <div>
                        <div className="weather">
                            <img src={`http://openweathermap.org/img/w/${myweather.weather[0].icon}.png`} alt="weather" className="weather-icon" />
                            <div className='weather-condition'><strong>{myweather.weather[0].main}</strong></div>
                            <div className="temperature">
                                <div className="celsius"><strong>{Celsius.toFixed(2)}°C</strong></div>
                                <div className="vertical"></div>
                                <div className="fahrenheit"><strong>{myweather.main.temp}°F</strong></div>
                            </div>
                            <div className='area'>
                                <img src='location.png' alt="location" className='location-icon' />
                                <div className="location">{myweather.name}, {myweather.sys.country}</div>
                            </div>
                            <div className='humidity'>Humidity : {myweather.main.humidity} </div>
                        </div>
                    </div>
                ) : ('')}
            </main>
        </>
    )
}
export default Myweather;