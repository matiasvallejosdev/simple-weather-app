import './WeatherTemperature.css'

export default function WeatherTemperature({temp}){
    return<>
        <h1 className="temperature">
            <span>{temp}</span>
            <span>°C</span>
        </h1>
    </>
}