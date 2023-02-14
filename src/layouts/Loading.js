import styles from '../styles/modules/Loading.module.css'

export default function Loading(){
    return<>
        <div className="loading">
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
    </>
}