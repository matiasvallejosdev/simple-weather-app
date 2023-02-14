/*
* Weather Card
Show all the weather info in a card.
*/
import { useEffect, useState } from "react";

import styles from '../../../styles/components/WeatherCard.module.css'

import Loading from "../../../layouts/Loading";
import Error from "../../../layouts/Error";
import Find from "../../../layouts/Find";
import {WeatherAPI} from "../../../features/WeatherAPI";

import WeatherTemperature from "./WeatherDetails/Temperature/WeatherTemperature";
import WeatherIcon from "./WeatherDetails/Icon/WeatherIcon";
import WeatherDate from "./WeatherDetails/Date/WeatherDate";
import WeatherRegion from "./WeatherDetails/Region/WeatherRegion";
import WeatherCondition from "./WeatherDetails/Condition/WeatherCondition";
import WeatherAdditional from "./WeatherDetails/Additional/WeatherAdditional";

export default function WeatherCard({city}){
    const [weatherData, setWeatherData] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [isFind, setIsFind] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorData, setErrorData] = useState('')

    const fetchWeatherCity = async () => {
        if(city === ''){
            setIsFind(true)
            return;
        }
        try {
            setIsFind(false)
            setIsLoading(true)
            const weatherAPI = new WeatherAPI()
            const data = await weatherAPI.getCurrentWeather(city);
            await new Promise(r => setTimeout(r, 2000));
            if(data['error'] !==  undefined){
                setIsError(true)
                setErrorData(data['error']['message'])
                setTimeout(() =>{
                    setIsError(false)
                    setWeatherData({})
                    setIsFind(true)
                    setIsLoading(false)
                    setErrorData('')
                }, 5000)
            } else {
                setWeatherData(data)
                setIsLoading(false)
                setIsFind(false)
                setIsError(false)
            }
        } catch (err) {
            throw err;
        }
    }

    useEffect(() => {
        fetchWeatherCity()
    }, [city]);

    return<>
        {
            <div className={styles.card}>
                {
                    isError ?
                        <Error error={errorData}/> :
                        isFind ?
                            <Find /> :
                            isLoading ? <Loading />
                                : weatherData === undefined || Object.keys(weatherData).length === 0 ? <p>Not Found</p> : <>
                                    <div className={styles.weather}>
                                        <div className={styles.weatherBox}>
                                            <div className={styles.weatherLocation}>
                                                <WeatherRegion city={weatherData['location']['name']} region={weatherData['location']['region']} country={weatherData['location']['country']}/>
                                                <div className={styles.weatherIcon}>
                                                    <WeatherIcon src={weatherData['current']['condition']['icon']} alt={weatherData['current']['condition']['text']} />
                                                    <div>
                                                        <WeatherDate date={new Date()}/>
                                                        <WeatherCondition condition={weatherData['current']['condition']['text']}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.weatherTemperature}>
                                                <WeatherTemperature temp={weatherData['current']['temp_c']} />
                                                <div className={styles.weatherFeels}>
                                                    <WeatherAdditional
                                                        feelsLike={weatherData['current']['feelslike_c']}
                                                        pressureIn={weatherData['current']['pressure_in']}
                                                        visibility={weatherData['current']['vis_km']}
                                                        uv={weatherData['current']['uv']}
                                                        precipitation={weatherData['current']['precip_mm']}
                                                        wind={weatherData['current']['wind_kph']}
                                                        humidity={weatherData['current']['humidity']}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                }
            </div>
        }
    </>
}