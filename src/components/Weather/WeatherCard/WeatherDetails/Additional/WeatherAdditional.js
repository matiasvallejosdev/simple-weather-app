import './WeatherAdditional.css'

export default function WeatherAdditional({feelsLike, pressureIn, visibility, uv, precipitation, wind, humidity}){
    return<>
        <p className="additional">
            Feels like: {feelsLike} °C
        </p>
        <p className="additional">
            Pressure: {pressureIn} %
        </p>
        <p className="additional">
            Visibility: {visibility} km
        </p>
        {/*<p className="additional">*/}
        {/*    UV index: {uv}*/}
        {/*</p>*/}
        <p className="additional">Precipitation: {precipitation} mm</p>
        <p className="additional">Wind: {wind} km/h</p>
        <p className="additional">Humidity: {humidity} %</p>
    </>
}