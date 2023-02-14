/*
* Home Page
This page contains a search bar where a
user can find each city around the world.
*/
import {useEffect, useState} from "react";
import {LocationAPI} from "../features/LocationAPI";

import WeatherCard from "../components/Weather/WeatherCard/WeatherCard";
import WeatherSearch from "../components/Weather/WeatherSearch/WeatherSearch";


export default function Home(){
    const [city, setCity] = useState('');

    const getCurrentLocation = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const locationAPI = new LocationAPI()

        locationAPI.getReverseLocation(latitude, longitude)
            .then((data) => {
                setCity(data.city)
            })
            .catch((error) => {
                console.log(`Couldn't fetch your location ${error}`)
            })
    }

    // https://stackoverflow.com/questions/62631053/useeffect-being-called-multiple-times
    useEffect(() => {
        navigator.geolocation
            .getCurrentPosition((position) => getCurrentLocation(position),
                () => console.log("Unable to get current position!"))
    }, []);


    return<>
        <div className="container container__home">
            <WeatherSearch searchCallback={setCity} />
            <WeatherCard city={city} />
        </div>
    </>
}