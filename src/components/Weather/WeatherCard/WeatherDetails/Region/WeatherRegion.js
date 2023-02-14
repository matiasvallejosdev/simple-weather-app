import './WeatherRegion.css'

export default function WeatherRegion({city, region, country}){
    return<>
        <h1 className="region">
            <span className="region__city">
                {city},
            </span>
            <span className="region__state">
                {region}
            </span>
        </h1>
        <p className="region">
            <span className="region__country">
                {country}
            </span>
        </p>
    </>
}