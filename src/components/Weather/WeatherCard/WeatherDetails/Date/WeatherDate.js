import './WeatherDate.css'

const getFullyWeekDay = (d) => {
    return `${d.toDateString()}`;
}

export default function WeatherDate({date}){
    return<>
        <p className="weatherdate">{getFullyWeekDay(date)}</p>
    </>
}