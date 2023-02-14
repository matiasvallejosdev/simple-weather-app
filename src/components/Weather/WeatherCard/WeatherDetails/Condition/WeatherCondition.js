import './WeatherCondition.css'

export default function WeatherCondition({condition}){
    return <p className="condition">
        {condition}
    </p>
}