import styles from '../styles/modules/Sticky.module.css'

export default function Sticky(){
    const url = "http://api.weatherapi.com/"
    return<>
        <div className={styles.sticky}>
            <span>
                Weather data for each city around the world. Data take from <a href={url}>http://api.weatherapi.com/</a>
            </span>
        </div>
    </>
}