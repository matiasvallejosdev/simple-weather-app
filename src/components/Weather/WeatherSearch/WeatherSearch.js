/*
* Weather Search Bar
This is an input form to search weather.
*/
import styles from '../../../styles/components/WeatherSearch.module.css'
import {useState} from "react";

export default function WeatherSearch({searchCallback}) {
    const [searchArea, setSearchArea] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        searchCallback(searchArea)
    }

    const handleChange = (e) => {
        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setSearchArea(value)
    }

    return <>
        <div className={styles.search}>
            <form onSubmit={handleSubmit} className={styles.searchForm} id="search" action=''>
                <input onKeyUp={(e) => handleChange(e)}
                       onChange={(e) => handleChange(e)}
                       onBlur={(e) => handleChange(e)}
                       value={searchArea} type="text" className={styles.searchBox}
                       placeholder="Search"/>
                <input type="submit" className={styles.searchSubmit} value="Find"/>
            </form>
        </div>
    </>
}