import styles from '../styles/modules/Error.module.css'

export default function Error({error}){
    return<>
        <p className="error__notice">{error}</p>
    </>
}