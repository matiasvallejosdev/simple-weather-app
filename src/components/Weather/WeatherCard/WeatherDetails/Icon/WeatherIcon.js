import './WeatherIcon.css'

export default function WeatherIcon({src, alt}){
    return(
        <img className="icon" src={src} alt={alt} border="0"/>
    )
}